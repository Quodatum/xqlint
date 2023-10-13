"use strict";
const xqc = require('@quodatum/xq-catalogs');

// convert array to object representation
function keyed(arr) {
    if (!Array.isArray(arr)) { return arr; }
    const obj = {};
    arr.forEach(f => obj[f.key] = f);
    return obj;
}

exports.StaticContext = function (parent, pos, processor,baseUri) {
    //if (parent) { processor = parent.processor; }
    var TreeOps = require('../tree_ops').TreeOps;

    var Errors = require('./errors');
    var StaticError = Errors.StaticError;
    var StaticWarning = Errors.StaticWarning;

    var getSchemaBuiltinTypes = require('./schema_built-in_types').getSchemaBuiltinTypes;
    //const library = require('./module-library.json');

    var emptyPos = { sl: 0, sc: 0, el: 0, ec: 0 };
    var namespaces = {
        'http://www.w3.org/2005/xpath-functions': {
            prefixes: ['fn'],
            pos: emptyPos,
            type: 'module',
            override: true
        },
        'http://www.w3.org/2005/xquery-local-functions': {
            prefixes: ['local'],
            pos: emptyPos,
            type: 'declare',
            override: true
        },
        'http://www.w3.org/2010/xslt-xquery-serialization': {
            prefixes: ['output'],
            pos: emptyPos,
            type: 'declare',
            override: true
        },
        'http://www.w3.org/2001/XMLSchema-instance': {
            prefixes: ['xsi'],
            pos: emptyPos,
            type: 'declare'
        },
        'http://www.w3.org/2001/XMLSchema': {
            prefixes: ['xs'],
            pos: emptyPos,
            type: 'declare'
        },
        'http://www.w3.org/XML/1998/namespace': {
            prefixes: ['xml'],
            pos: emptyPos,
            type: 'declare'
        },
        'http://www.w3.org/2005/xqt-errors': {
            prefixes: ['err'],
            pos: emptyPos,
            type: 'declare',
            override: true
        },
        'http://www.w3.org/2005/xpath-functions/array': {
            prefixes: ['array'],
            pos: emptyPos,
            type: 'module',
            override: true
        },
        'http://www.w3.org/2005/xpath-functions/map': {
            prefixes: ['map'],
            pos: emptyPos,
            type: 'module',
            override: true
        },
        'http://www.w3.org/2005/xpath-functions/math': {
            prefixes: ['math'],
            pos: emptyPos,
            type: 'module',
            override: true
        }
    };


    var getVarKey = function (qname) {
        return qname.uri + '#' + qname.name;
    };

    var getFnKey = function (qname, arity) {
        return getVarKey(qname) + '#' + arity;
    };
  
    if (!parent) { namespaces = { ...namespaces, ...xqc.library(processor) }; }


    /* staticContext
    parent:any
    children: [any]
    pos:Position
    schemaSupport:boolean
    setModuleResolver(:any)
    setModules(:any)
    setModulesFromXQDoc(:any)
   moduleNamespace: string
   description: string
   defaultFunctionNamespace: string
   defaultFunctionNamespaces: [string]
   defaultElementNamespace: string
   namespaces: namespaces :any
   availableModuleNamespaces: [:string]
   
   importModule: function(uri, prefix, pos)
   getAvailableModuleNamespaces()
   getPrefixesByNamespace(:string)
   addNamespace: function (uri, prefix, pos, type)
   getNamespaces()
   getNamespace: function (:string)
   getNamespaceByPrefix(:string)
    resolveQName(value, pos)
   addVariable: function(qname, type, pos)
   getVariables()
   getVariable(:string)
   addVarRef: function(qname, pos)
         addFunctionRef: function(qname, arity, pos)
         getFunctions
         getFunction(:string,:integer)
         addFunction: function(qname, pos, params)
   */
    var s = {
        parent: parent,
        children: [],
        pos: pos,
        schemaSupport: false,
        // report missing items
        isClosed: function(){
            return (!!this.root.moduleResolver) || !!this.root.processor ;
        },
        setModuleResolver: function (resolver) {
            this.root.moduleResolver = resolver;
            return this;
        },
        setModules: function (index) {
            if (this !== this.root) {
                throw new Error('setModules() not invoked from the root static context.');
            }
            this.moduleResolver = function (uri) {
                //  console.log("resolve (get from index): ",uri) @TODO
                var mod = index[uri];
                return mod;
            };
            var that = this;
            Object.keys(this.namespaces).forEach(function (uri) {
                var ns = that.namespaces[uri];
                if (ns.type === 'module') {
                    var mod = that.moduleResolver(uri);
                    if (mod && mod.variables) {
                        TreeOps.concat(that.variables, mod.variables);
                    }
                    if (mod && mod.functions) {
                        TreeOps.concat(that.functions, mod.functions);
                    }
                }
            });
            return this;
        },
        setModulesFromXQDoc: function (xqdoc) {
            if (this !== this.root) {
                throw new Error('setModulesFromXQDoc() not invoked from the root static context.');
            }
            //We throw away all the unnecessary xqdoc information
            var index = {};
            Object.keys(xqdoc).forEach(function (uri) {
                var mod = xqdoc[uri];
                var variables = {};
                var functions = {};
                mod.functions.forEach(function (fn) {
                    functions[uri + '#' + fn.name + '#' + fn.arity] = {
                        type: 'FunctionDecl',
                        params: [],
                        annotations: [],
                        name: fn.name,
                        arity: fn.arity,
                        eqname: { uri: uri, name: fn.name }
                    };
                    fn.parameters.forEach(function (param) {
                        functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                    });
                });
                mod.variables.forEach(function (variable) {
                    var name = variable.name.substring(variable.name.indexOf(':') + 1);
                    variables[uri + '#' + name] = {
                        type: 'VarDecl',
                        annotations: [],
                        eqname: { uri: uri, name: name }
                    };
                });
                index[uri] = {
                    variables: variables,
                    functions: functions
                };
            });
            // {variables:[],functions:[]}
            this.root.moduleResolver = function (uri) {
                return index[uri];
            };
            var that = this;
            Object.keys(this.namespaces).forEach(function (uri) {
                var ns = that.namespaces[uri];
                if (ns.type === 'module') {
                    //console.log("setModulesFromXQDoc: ",uri)
                    var mod = that.moduleResolver(uri);
                    if (mod && mod.variables) {
                        TreeOps.concat(that.variables, mod.variables);
                    }
                    if (mod && mod.functions) {
                        TreeOps.concat(that.functions, mod.functions);
                    }
                }
            });
            return this;
        },
        moduleNamespace: '',
        baseUri: baseUri,
        description: '',
        defaultFunctionNamespace: 'http://www.w3.org/2005/xpath-functions',
        defaultFunctionNamespaces: [
            'http://www.w3.org/2001/XMLSchema' //Built-in type constructors
        ],
        defaultElementNamespace: '',
        processor: processor,
        namespaces: namespaces,
        availableModuleNamespaces: [],
        moduleAt: {},  // {key:namespace:..,value: ats[]}
        importModule: function (uri, prefix, pos, ats) {
            if (this !== this.root) {
                throw new Error('Function not invoked from the root static context.');
            }
            if (ats.length > 0) {
                //console.log("@",ats[0]);
            }
            this.addNamespace(uri, prefix, pos, 'module', ats);
            // if(ats && ats.length>0 ) console.log("$$$"+ats[0]);
            if (this.moduleResolver) {
                try {
                    var mod = this.moduleResolver(uri, ats);
                    if (mod.variables) {
                        TreeOps.concat(this.variables, keyed(mod.variables));
                    }
                    if (mod.functions) {
                        TreeOps.concat(this.functions, keyed(mod.functions));
                    }
                } catch (e) {
                    throw new StaticError('XQST0059', 'module "' + uri + '" not found', pos);
                }
            }
            return this;
        },

        getModuleAt: function () {
            return this.moduleAt;
        },

        getAvailableModuleNamespaces: function () {
            return this.root.availableModuleNamespaces;
        },

        getPrefixesByNamespace: function (uri) {
            return this.root.namespaces[uri].prefixes;
        },

        addNamespace: function (uri, prefix, pos, type, ats) {
            if (prefix === '' && type === 'module') {
                throw new StaticWarning('W01', 'Avoid this type of import. Use import module namespace instead', pos);
            }
            //Check for empty target namespace
            if (uri === '') {
                throw new StaticError('XQST0088', 'empty target namespace in module import or module declaration', pos);
            }

            //Check for duplicate target namespace
            var namespace = this.getNamespace(uri);
            if (namespace && namespace.type === type && type !== 'declare' && !namespace.override) {
                throw new StaticError('XQST0047', '"' + uri + '": duplicate target namespace', pos);
            }

            //Check for duplicate prefix
            namespace = this.getNamespaceByPrefix(prefix);
            if (namespace && !namespace.override) {
                throw new StaticError('XQST0033', '"' + prefix + '": namespace prefix already bound to "' + namespace.uri + '"', pos);
            }

            namespace = this.namespaces[uri];
            var prefixes = [prefix];
            if (namespace) {
                prefixes = prefixes.concat(this.namespaces[uri].prefixes);
            }
            this.namespaces[uri] = {
                prefixes: prefixes,
                pos: pos,
                type: type
            };
            if (ats && ats.length) { this.moduleAt[uri] = ats; }
            if (namespace && !namespace.override && !(namespace.uri = uri)) {
                throw new StaticWarning('W02', '"' + uri + '" already bound to the "' + namespace.prefixes.join(', ') + '" prefix', pos);
            }

        },

        getNamespaces: function () {
            return this.root.namespaces;
        },

        getNamespace: function (uri) {
            var that = this;
            while (that) {
                var namespace = that.namespaces[uri];
                if (namespace) {
                    return namespace;
                }
                that = that.parent;
            }

        },

        getNamespaceByPrefix: function (prefix) {
            var found = [];
            var that = this;
            var handler = function (uri) {
                var namespace = that.namespaces[uri];
                if (namespace.prefixes.indexOf(prefix) !== -1) {
                    namespace.uri = uri;
                    found.push(namespace);
                }
            };

            while (that) {
                Object.keys(that.namespaces).forEach(handler);
                that = that.parent;
            }
            var result;
            found.forEach(function (ns) {
                if (ns.type === 'moduleDecl') {
                    result = ns;
                }
            });
            if (result) {
                return result;
            } else {
                return found[found.length - 1]; //@apb was 0
            }
        },

        // find uri from prefix if required 
        // note does NOT resolve defaultfunctionnamespace
        resolveQName: function (value, pos) {
            var qname = {
                uri: '',
                prefix: '',
                name: ''
            };
            var idx;
            if (value.substring(0, 2) === 'Q{') {
                idx = value.indexOf('}');
                qname.uri = value.substring(2, idx);
                qname.name = value.substring(idx + 1);
            } else {
                idx = value.indexOf(':');
                qname.prefix = value.substring(0, idx);
                var namespace = this.getNamespaceByPrefix(qname.prefix);
                if (!namespace && qname.prefix !== '' && ['fn', 'jn'].indexOf(qname.prefix) === -1) {
                    throw new StaticError('XPST0081', '"' + qname.prefix + '": can not expand prefix of lexical QName to namespace URI', pos);
                }
                if (namespace) {
                    qname.uri = namespace.uri;
                } else if (value === 'updating') {
                    qname.uri = 'http://www.w3.org/2012/xquery'; // apb hack for annotations
                }
                qname.name = value.substring(idx + 1);
            }
            return qname;
        },

        variables: {},
        varRefs: {},
        functionRefs: {},

        addVariable: function (qname, type, pos) {
            if (
                type === 'VarDecl' && this.moduleNamespace !== '' &&
                !(this.moduleNamespace === qname.uri || qname.uri === '')
            ) {
                throw new StaticError('XQST0048', '"' + qname.prefix + ':' + qname.name + '": Qname not library namespace', pos);
            }
            var key = getVarKey(qname);
            if (type === 'VarDecl' && this.variables[key]) {
                throw new StaticError('XQST0049', '"' + qname.name + '": duplicate variable declaration', pos);
            }
            this.variables[key] = {
                type: type,
                pos: pos,
                qname: qname,
                annotations: {}
            };
            return this;
        },

        getVariables: function () {
            //walk up parent links
            var variables = {};
            var that = this;
            var handler = function (key) {
                if (!variables[key]) {
                    variables[key] = that.variables[key];
                }
            };
            while (that) {
                Object.keys(that.variables).forEach(handler);
                that = that.parent;
            }
            return variables;
        },

        getVariable: function (qname) {
            var key = getVarKey(qname);
            var that = this;
            while (that) {
                if (that.variables[key]) {
                    return that.variables[key];
                }
                that = that.parent;
            }
        },

        addVarRef: function (qname, pos) {
            // mark variable qname as referenced
            var varDecl = this.getVariable(qname);
            //If no moduleResolver is available, then only resolve 'local' variables
            if (!varDecl && (qname.uri === '' || this.isClosed())) {
                throw new StaticError('XPST0008', '"' + qname.name + '": undeclared variable', pos);
            }
            var key = getVarKey(qname);
            this.varRefs[key] = true;
        },

        addFunctionRef: function (qname, arity, pos) {
            // mark function qname as referenced
            var fn = this.getFunction(qname, arity);
            if (!fn && (qname.uri === 'http://www.w3.org/2005/xquery-local-functions' || this.isClosed)) {
                //Is it concat? (variadic)
                if ((qname.uri === 'http://www.w3.org/2005/xpath-functions' ||
                    (qname.uri === '' && this.root.defaultFunctionNamespaces.concat(this.root.defaultFunctionNamespace).indexOf('http://www.w3.org/2005/xpath-functions') !== -1)) && qname.name === 'concat') {
                    //do nothing
                } else if (!fn) {
                    throw new StaticError('XPST0008', '"' + qname.name + '#' + arity + '": undeclared function', pos);
                }
            }
            var key = getFnKey(qname, arity);
            this.functionRefs[key] = true;
        },

        functions: getSchemaBuiltinTypes()['http://www.w3.org/2001/XMLSchema'].functions,
        //functions: {},

        getFunctions: function () {
            return this.root.functions;
        },

        getFunction: function (qname, arity) {
            var key = getFnKey(qname, arity);
            var fn;
            if (qname.uri === '') {
                // if no uri look for match with each defaultFunctionNamespace 
                var that = this;
                this.root.defaultFunctionNamespaces.concat([this.root.defaultFunctionNamespace]).forEach(
                    function (defaultFunctionNamespace) {
                        if (!fn) {
                            fn = that.getFunction({ uri: defaultFunctionNamespace, prefix: qname.prefix, name: qname.name }, arity);
                        } else {
                            return false;
                        }
                    });
                return fn;
            } else {
                return this.root.functions[key];
            }
        },

        addFunction: function (qname, pos, params, ret) {
            if (this !== this.root) {
                throw new Error('addFunction() not invoked from the root static context.');
            }
            var arity = params.length;
            if (
                this.moduleNamespace !== '' &&
                !(this.moduleNamespace === qname.uri || (qname.uri === '' && this.defaultFunctionNamespace === this.moduleNamespace))
            ) {
                throw new StaticError('XQST0048', '"' + qname.prefix + ':' + qname.name + '": Qname not library namespace', pos);
            }
            if (qname.uri === '') {
                qname.uri = this.defaultFunctionNamespace;
            }
            var key = getFnKey(qname, arity);
            if (this.functions[key]) {
                throw new StaticError('XQST0034', '"' + qname.name + '": duplicate function declaration', pos);
            }
            this.functions[key] = {
                qname: qname,
                arity: arity,
                pos: pos,
                params: params
            };
            if (ret) {
                this.functions[key].return = ret;
            }
            //console.log("AA",this.functions[key])
            return this;
        }

    };
    s.root = parent ? parent.root : s;
    if (!parent) {
        const importable = Object.keys(namespaces).filter(ns => namespaces[ns].type === 'module');
        s.availableModuleNamespaces = importable;

        importable.forEach(function (ns) {
            const xq = namespaces[ns];
            s.functions = { ...s.functions, ...xq.functions };
            s.variables = { ...s.variables, ...xq.variables };
        });

    }
    return s;
};

