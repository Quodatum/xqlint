// format a doc

var fs = require('fs');
const CodeFormatter = require('../../lib/formatter/formatter').CodeFormatter;

var XQLint = require('../../lib/xqlint').XQLint;
var linter = new XQLint(fs.readFileSync('test/queries/issues/issue27.xq', 'utf-8'), { styleCheck: false });
const ast = linter.getAST();
const formatter = new CodeFormatter(ast);
const formatted = formatter.format();
console.log(formatted);
