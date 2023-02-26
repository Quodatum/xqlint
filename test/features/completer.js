// info about static context at a point in the source
var fs = require('fs');
var StaticContext = require('../../lib/compiler/static_context').StaticContext;
var XQLint = require('../../lib/xqlint').XQLint;

var source = 'import module namespace ns="http://basex.org/modules/util";';
var sctx = new StaticContext(undefined, undefined, 'basex');
var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
//sctx.availableModuleNamespaces = Object.keys(index);
var linter = new XQLint(source, { staticContext: sctx });
var pos = { line: 0, character: source.length };

var linter = new XQLint(source , { staticContext: sctx });
var pos = { line: 0, character: source.length };
var proposals = linter.getCompletions(pos);

console.log(proposals);