'use strict';
// generate module-library.json file from xqm files in dir
var processors = {
    'basex-9.7': { 'src': 'specs/libs/basex-9.7' },
    'basex-10.6': { 'src': 'specs/libs/basex-10.0' },
    'xpath-3.1': { 'src': 'specs/libs/w3c/xpath3.1-fn.xqm' }
}
var dir = 'specs/libs/basex-9.7';
var fn = 'specs/libs/w3c/xpath3.1-fn.xqm';
var out = 'lib/packages/';

var path = require('path');
var fs = require('fs');
var ffs = require('final-fs');

var XQLint = require('../lib/xqlint').XQLint;

var getFiles = function (p) {
    p = path.resolve(path.normalize(p));
    var files = [];
    if (fs.statSync(p).isFile()) {
        files.push(p);
    } else {
        var list = ffs.readdirRecursiveSync(p, true, p);
        list.forEach(function (file) {
            if (['xqm'].indexOf(file.substring(file.length - 3)) !== -1) {
                files.push(file);
            }
        });
    }
    return files;
};

function importMods(files) {
    var result = {};
    files.forEach(function (file) {
        console.log("processing..", file);
        //@todo processor: ?
        var linter = new XQLint(fs.readFileSync(file, 'utf-8'), { styleCheck: false, fileName: file });
        var syntaxError = linter.hasSyntaxError();
        if (syntaxError) {
            console.log("ERR: ", linter.getMarkers()[0].message);
        } else {
            var xqdoc = linter.getXQDoc();
            var module = {
                ns: xqdoc.moduleNamespace,
                prefixes:["TODO"],
                functions: {},
                variables: {}
            };
            xqdoc.variables.forEach(function (v) {
                const key = v.uri + '#' + v.name;
                module.variables[key] = {
                    annotations: [],
                    name: v.name,
                    eqname: { uri: v.uri, name: v.name }
                }
            });
            xqdoc.functions.forEach(function (fn) {
                const arity = fn.params.length;
                const key = fn.uri + '#' + fn.name + '#' + arity;
                module.functions[key] = {
                    params: fn.params,
                    annotations: [],
                    name: fn.name,
                    arity: fn.arity,
                    eqname: { uri: fn.uri, name: fn.name }
                };
            });
            result[xqdoc.moduleNamespace] = module;
            console.log(xqdoc.moduleNamespace);
        }
    });
    return result;
};
Object.keys(processors).forEach(function (proc) {
    const src = processors[proc].src;
    var files = getFiles(src)
    var xx = importMods(files)
    console.log(Object.keys(xx));
    fs.writeFileSync(out + proc + ".json", JSON.stringify(xx, undefined, 1));

});
