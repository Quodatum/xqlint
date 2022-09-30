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
# xqdoc

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
## Comment handling
Comment are treated as whitespace (WS) by the parser.
`xqdoc.WS()`sets `node.getParent.comment = parseComment(node.value);`

and
`exports.parseComment = function(comment){` returns object `{description:..}`

# response to import module

...
