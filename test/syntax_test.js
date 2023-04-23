'use strict';

var vows = require('vows');
var assert = require('assert');


var XQLint = require('../lib/xqlint').XQLint;

//  \`\`[a:\`{$a}\`. ]\`\`
vows.describe('StringConstructor').addBatch({
    'local function (1)': function () {
        var src = `
        declare function local:template($a as xs:string)
        as xs:string{   
         $a
        };
        local:template("b") 
        `;
        var linter = new XQLint(src);
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0, 'Number of markers:'+markers.length);
    }
}).export(module);