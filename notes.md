# xqlint
Syntax `new XQLint(source, opts)` where
opts is
* styleCheck: false
* staticContext
## module.js
Exports Basex, W3, Expath

## test/module_resolver_test.js
## test/index.js
```xquery
{namespace1:{ns:namespace1, description:, 
             functions:[], variables:[]
             }
}
```
## 2022-01-13 thurs
looking at `module_resolver_test.js` 8 errors

 `sctx.setModulesFromXQDoc(index);`
   ✗ test 11 
      TypeError: Cannot read property 'variables' of undefined 
      
## 2022-01-11
remove functionname "normalization"
focus on vows:one functions
`vows/test/module_resolver_test.js`
···✗✗·✗✗·✗✗✗·····✗✗✗✗·✗✗  
   
   
     
      ✗ test var (4) 
        » Number of proposals // /config/workspace/xqlint/node_modules/vows/lib/assert/macros.js:14 
   
      ✗ test expr (1) 
        »        
        actual expected 
```javascript
var linter = new XQLint('declare function local:foo() as xs:string { local:bar() }; declare function local:bar() as xs:string { "h" };   local:foo()');
var markers = linter.getMarkers();
assert.equal(markers.length, 0, 'Number of markers');
```
```
✗··✗✗  
  
      ✗ functions (1) 
        » Number of markers // /config/workspace/xqlint/node_modules/vows/lib/assert/macros.js:14 
   
      ✗ functions (4) 
        » Number of markers // /config/workspace/xqlint/node_modules/vows/lib/assert/macros.js:14 
   
      ✗ functions (5) 
        » Number of markers // /config/workspace/xqlint/node_modules/vows/lib/assert/macros.js:14 
  ✗ Broken » 2 honored ∙ 3 broken (82.317s) 
``` 
## more
* `test/xqlint_queries/variables/4.xq` missing VarName
`let $bar := 1 return $bar`
goes wrong at **FunctionName**
```
startNonterminal RelativePathExpr 21
startNonterminal StepExpr 21
startNonterminal PostfixExpr 21
startNonterminal PrimaryExpr 21
startNonterminal VarRef 21
TERMINAL: TOKEN $
startNonterminal VarName 22
startNonterminal EQName 22
startNonterminal QName 22
startNonterminal FunctionName 22
TERMINAL: QName bar
endNonterminal FunctionName
POP:  FunctionName
endNonterminal QName
POP:  QName
endNonterminal EQName
POP:  EQName
endNonterminal VarName
```
# translator
 ```
 translator.js

 this.FunctionCall = function(node){
        this.visitOnly(node, ['ArgumentList']);
        var name = translator.getFirstChild(node, 'EQName');

declare function local:test($hello){
     $hello
};
```
