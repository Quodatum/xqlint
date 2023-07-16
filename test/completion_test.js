'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var StaticContext = require('../lib/compiler/static_context').StaticContext;
var XQLint = require('../lib/xqlint').XQLint;

vows.describe('Test Code Completion').addBatch({
    'test var (1)': function(){
        var source = 'let $bar := 1 return $bar, let $foo := 1 return $';
        var pos = { line: 0, character: source.length };
        var linter = new XQLint(source);
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, '$foo', '$foo variable');
    },
    
    'test var (2)': function(){
        var source = 'let $foo := 1 return $f';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, '$foo', '$foo variable');

    },

    'test var (3)': function(){
        var source = 'declare namespace ex = "http://www.example.com"; declare variable $ex:hello := 1; $';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, '$ex:hello', '$ex:hello variable');

    },

    'test var (4)': function(){
        var source = 'let $varname := 1\nlet $foo := $varname\nreturn $varname + $';
        var linter = new XQLint(source);
        var lines = source.split('\n');
        var pos = { line: lines.length - 1, character: lines[lines.length - 1].length  };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 2, 'Number of proposals');
    },
    
    'test expr (1)': function(){
        var source = 'declare function local:test($hello){ $hello }; lo';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, 'local:', 'Prefix');
    },
    
    'test expr (2)': function(){
        var source = 'declare function local:test($hello){ $hello }; local:';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, 'local:test($hello)', 'test function');
    },
    //  all known basex prefixes
    'test expr (3)': function(){
        var source = '';
        var linter = new XQLint(source, { processor: 'basex' });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length>20, true, 'Number of proposals');
    },
    
    'test namespaces (1)': function(){
        var p1 = 'import module namespace ns="';
        var p2 = '";';
        var sctx = new StaticContext(undefined,undefined,{ processor: '28msec'});
        sctx.availableModuleNamespaces.push('http://www.28msec.com/modules/http-reponse');
        sctx.availableModuleNamespaces.push('http://zorba.io/modules/reflection');
        var linter = new XQLint(p1+p2 , { staticContext: sctx });
        var pos = { line: 0, character: p1.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 6, 'Number of proposals, 4 are w3');
        assert.equal(proposals[0].name, 'http://www.28msec.com/modules/http-reponse', 'module list');
    },
    
    'test namespaces (2)': function(){
        var p1 = 'import module namespace ns="http://28msec.com/modules';
        var p2 = '";';
        var sctx = new StaticContext(undefined,undefined,{ processor: '28msec'});
        sctx.availableModuleNamespaces.push('http://www.28msec.com/modules/http-reponse');
        sctx.availableModuleNamespaces.push('http://zorba.io/modules/reflection');
        var linter = new XQLint(p1+p2 , { staticContext: sctx });
        var pos = { line: 0, character: p1.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 0, 'Number of proposals');
    },
    
    'test namespaces (3)': function(){
        var p1 = 'import module namespace ns="http://www.28msec.com/modules';
        var p2 = '";';
        var sctx = new StaticContext(undefined,undefined,{ processor: '28msec'});
        sctx.availableModuleNamespaces.push('http://www.28msec.com/modules/http-reponse');
        sctx.availableModuleNamespaces.push('http://zorba.io/modules/reflection');
        var linter = new XQLint(p1 + p2 , { staticContext: sctx });
        var pos = { line: 0, character: p1.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].name, 'http://www.28msec.com/modules/http-reponse', 'module list');
    },
    // imports starting with...
    'test namespaces (4)': function(){
        var p1 = 'import module namespace ns="http://basex.org/modules';
        var p2 = '";';
        var sctx = new StaticContext(undefined,undefined,{ processor: 'basex'});
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(p1 + p2 , { staticContext: sctx });
        var pos = { line: 0, character: p1.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length > 0, true, 'Number of proposals >0');
    },
    // fetch module exists and has 9 functions??? 
    'test prefixes (1)': function(){
        var source = 'import module namespace ns="http://basex.org/modules/fetch";ns:';
        var sctx = new StaticContext(undefined, undefined, 'basex');
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        //sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 9, 'Number of proposals' + proposals.length);
    },
    // tests below not useful
    'test functions (1)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client"; ns:';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(uri){//uri, hints
            var mod = index[uri];
            var variables = {};
            var functions = {};
            mod.functions.forEach(function(fn){
                functions[uri + '#' + fn.name + '#' + fn.arity] = {
                    params: []
                };
                fn.parameters.forEach(function(param){
                    functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                });
            });
            return {
                variables: variables,
                functions: functions
            };
        });
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
       // console.log("test1",proposals);
        assert.equal(proposals.length, 3, 'Number of proposals: '+proposals.length);
    },
   
    'test functions (3)': function(){
        var source = 'ns:';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 0, 'Number of proposals');
    },
    
    'test functions (4)': function(){
        var source = 'declare function local:foo(){ 1 }; declare function local:bar($foo as xs:string){ 2 }; local:';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 2, 'Number of proposals');
        assert.equal(proposals[0].value, 'local:bar($foo as xs:string)', 'Number of proposals');
        assert.equal(proposals[0].snippet, 'local:bar(${1:\\$foo})', 'Number of proposals');
    },
    
    'test functions (4 bis)': function(){
        var source = 'declare function local:foo(){ 1 }; declare function local:bar(){ 2 }; local';
        var linter = new XQLint(source);
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 1, 'Number of proposals');
        assert.equal(proposals[0].value, 'local:', 'Number of proposals');
    },
    
    'test functions (5)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client"; ns:status';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        sctx.setModulesFromXQDoc(index);
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 0, 'Number of proposals');
    },
    
    
    'test functions (6)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client"; ns:status';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        var modules = {};
        Object.keys(index).forEach(function(uri) {
            var mod = index[uri];
            var variables = {};
            var functions = {};
            mod.functions.forEach(function(fn){
                functions[uri + '#' + fn.name + '#' + fn.arity] = {
                    params: [],
                    annotations: [],
                    name: fn.name,
                    arity: fn.arity,
                    eqname: { uri: uri, name: fn.name }
                };
                fn.parameters.forEach(function(param){
                    functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                });
            });
            mod.variables.forEach(function(variable){
                var name = variable.name.substring(variable.name.indexOf(':') + 1);
                variables[uri + '#' + name] = { type: 'VarDecl', annotations: [], eqname: { uri: uri, name: name } };
            });
            modules[uri] = {
                variables: variables,
                functions: functions
            };
        });
        sctx.setModules(modules);
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length, 0, 'Number of proposals');
    },
    
    'test functions (8)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client";\nn';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        var modules = {};
        Object.keys(index).forEach(function(uri) {
            var mod = index[uri];
            var variables = {};
            var functions = {};
            mod.functions.forEach(function(fn){
                functions[uri + '#' + fn.name + '#' + fn.arity] = {
                    params: [],
                    annotations: [],
                    name: fn.name,
                    arity: fn.arity,
                    eqname: { uri: uri, name: fn.name }
                };
                fn.parameters.forEach(function(param){
                    functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                });
            });
            mod.variables.forEach(function(variable){
                var name = variable.name.substring(variable.name.indexOf(':') + 1);
                variables[uri + '#' + name] = { type: 'VarDecl', annotations: [], eqname: { uri: uri, name: name } };
            });
            modules[uri] = {
                variables: variables,
                functions: functions
            };
        });
        sctx.setModules(modules);
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length > 10, true, 'Number of proposals');
    },
    
    'test functions (9)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client";\nns:s';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        var modules = {};
        Object.keys(index).forEach(function(uri) {
            var mod = index[uri];
            var variables = {};
            var functions = {};
            mod.functions.forEach(function(fn){
                functions[uri + '#' + fn.name + '#' + fn.arity] = {
                    params: [],
                    annotations: [],
                    name: fn.name,
                    arity: fn.arity,
                    eqname: { uri: uri, name: fn.name }
                };
                fn.parameters.forEach(function(param){
                    functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                });
            });
            mod.variables.forEach(function(variable){
                var name = variable.name.substring(variable.name.indexOf(':') + 1);
                variables[uri + '#' + name] = { type: 'VarDecl', annotations: [], eqname: { uri: uri, name: name } };
            });
            modules[uri] = {
                variables: variables,
                functions: functions
            };
        });
        sctx.setModules(modules);
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length > 10, true, 'Number of proposals');
    },
    
    'test variables (1)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client"; $';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(uri){//uri, hints
            var mod = index[uri];
            var variables = {};
            var functions = {};
            mod.functions.forEach(function(fn){
                functions[uri + '#' + fn.name + '#' + fn.arity] = {
                    params: []
                };
                fn.parameters.forEach(function(param){
                    functions[uri + '#' + fn.name + '#' + fn.arity].params.push('$' + param.name);
                });
            });
            mod.variables.forEach(function(variable){
                var name = variable.name.substring(variable.name.indexOf(':') + 1);
                variables[uri + '#' + name] = { type: 'VarDecl', annotations: [] };
            });
            return {
                variables: variables,
                functions: functions
            };
        });
        sctx.availableModuleNamespaces = Object.keys(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        //console.log("vars1: ",proposals);
        assert.equal(proposals.length,0, 'Number of proposals');
    },
     
    'test variables (2)': function(){
        var source = 'import module namespace ns="http://expath.org/ns/http-client"; $ns:n';
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var sctx = new StaticContext();
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint(source, { staticContext: sctx });
        var pos = { line: 0, character: source.length };
        var proposals = linter.getCompletions(pos);
        //console.log("vars2: ",proposals);
        assert.equal(proposals.length , 0, 'Number of proposals');
    },
    
    'test default functions': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint('re', { fileName: 'merry.xq',  staticContext: sctx });
        var pos = { line: 0, character: 2 };
        var proposals = linter.getCompletions(pos);
        assert.equal(proposals.length > 1, true, 'Number of proposals');
    }
}).export(module);
