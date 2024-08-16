// generate symbols
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var src="test/queries/pdfbox/pdfbox3.xqm";
//var src="test/queries/issues/pic-datefix.xq";
//var src="test/queries/rbtree.xq/rbtree.xq";
//src="cases\history.xqm";
const opts = {
    processor: 'basex-10',
    styleCheck: false
};
var linter = new XQLint(fs.readFileSync(src, 'utf-8'),opts);
// .hasSyntaxError()

var syms=linter.getSymbols();
console.log(JSON.stringify(syms,undefined," "));

