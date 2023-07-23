// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;

var linter = new XQLint(fs.readFileSync('cases/override.xq', 'utf-8'), { styleCheck: false });
var links = linter.getDocLinks();
console.log(links);
