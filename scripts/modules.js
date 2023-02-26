'use strict';
// generate index.json file from xqm files in dir
var dir='specs/libs/basex-9.7';
var fn='specs/libs/w3c/xpath3.1-fn.xqm';
var out='lib/compiler/module-library.json';

var path = require('path');
var fs = require('fs');
var ffs = require('final-fs');

var XQLint = require('../lib/xqlint').XQLint;

var batch = {};
var getFiles = function(p){
    p = path.resolve(path.normalize(p));
    var files = [];
    if(fs.statSync(p).isFile()){
        files.push(p);
    } else {
        var list = ffs.readdirRecursiveSync(p, true, p);
        list.forEach(function(file){
            if(['xqm'].indexOf(file.substring(file.length - 3)) !== -1) {
                files.push(file);
            }
        });
    }
    return files;
};

var files = getFiles(dir);
files = files.concat(getFiles(fn));
var result={};
files.forEach(function(file){
         console.log("processing..",file);
        //@todo processor: ?
        var linter = new XQLint(fs.readFileSync(file, 'utf-8'), { styleCheck: false, fileName: file, processor: 'basex' });
        var syntaxError = linter.hasSyntaxError();
        if(syntaxError) {
            console.log("ERR: ",linter.getMarkers()[0].message);
        } else {
            var xqdoc = linter.getXQDoc();
            var module={ns: xqdoc.moduleNamespace, functions: {}, variables: {}};
            xqdoc.variables.forEach(function(v){
                const key= v.uri + '#' + v.name;
                module.variables[key]={
                    annotations: [],
                    name: v.name,
                    eqname: { uri: v.uri, name: v.name }
                }
            });
            xqdoc.functions.forEach(function(fn){
                const arity = fn.params.length;
                const key= fn.uri + '#' + fn.name + '#' + arity;
                module.functions[key]={
                    params: fn.params,
                    annotations: [],
                    name: fn.name,
                    arity: fn.arity,
                    eqname: { uri: fn.uri, name: fn.name }
                };
            });
            result[xqdoc.moduleNamespace]=module;
            console.log(xqdoc.moduleNamespace);
         }
    }
);
console.log(Object.keys(result));
fs.writeFileSync(out,JSON.stringify(result,undefined,1));
