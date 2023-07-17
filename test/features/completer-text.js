// info about static context at a point in the source
const txt= 'declare function local:test($hello){ $hello }; lo';
const opts = {
    processor: 'basex-10'
    , styleCheck: false
};
var XQLint = require('../../lib/xqlint').XQLint;
var linter = new XQLint(txt);

var pos = { line: 0, character: txt.length };
var proposals = linter.getCompletions(pos);

console.log(proposals);