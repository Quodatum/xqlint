// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;
const txt='declare function local:foo($ex:foo as xs:integer) as xs:integer {  $ex:foo }; local:foo(1)';
const opts = {
    processor: 'basex-10'
    , styleCheck: false
};
var linter = new XQLint(txt,opts);
var markers = linter.getErrors();
console.log(markers);
