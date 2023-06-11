// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var baseUri="C:/Users/andy/git/quodatum/xqlint/";
var file="test/xqlint_queries/namespaces/1.xq";
var file="test/queries/rbtree.xq/map.xq";
var linter = new XQLint(fs.readFileSync(baseUri+file, 'utf-8'), { processor: 'basex', styleCheck: false });
var markers = linter.getMarkers();
console.log(markers);
