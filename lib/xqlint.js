'use strict';


const XQueryParser = require('./parsers/XQueryParser').XQueryParser;
const JSONParseTreeHandler = require('./parsers/JSONParseTreeHandler').JSONParseTreeHandler;
const Translator = require('./compiler/translator').Translator;
const StyleChecker = require('./formatter/style_checker').StyleChecker;
const XQDoc = require('./xqdoc/xqdoc').XQDoc;
const completer = require('../lib/completion/completer');
const TreeOps = require('./tree_ops').TreeOps;
const fs = require('node:fs');
const path = require('node:path');
const ver = require('../package.json').version;
const xqc = require('@quodatum/xq-catalogs');



var convertPosition = function (code, begin, end) {
    var before = code.substring(0, begin);
    var after = code.substring(0, end);
    var startline = before.split('\n').length;
    var startcolumn = begin - before.lastIndexOf('\n');
    var endline = after.split('\n').length;
    var endcolumn = end - after.lastIndexOf('\n');
    var pos = {
        sl: startline - 1,
        sc: startcolumn - 1,
        el: endline - 1,
        ec: endcolumn - 1
    };
    return pos;
};

function XQLint(source, opts) {
    const defaults = { styleCheck: false }; // no default processor!
    //ACE editor worker hack
    opts = { ...defaults, ...opts };

    var ast;
    var sctx = opts.staticContext ? opts.staticContext : createStaticContext(opts.processor, opts.fileName);

    this.getAST = function (pos) {
        return pos ? TreeOps.findNode(ast, pos) : ast;
    };

    this.printAST = function (indent) {
        return TreeOps.astAsXML(ast, indent);
    };


    this.getXQDoc = function (withPos) {
        const xqdoc = new XQDoc(ast, sctx);
        return xqdoc.getXQDoc(withPos);
    };

    this.getNamespaces = function () {
        return sctx.getNamespaces();
    };
    this.getDocLinks = function () {
        const ns = this.getNamespaces();
        var doclinks = [];
        for (const [key, value] of Object.entries(ns)) {
            if (value.ats) {
                const a1 = value.ats[0];
                if (a1.baseUri) {
                    const location = path.resolve(a1.baseUri, "../", a1.url);
                    var dlink = { path: location, pos: a1.pos };
                    doclinks.push(dlink);
                }
            }
        }
        return doclinks;
    };
    // processor 
    this.getProcessor = function () {
        return sctx.processor;
    };

    this.getLibrary = function () {
        return xqc.library(sctx.processor);
    };

    var markers = [];
    this.getMarkers = function () {
        return markers;
    };

    this.getMarkers = function (type) {
        var m = [];
        markers.forEach(function (marker) {
            if (marker.level === type || type === undefined) {
                m.push(marker);
            }
        });
        return m;
    };

    this.getErrors = function () {
        return this.getMarkers('error');
    };

    this.getWarnings = function () {
        return this.getMarkers('warning');
    };

    this.getCompletions = function (pos) {
        return completer.complete(source, ast, sctx, pos);
    };

    this.getSctx = function (pos) {
        var con = pos ? TreeOps.findNode(sctx, pos) : sctx;
        return con ? con : sctx;
    };

    var syntaxError = false;
    this.hasSyntaxError = function () {
        return syntaxError;
    };

    var file = opts.fileName ? opts.fileName : '';
    var h = new JSONParseTreeHandler(source);
    var parser = new XQueryParser(source, h);
    try {
        parser.parse_XQuery();
    } catch (e) {
        if (e instanceof parser.ParseException) {
            syntaxError = true;
            h.closeParseTree();
            var pos = convertPosition(source, e.getBegin(), e.getEnd());
            var message = parser.getErrorMessage(e);
            if (pos.sc === pos.ec) {
                pos.ec++;
            }
            // reported error
            markers.push({
                pos: pos,
                code: 'XPST0003',
                level: 'error',
                message:'[XPST0003] ' + message
            });
            // unparsed extent
            pos=convertPosition(source, e.getEnd()+1, source.length-1);
            markers.push({
                pos: pos,
                code: 'XQLT0001',
                level: 'error',
                message: "[XQLT0001] " + "Unparsed due to previous syntax error. "
            });
        } else {
            throw e;
        }
    }
    ast = h.getParseTree();

    if (opts.styleCheck) {
        markers = markers.concat(new StyleChecker(ast, source).getMarkers());
    }

    var translator = new Translator(sctx, ast);
    markers = markers.concat(translator.getMarkers());
}

// simple resolver for module import at
const loadedMods = {}; //map target->xqdoc 

function resolver1(uri, ats) {//uri, hints
    if (ats.length === 0) { return {}; }
    const target = path.resolve(this.baseUri, "../", ats[0].url);
    //console.log("Resolver: :",uri, "->",target);
    if (!loadedMods[target]) {
        const linter = new XQLint(fs.readFileSync(target, 'utf-8'));
        loadedMods[target] = linter.getXQDoc(true);
    }
    return loadedMods[target];
}


function createStaticContext(processor, baseUri) {
    var StaticContext = require('./compiler/static_context').StaticContext;
    var sctx = new StaticContext(undefined, undefined, processor, baseUri);
    if (processor && baseUri) {
        sctx.setModuleResolver(resolver1);
    }
    return sctx;
}
function profiles() {
    return xqc.profiles();
}
function library(profile) {
    return xqc.library(profile);
}
exports.XQLint = XQLint;
exports.XQueryLexer = require('./lexers/xquery_lexer').XQueryLexer;
exports.CodeFormatter = require('./formatter/formatter').CodeFormatter;
exports.createStaticContext = createStaticContext;
exports.resolver1 = resolver1;
exports.version = ver;
exports.profiles = profiles;
exports.library = library;

