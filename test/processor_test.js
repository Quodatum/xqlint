"use strict";
var vows = require('vows');
var assert = require('assert');
var path = require('path');
var fs = require('fs');

var XQLint = require('../lib/xqlint');
vows.describe('Test processor functions').addBatch({
 
    'basex10': function () { 
        const pi="basex-10";
        var linter = new XQLint.XQLint("42",{processor: pi});
        var p = linter.getProcessor();
   
        assert.equal(p, pi,"Set processor");
    },
    'basex9': function () { 
        const pi="basex-9";
        var linter = new XQLint.XQLint("42",{processor: pi});
        var p = linter.getProcessor();
   
        assert.equal(p, pi,"Set processor");
    },
   
    'library': function () { 
        const pi="basex-10";
        var linter = new XQLint.XQLint("42",{processor: pi});
        var p = linter.getLibrary(); 
        assert.equal(typeof p, "object","library");
    },
    'processors': function () { 
        var p = XQLint.profiles();
        assert.equal(p.length, 3,"processor names");
    }
}).export(module);