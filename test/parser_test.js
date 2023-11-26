'use strict';

var vows = require('vows');
var assert = require('assert');
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
            if(['jq', 'xq'].indexOf(file.substring(file.length - 2)) !== -1) {
                files.push(file);
            }
        });
    }
    return files;
};

var files = getFiles('test/queries/basex');
files = files.concat(getFiles('test/queries/update'));
files.forEach(function(file){
    batch[file] = function(){
        const src=fs.readFileSync(file, 'utf-8');
        //console.log(file);
        var linter = new XQLint(src, { styleCheck: false, fileName: file, processor: 'basex-9' });
        var syntaxError = linter.hasSyntaxError();
        if(syntaxError) {
            assert.equal(syntaxError, false, linter.getMarkers()[0].message);
        } else {
            var errors = linter.getErrors();
            //console.log(errors)
            assert.equal(errors.length === 0, true, 'Check for static errors');
        }
    };
});
var files = getFiles('test/queries/broken.xq');
files.forEach(function(file){
    batch[file] = function(){
        const src=fs.readFileSync(file, 'utf-8');
        //console.log(file);
        var linter = new XQLint(src, { styleCheck: false, fileName: file, processor: 'basex-10' });
        var syntaxError = linter.hasSyntaxError();
        assert.equal(syntaxError, true, "is broken");
        var errors = linter.getErrors();
        //console.log(errors)
        assert.equal(errors.length === 2, true, 'Check for static errors');
        }
    }
);
vows.describe('Test Parser').addBatch(batch).export(module);
