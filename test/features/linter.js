// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var baseUri = "C:/Users/andy/git/quodatum/xqlint/";
var file = "test/queries/rbtree.xq/map.xq";
const opts = {
    processor: 'basex'
    , styleCheck: false
};
var linter = new XQLint(fs.readFileSync(baseUri + file, 'utf-8'),opts);
var markers = linter.getMarkers();
console.log(markers[0]);
