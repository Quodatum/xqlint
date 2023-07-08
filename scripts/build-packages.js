'use strict';
// generate  packages json file for each processor from xqm files in dir
var processors = {
    'basex-9.7': { 'src': 'packages.src/basex-9.7' },
    'basex-10.6': { 'src': 'packages.src/basex-10.0' },
    'xpath-3.1': { 'src': 'packages.src/xpath-3.1' }
};

var out = 'packages/';

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
            if (file.endsWith('.xqm'))  {
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
        const lintOpts={ styleCheck: false, fileName: file, processor: "none" }
        var linter = new XQLint(fs.readFileSync(file, 'utf-8'), lintOpts);
        var syntaxError = linter.hasSyntaxError();
        if (syntaxError) {
            console.log("ERR: ", linter.getMarkers()[0].message);
        } else {
            var xqdoc = linter.getXQDoc(false);
          
            result[xqdoc.moduleNamespace] = xqdoc;
            console.log(xqdoc.moduleNamespace);
           // console.log(xqdoc);
        }
    });
    return result;
};
Object.keys(processors).forEach(function (proc) {
    const src = processors[proc].src;
    var files = getFiles(src)
    var xx = structuredClone(importMods(files));
    console.log(Object.keys(xx));
    fs.writeFileSync(out + proc + ".json", JSON.stringify(xx, undefined, 1));

});
