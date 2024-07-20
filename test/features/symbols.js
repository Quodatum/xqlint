// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
//var src="test/queries/rbtree.xq/map.xq";
var src="test/queries/issues/pic-datefix.xq";
//var src="test/queries/rbtree.xq/rbtree.xq";
//src="cases\history.xqm";
var linter = new XQLint(fs.readFileSync(src, 'utf-8'));
// .hasSyntaxError()

var syms=linter.getSymbols();
console.log(JSON.stringify(syms,undefined," "));

