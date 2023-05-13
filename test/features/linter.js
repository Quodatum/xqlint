// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var baseUri="C:/Users/andy/git/quodatum/xqlint/";

var linter = new XQLint(fs.readFileSync(baseUri+'test/xqlint_queries/namespaces/1.xq', 'utf-8'), { styleCheck: false });
var markers = linter.getMarkers();
console.log(markers);
