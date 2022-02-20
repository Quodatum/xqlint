
const XQLint = require("../lib/xqlint").XQLint;
const CodeFormatter = require("../lib/formatter/formatter").CodeFormatter;
var xquery = "4 + ";
var linter = new XQLint(xquery, { styleCheck: false });
var ast = linter.getAST();
console.log(linter.printAST());
