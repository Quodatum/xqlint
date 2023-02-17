// info about static context at a point in the source
var fs = require('fs');
var StaticContext = require('../../lib/compiler/static_context').StaticContext;

var XQLint = require('../../lib/xqlint').XQLint;
var lib = require('../../lib/xqlint').library;
var source = 'import module namespace ns="http://basex.org/modules/util";fn:';
var sctx = new StaticContext(undefined, undefined, 'basex');
//sctx.setModulesFromXQDoc(lib);
//sctx.availableModuleNamespaces = Object.keys(lib);
var linter = new XQLint(source, { staticContext: sctx });
var pos = { line: 0, character: source.length };
var proposals = linter.getCompletions(pos);



console.log(proposals);