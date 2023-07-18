
var vows = require('vows');
var assert = require('assert');
var path = require('path');
var fs = require('fs');
const CodeFormatter = require('../lib/formatter/formatter').CodeFormatter;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

var XQLint = require('../lib/xqlint').XQLint;
vows.describe('Test reported issues').addBatch({
 
    'import #28': function () {
        const src=path.resolve('test/queries/rbtree.xq/map.xq');
        var sctx = new StaticContext(undefined,undefined,'basex-9');
        sctx.setModuleResolver(function(uri,ats){//uri, hints
            const target=path.resolve(src,"..",ats[0].uri);
            console.log("Resolver: :",src, "->",target);
            const linter = new XQLint(fs.readFileSync(target, 'utf-8'),
            {
             
                styleCheck: false
            });
            const xqdoc=linter.getXQDoc(true);
            return xqdoc;
        });
        var linter = new XQLint(fs.readFileSync(src, 'utf-8'),
            {
                styleCheck: false,
                staticContext: sctx
            });
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    },
    'format #27': function () {
        var linter = new XQLint(fs.readFileSync('test/queries/issues/issue27.xq', 'utf-8'), { styleCheck: false });
        const ast = linter.getAST();
        const formatter = new CodeFormatter(ast);
        const formatted = formatter.format().trim();
        var linter = new XQLint(formatted, { styleCheck: false });
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    },
}).export(module);