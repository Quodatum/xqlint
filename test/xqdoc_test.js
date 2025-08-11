'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

vows.describe('Test XQdoc').addBatch({
  
    'has functions': function () {
        var linter = new XQLint(fs.readFileSync('test/queries/rbtree.xq/map.xq', 'utf-8'), { styleCheck: false });
        var xqdoc = linter.getXQDoc();
        const funs=xqdoc.functions.length;
        assert.equal(13, funs, "expected 13 functions, got "+funs);
    },
}).export(module);
