'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var StaticContext = require('../lib/compiler/static_context').StaticContext;
var XQLint = require('../lib/xqlint').XQLint;

vows.describe('Test syntax errors').addBatch({
    'test syn (1)': function(){
        var source = 'let $a:=42 #';
        var pos = { line: 0, character: source.length };
        var linter = new XQLint(source);
        var markers = linter.getMarkers("error");
        assert.equal(markers.length, 1, 'Number of markers');
        assert.equal(markers[0].code, 'XPST0003', 'parse error');
    },
    
    'test syn (2)': function(){
        var source = 'let $a:=42 #';
        var pos = { line: 0, character: source.length };
        source+=" return $b:=$a";
        var linter = new XQLint(source);
        var markers = linter.getMarkers("error");
        assert.equal(markers.length, 2, 'Number of markers');
        assert.equal(markers[0].code, 'XPST0003', 'parse error');
        assert.equal(markers[1].code, 'XQLT0001', 'previous parse error');

    }

}).export(module);
