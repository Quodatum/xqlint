// show vars
var fs = require('fs');
 var StaticContext = require('../lib/compiler/static_context').StaticContext;
 var XQLint = require('../lib/xqlint').XQLint;
// var source = 'let $bar := 1 return $bar, let $foo := 1 return $';

// var sctx = new StaticContext();
// var linter = new XQLint(source);
// var pos = { line: 0, col: source.length };
//  var proposals = linter.getCompletions(pos);
//  console.log( proposals);
//
//var source = fs.readFileSync('test/xquery.lib/www.w3.org/2005/xpath-functions/array.xqy', 'utf-8')
var source = 'let $v1 := 1 let $v2 := $v1 return $v1 + $';
        var linter = new XQLint(source);
        var lines = source.split('\n');
       var pos = { line: lines.length - 1, col: lines[lines.length - 1].length };
        var proposals = linter.getCompletions(pos);
       console.log( proposals);

