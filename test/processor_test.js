"use strict";
var vows = require('vows');
var assert = require('assert');
var path = require('path');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
vows.describe('Test processor functions').addBatch({
 
    'name': function () { 
        const pi="basex-10";
        var linter = new XQLint("42",{processor: pi});
        var p = linter.getProcessor();
   
        assert.equal(p, pi,"Set processor");
    },
    'processors': function () { 
        const pi="basex-10";
        var linter = new XQLint("42",{processor: pi});
        var p = linter.getProcessors();
   
        assert.equal(p.length, 3,"processor names");
    },
    'library': function () { 
        const pi="basex-10";
        var linter = new XQLint("42",{processor: pi});
        var p = linter.getLibrary();
   
        assert.equal(typeof p, "object","library");
    }
}).export(module);