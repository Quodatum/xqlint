# visit
In xqlint
```javascript
var translator = new Translator(sctx, ast); 
...
this.visit(ast);
```
visit(node) will
if node.name is function it is called 
visit node children unless function returns true

# response to import module

...

# static_context@resolveQName
calls getNamespaceByPrefix
