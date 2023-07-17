'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

vows.describe('Test Module URI Resolver').addBatch({

    'test 1': function(){
        var sctx = new StaticContext();
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; $foo:bar',{ staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },
    'test 1a': function(){
        var sctx = new StaticContext();
        var linter = new XQLint('import module namespace admin = "http://basex.org/modules/admin"; admin:sessions()',{ staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },
    'test 2': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {},
                variables: {
                    'http://www.example.com#bar': { type: 'VarDecl', pos: { sl:0, el:0, sc:0, ec:0 }, annotations: {}, qname: { name: 'bar', uri: 'http://www.example.com' } }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; $foo:bar', { staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test 3': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {},
                variables: {
                    'http://www.example.com#bar': { type: 'VarDecl', pos: { sl:0, el:0, sc:0, ec:0 }, annotations: {}, qname: { name: 'bar', uri: 'http://www.example.com' } }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; foo:bar()', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 1, 'Number of markers');
        assert.equal(markers[0].message.indexOf('undeclared function') !== -1, true, 'Number of markers');
    },

    'test 4': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {
                    'http://www.example.com#bar#0': {
                        pos: { sl:0, el:0, sc:0, ec:0 },
                        params: [],
                        qname: { name: 'bar', uri: 'http://www.example.com' }
                    }
                },
                variables: {
                    'http://www.example.com#bar': { type: 'VarDecl', pos: { sl:0, el:0, sc:0, ec:0 }, annotations: {}, qname: { name: 'bar', uri: 'http://www.example.com' } }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; foo:bar()', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },
    
    'test 4 (bis)': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {
                    'http://www.example.com#bar#0': {
                        pos: { sl:0, el:0, sc:0, ec:0 },
                        params: [],
                        qname: { name: 'bar', uri: 'http://www.example.com' }
                    }
                },
                variables: {
                    'http://www.example.com#bar': { type: 'VarDecl', pos: { sl:0, el:0, sc:0, ec:0 }, annotations: {}, qname: { name: 'bar', uri: 'http://www.example.com' } }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; declare default function namespace "http://www.example.com"; bar()', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test 5': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {
                    'http://www.example.com#bar#1': {
                        pos: { sl:0, el:0, sc:0, ec:0 },
                        params: ['$foo as xs:string'],
                        qname: { name: 'bar', uri: 'http://www.example.com' }
                    }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; foo:bar()', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 1, 'Number of markers');
    },
    
    'test 6': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {
                    'http://www.example.com#bar#1': {
                        pos: { sl:0, el:0, sc:0, ec:0 },
                        params: ['$foo as xs:string']
                    }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; foo:bar(1)', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },
    
    'test 7': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            return {
                functions: {
                    'http://www.example.com#bar#2': {
                        pos: { sl:0, el:0, sc:0, ec:0 },
                        params: ['$foo as xs:string', '$bar as xs:string']
                    }
                }
            };
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; foo:bar(1, 2)', { staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },
    
    
    'test 8': function(){
        var linter = new XQLint('test', 'import module namespace foo = "http://www.example.com"; $foo:bar');
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },

  

    'test 11': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint(fs.readFileSync('test/xqlint_queries/trycatch.xq', 'utf-8'), { fileName: 'trycatch.xq',  staticContext: sctx });
        var warnings = linter.getWarnings();
        // was 1 warning why??
        assert.equal(warnings.length, 0, 'Number of warnings');
        var errors = linter.getErrors();
        assert.equal(errors.length, 0, 'Number of errors');
    },

    'test 12': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint(fs.readFileSync('test/queries/merry.xq', 'utf-8'), { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getMarkers();
        //console.log("TEST12",markers);
        // currently "chars#1": undeclared function'
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test 13': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint('concat("Hello", "World", "Foo", "Bar")', { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test 14': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint('revarse()', { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
    },

    'test 15': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint('reverse()', { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
    },

    'test 16': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint('reverse((1, 2, 3))', { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 0, 'Number of markers');
    },


    'test 18': function(){
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/index.json', 'utf-8'));
        var source = 'xs:anyURI("http://www.google.com")';
        sctx.setModulesFromXQDoc(index);
        var linter = new XQLint(source, { fileName: 'merry.xq',  staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test 19': function(){
        var source = 'import module namespace sec-networks = "http://xbrl.io/modules/bizql/profiles/sec/networks"; $sec-networks:BALANCE_SHEET';
        var sctx = new StaticContext();
        var index = JSON.parse(fs.readFileSync('test/exports.json', 'utf-8'));
        sctx.setModules(index);
        var linter = new XQLint(source, { fileName: 'test/queries/merry.xq',  staticContext: sctx });
        var markers = linter.getErrors();
        assert.equal(markers.length, 0, 'Number of markers');
    },

    'test XQST0059': function(){
        var sctx = new StaticContext();
        sctx.setModuleResolver(function(){//uri, hints
            throw new Error('Module not found');
        });
        var linter = new XQLint('import module namespace foo = "http://www.example.com"; $foo:bar', { staticContext: sctx });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 2, 'Number of markers');
    }
}).export(module);
