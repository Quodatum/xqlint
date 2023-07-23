'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;

vows.describe('Test Code Formatting').addBatch({
    'test style check (1)': function(){
        var linter = new XQLint(fs.readFileSync('test/queries/issues/stylecheck.xq', 'utf-8'), 
                           { styleCheck: true ,processor: 'basex-9' });
        var markers = linter.getMarkers();
        //console.log('style check (1)',markers);
        assert.equal(markers.length, 1, 'Number of markers, '+ markers.length);
    },
    
    'test style check (2)': function(){
        var linter = new XQLint(fs.readFileSync('test/queries/issues/stylecheck.xq', 'utf-8'),
                                {processor: 'basex-9'});
        var markers = linter.getMarkers();
        //console.log('style check (2)',markers);
        assert.equal(markers.length, 0, 'Number of markers, '+markers.length);
    }
}).export(module);
