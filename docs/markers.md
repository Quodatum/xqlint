# Marker

 export class Marker {
    pos: LintRange;
    code: string; // code
    level: string; //error,warning,info 
    message: string; // '[code] ...'
  }
  
## standard
see https://docs.basex.org/wiki/XQuery_Errors
messages..
```javascript
StaticWarning('W01', 'Avoid this type of import. Use import module namespace instead', pos);
StaticWarning('W02', '"' + uri + '" already bound to the "' + namespace.prefixes.join(', ') + '" prefix', pos);

  addWarning('W03', 'Unused variable "' + rootStcx.variables[key].qname.name + '"', rootStcx.variables[key].pos);
  addWarning('W04', 'Unused module "' + uri + '"', namespace.pos);
  addWarning('W05', 'Untyped return value', name.pos);

 addWarning('XQST0009', 'No XML Schema support "' + uri + '"', namespace.pos);

StaticError('XQST0059', 'module "' + uri + '" not found', pos);
StaticError('XQST0088', 'empty target namespace in module import or module declaration', pos);
StaticError('XQST0047', '"' + uri + '": duplicate target namespace', pos);
StaticError('XQST0033', '"' + prefix + '": namespace prefix already bound to "' + namespace.uri + '"', pos);
StaticError('XPST0081', '"' + qname.prefix + '": can not expand prefix of lexical QName to namespace URI', pos);
StaticError('XQST0048', '"' + qname.prefix + ':' + qname.name + '": Qname not library namespace', pos);
StaticError('XQST0049', '"' + qname.name + '": duplicate variable declaration', pos);
StaticError('XPST0008', '"' + qname.name + '": undeclared variable', pos);
StaticError('XPST0008', '"' + qname.name + '#' + arity + '": undeclared function', pos);
StaticError('XQST0048', '"' + qname.prefix + ':' + qname.name + '": Qname not library namespace', pos);
StaticError('XQST0034', '"' + qname.name + '": duplicate function declaration', pos);
```

### formatter/style_check.js

* [SW01] Detected CRLF
* [SW02] Tabs detected
* [SW03] Unexpected indentation of ..
* [SW04] Trailing whitespace
