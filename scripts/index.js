'use strict';
// generate index file
var dir='../specs/libs/basex-9.7';

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
//files = files.concat(getFiles('test/queries/update'));
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
            var ns=xqdoc.moduleNamespace;
            result[ns]=xqdoc;
            console.log(ns);
         }
    }
);
console.log(Object.keys(result));
fs.writeFileSync(dir + '/index.json',JSON.stringify(result,undefined,1));
