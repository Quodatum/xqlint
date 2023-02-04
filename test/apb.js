// 
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;

var src="C:/Users/andy/git/quodatum/xqdoca/src/main/lib/ast-to-xqdoc.xqm";

var linter = new XQLint(fs.readFileSync(src, 'utf-8'));
// .hasSyntaxError()
const pos={line:50, col:15};
var node=linter.getAST(pos);
console.log(`value: ${ node.value }, name: ${ node.name }`);

var sctx=linter.getSctx(pos);
console.log(sctx);