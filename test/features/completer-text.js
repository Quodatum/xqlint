// info about static context at a point in the source
var txt = 'let $a as ';

var XQLint = require('../../lib/xqlint').XQLint;
var linter = new XQLint(txt);

var pos = { line: 0, character: txt.length };
var proposals = linter.getCompletions(pos);

console.log(proposals);