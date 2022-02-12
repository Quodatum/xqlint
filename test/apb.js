var XQLint = require('../lib/xqlint').XQLint;
var source = 'let $v1 := 1\nlet $foo := $v1\nreturn $v1 + $';
var linter = new XQLint(source);
var lines = source.split('\n');
var pos = { line: lines.length -1 , col: lines[lines.length - 1].length };
var proposals = linter.getCompletions(pos);
console.log(proposals);