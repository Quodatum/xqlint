// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;

var src="C:/Users/andy/git/quodatum/xqlint/test/queries/update/fun.xq";
//src="cases/history.xqm";
var linter = new XQLint(fs.readFileSync(src, 'utf-8'),{fileName: src});
var markers = linter.getMarkers()
console.log(markers);
