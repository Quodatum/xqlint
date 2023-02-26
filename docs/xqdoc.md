# xqdoc
This refers to a JSON representation of an XQuery source.

## usage
xqdoc info can be imported into static context with `sctx.setModulesFromXQDoc()`

```
functions[uri + '#' + fn.name + '#' + fn.arity] = {
                        params: [],
                        annotations: [],
                        name: fn.name,
                        arity: fn.arity,
                        eqname: { uri: uri, name: fn.name }

variables[uri + '#' + name] = { type: 'VarDecl',
                                                    annotations: [], 
                                                    eqname: { uri: uri, name: name } };
                });

```

See also `sctx.setModules(index)`


## XQLint
```
  sctx =  createStaticContext(opts.processor);
  ast = h.getParseTree();
  xqdoc=new XQDoc(ast);
  .getXQDoc()
  - xqdoc.getXQDoc(sctx);
```
## xqdoc=new XQDoc(ast)
```
this.visit(ast);

```
1. for each WS node.getParent.comment=parse..

## xqdoc.getXQDoc
```
```

## Notes
Need way to get pos and posBody seperate from this call.


```json
 "functions" : {
        "http://xbrl.io/modules/bizql/components#cid#1" : {
          "params" : [ "$component-or-id" ], 
          "annotations" : [  ], 
          "name" : "cid", 
          "arity" : 1, 
          "eqname" : {
            "uri" : "http://xbrl.io/modules/bizql/components", 
            "name" : "cid"
          }
        },
```
example 
```json
{
      "isDocumented" : true, 
      "arity" : 1, 
      "name" : "abs", 
      "qname" : "fn:abs", 
      "signature" : "($arg as numeric?) as numeric? external", 
      "description" : "..", 
      "summary" : "<p>  Returns the absolute value of  $arg .</p>", 
      "annotation_str" : "", 
      "annotations" : [  ], 
      "updating" : false, 
      "parameters" : [ {
        "name" : "arg", 
        "type" : "numeric", 
        "occurrence" : "?", 
        "description" : ""
      } ], 
      "returns" : {
        "type" : "numeric?", 
        "description" : ""
      }, 
      "errors" : [  ]
}
```