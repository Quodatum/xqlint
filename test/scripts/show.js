// show vars
var StaticContext = require('../../lib/compiler/static_context').StaticContext;
var XQLint = require('../../lib/xqlint').XQLint;
var source = 'let $bar := 1 return $bar, let $foo := 1 return $';
var linter = new XQLint(source);
var pos = { line: 0, col: source.length };
var proposals = linter.getCompletions(pos);
console.log(proposals)