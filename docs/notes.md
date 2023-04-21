# xqlint

Syntax `new XQLint(source, opts)` where
opts is
* styleCheck: false
* staticContext:


## staticContext.js
Models the static context.
### namespaces

### availableModuleNamespaces
 used only for completion?

## bugs xqdoc
moduleNamespace: not set
description: not set
defaultfunctionnamespace wrong

## translator.js
Called in xqlint. Gets markers, also adds to `sctx`

```javascript
 var translator = new Translator(sctx, ast);
    markers = markers.concat(translator.getMarkers());
...
this.visit(ast);
```

messages..
```javascript
StaticWarning('W01', 'Avoid this type of import. Use import module namespace instead', pos);
StaticWarning('W02', '"' + uri + '" already bound to the "' + namespace.prefixes.join(', ') + '" prefix', pos);

  addWarning('W03', 'Unused variable "' + rootStcx.variables[key].qname.name + '"', rootStcx.variables[key].pos);
  addWarning('W04', 'Unused module "' + uri + '"', namespace.pos);
  addWarning('W05', 'Untyped return value', name.pos);
  ```
#### Visitor  
```
 InsertExpr
         ::= 'insert' ( 'node' | 'nodes' ) SourceExpr InsertExprTargetChoice TargetExpr
DeleteExpr
         ::= 'delete' ( 'node' | 'nodes' ) TargetExpr
ReplaceExpr
         ::= 'replace' ( 'value' 'of' )? 'node' TargetExpr 'with' ExprSingle
RenameExpr
         ::= 'rename' 'node' TargetExpr 'as' NewNameExpr
``` 
### handlers.js

* 'W06', 'Avoid default element namespace declarations.', node.pos

### formatter/style_check.js

* [SW01] Detected CRLF
* [SW02] Tabs detected
* [SW03] Unexpected indentation of ..
* [SW04] Trailing whitespace

## module.js
Exports Basex, W3, Expath
# tests
## test/module_resolver_test.js
## test/index.js
```xquery
{namespace1:{ns:namespace1, description:, 
             functions:[], variables:[]
             }
}
```
## 2022-01-17 monday
ebnf revised
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

# definitions
* AST Abstract syntax tree
