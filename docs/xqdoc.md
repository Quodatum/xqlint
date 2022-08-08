### xqdoc

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