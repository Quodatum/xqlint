// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
//var src="test/queries/rbtree.xq/map.xq";
var src="test/queries/issues/pic-datefix.xq";
//src="cases\history.xqm";
var linter = new XQLint(fs.readFileSync(src, 'utf-8'));
// .hasSyntaxError()

var xqdoc=linter.getXQDoc(true);
console.log(JSON.stringify(xqdoc,undefined," "));

