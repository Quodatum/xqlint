"use strict";
var vows = require('vows');
var assert = require('assert');
var path = require('path');
var fs = require('fs');
const CodeFormatter = require('../lib/formatter/formatter').CodeFormatter;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

var XQLint = require('../lib/xqlint').XQLint;
vows.describe('Test reported issues').addBatch({
 
    'import #28': function () {
        const src=path.resolve('test/queries/rbtree.xq/map.xq');
        var linter = new XQLint(fs.readFileSync(src, 'utf-8'),
            {
                fileName: src,
                processor: 'basex-9'
            });
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    },
    'format #27': function () {
        var linter = new XQLint(fs.readFileSync('test/queries/issues/issue27.xq', 'utf-8'), { styleCheck: false });
        const ast = linter.getAST();
        const formatter = new CodeFormatter(ast);
        const formatted = formatter.format().trim();
        var linter2 = new XQLint(formatted, { styleCheck: false });
        var markers = linter2.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    },
    'used #41':function () {
      var src= 'declare function local:foo($a1){ $a1 }; (1,2)=>local:foo()';
      var linter=new XQLint(src);
      var markers=linter.getMarkers();
      assert.equal(markers.length,2); //untyped
    },
    'unused #42': function(){
        var src= 'declare function local:foo($_a){ 42 }; local:foo(36)';
        var linter=new XQLint(src);
        var markers=linter.getMarkers();
        assert.equal(markers.length,2); //untyped
    },
    'undeclared #51': function(){
        var src= '" A " => normalize-space() => tokenize("[\s,]+")';
        var linter=new XQLint(src,{"processor":"basex-10"});
        var markers=linter.getMarkers();
        assert.equal(markers.length,0,"normalize-space arity=1, not 2"); //untyped
    }
}).export(module);