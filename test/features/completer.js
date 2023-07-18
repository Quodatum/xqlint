// info about static context at a point in the source
var fs = require('fs');
var StaticContext = require('../../lib/compiler/static_context').StaticContext;
var XQLint = require('../../lib/xqlint').XQLint;
var source = 'import module namespace ns="http://expath.org/ns/http-client"; ns:';
var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
var sctx = new StaticContext();
sctx.setModuleResolver(function(uri){//uri, hints
    var mod = index[uri];
    var variables = {};
    var functions = {};
    mod.functions.forEach(function(fn){
        functions[uri + '#' + fn.name + '#' + fn.arity] = {
            params: []
        };
        fn.parameters.forEach(function(param){
            functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
        });
    });
    return {
        variables: variables,
        functions: functions
    };
});
sctx.availableModuleNamespaces = Object.keys(index);
var linter = new XQLint(source, { staticContext: sctx });
var pos = { line: 0, character: source.length };
var proposals = linter.getCompletions(pos);
// console.log("test1",proposals);
assert.equal(proposals.length, 3, 'Number of proposals: '+proposals.length);