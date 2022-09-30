'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

vows.describe('apb test work').addBatch({
   
    
    'test XQST0047 (4)': function(){
        var linter = new XQLint(fs.readFileSync('test/xqlint_queries/namespaces/11.xq', 'utf-8'), { styleCheck: false });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var warning = markers[0];
        assert.equal(warning.type, 'warning', 'Type of marker');
        assert.equal(warning.message.indexOf('[XQST0009]'), 0, 'Is Error [XQST0009]');
    },
    
 
}).export(module);
