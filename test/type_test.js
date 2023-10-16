'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

vows.describe('Test type completions').addBatch({
    'all types': function () {
        var source = 'let $a as ';
        var sctx = new StaticContext(undefined, undefined, 'basex-10');
        //sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        //console.log(proposals);
        assert.equal(proposals.length, 66, 'Number of proposals expected 66, got ' + proposals.length);
    },
    'match': function(){
        var source = 'let $a as e';
        var sctx = new StaticContext(undefined, undefined, 'basex-10');
        //sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        //console.log(proposals);
        assert.equal(proposals.length, 2, 'Number of proposals expected 2, got ' + proposals.length); 
    },
    'return type': function () {
        var source = 'declare function local:f() as ';
        var sctx = new StaticContext(undefined, undefined, 'basex-10');
        //sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        //console.log(proposals);
        assert.equal(proposals.length, 66, 'Number of proposals expected 66, got ' + proposals.length);
    },
}).export(module);
