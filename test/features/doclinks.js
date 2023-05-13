// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var baseUri="C:/Users/andy/git/quodatum/xqlint/";

var linter = new XQLint(fs.readFileSync(baseUri+'cases/override.xq', 'utf-8'), { styleCheck: false });
var links = linter.getDocLinks();
console.log(links);
