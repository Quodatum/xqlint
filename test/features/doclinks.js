// generate xqdoc
var fs = require('fs');
var path = require('path');

var XQLint = require('../../lib/xqlint').XQLint;
const src = path.resolve('test/queries/rbtree.xq/map.xq');
var linter = new XQLint(fs.readFileSync(src, 'utf-8'),
  { fileName: src });


var doclinks =linter.getDocLinks();

console.log(doclinks);
