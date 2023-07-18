// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
var file = "test/queries/rbtree.xq/map.xq";
const opts = {
    processor: 'basex-9'
    , styleCheck: false
};
var linter = new XQLint(fs.readFileSync( file, 'utf-8'),opts);
var markers = linter.getErrors();
console.log(markers);
