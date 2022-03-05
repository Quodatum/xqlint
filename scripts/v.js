
const XQLint = require("../lib/xqlint").XQLint;
const CodeFormatter = require("../lib/formatter/formatter").CodeFormatter;
var xquery = " declare variable $foo;";
var linter = new XQLint(xquery, { styleCheck: false });
var xq = linter.getXQDoc();
console.log(xq);
