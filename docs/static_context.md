# The static context

Constructor: `function (parent, pos, processor)`

if processor 
then namespaces= {... N.W3, ... N.Basex, ... N.Expath}
```
s.setModulesFromXQDoc(library);
const importable=Object.keys(library).filter(ns=>library[ns].type="module")
s.availableModuleNamespaces.push(importable)
```

# namespaces:[object]

```
'http://expath.org/ns/pkg': {
        prefixes: ['pkg'],
        pos: emptyPos,
        type: 'declare',
        override: true
    },   
'http://expath.org/ns/binary' : {
    prefixes: ['bin'],
    pos: emptyPos,
    type: 'module',
    override: true
},
```
Also `used=true`

# defaultFunctionNamespaces
?
# availableModuleNamespaces:[string]
names of importable modules. Only used for import completion.
```
sctx.availableModuleNamespaces.push('http://www.28msec.com/modules/http-reponse');
```
# setModules: function(index)
Adds functions and variables to the context, also `moduleResolver` is set to a function. 
index is an object with namespace keys. Only namespaces already defined in namespaces are imported 
```
{
    ns:{
        functions: { 'uri + '#' + fn.name + '#' + fn.arity':{}},
        variables: { 'uri + '#' + name':{}}
    }
}
```
##functions
```
{
    params: [],
    annotations: [],
    name: fn.name,
    arity: fn.arity,
    eqname: { uri: uri, name: fn.name }
}
```
## variables
```
{ 
    type: 'VarDecl', 
    annotations: [], 
    eqname: { uri: uri, name: name } };
});
```
# setModuleResolver(function(uri, hints))
set a function to return 
```
{
    functions: {
        'http://www.example.com#bar#0': {pos: { sl:0, el:0, sc:0, ec:0 }, params: [],
            qname: { name: 'bar', uri: 'http://www.example.com' }
        }
    },
    variables: {
        'http://www.example.com#bar': { type: 'VarDecl', pos: { sl:0, el:0, sc:0, ec:0 }, annotations: {}, 
        qname: { name: 'bar', uri: 'http://www.example.com' } }
    }
};
```
# static_context@resolveQName
calls getNamespaceByPrefix

