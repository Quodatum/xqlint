

# xqdoc
```
var xql=new XQLint(source, opts)
            var ast, xqdoc, sctx
            sctx=createStaticContext(opts.processor)
            ast = h.getParseTree();
            xqdoc=new XQDoc(ast);
            markers[],
            markers+=new StyleChecker(ast, source).getMarkers()
            markers+=new Translator(ast, source).getMarkers()
xql.getXQDoc()

new XQDoc(ast)
     walks tree
```

```
///vars
 type: type,
 pos: pos,
 qname: qname,
 annotations: {}

// get functions from sctx
var fn=sctx.functions[key];
params:params
pos: pos
```
# visit
In xqlint.js
```javascript
var translator = new Translator(sctx, ast); 
...
this.visit(ast);
```
visit(node) will
if node.name is function it is called 
visit node children unless function returns true

# set processor
The `processor` option sets the XQuery engine to target.
It can be set to a known value from the keys of the file `processors.json`

This results in the `StaticContext` to be intialized with the packages listed for that key.

```
XQLint: require('./compiler/static_context').StaticContext(undefined,undefined,opts.processor)
```
`namespaces` initial set to standard Xquery 3.1 namespaces.



Old Inside
```
 namespaces = { ...namespaces, ...N.Basex, ...N.Expath }
 const library = require('./module-library.json');
 switch (processor) {
     case "basex
 }
 if ('basex' === processor) {
            s.setModules(library);
        }
```
# response to import module
XQLint exports function `resolver1(uri, ats) {//uri, hints` 

calls 
```
 importModule: function (uri, prefix, pos, ats)
  if (this.moduleResolver) {
    try {
        var mod = this.moduleResolver(uri, ats);
        if (mod.variables) {
            TreeOps.concat(this.variables, keyed(mod.variables));
        }
        if (mod.functions) {
            TreeOps.concat(this.functions, keyed(mod.functions));
        }
```
...
