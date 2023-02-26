// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;

var src="C:/Users/andy/git/quodatum/xqdoca/src/main/lib/ast-to-xqdoc.xqm";
//src="cases\history.xqm";
var linter = new XQLint(fs.readFileSync(src, 'utf-8'),{fileName: src});
var markers = linter.getMarkers()
console.log(markers);
