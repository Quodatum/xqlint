'use strict';


const XQueryParser = require('./parsers/XQueryParser').XQueryParser;
const JSONParseTreeHandler = require('./parsers/JSONParseTreeHandler').JSONParseTreeHandler;
const Translator = require('./compiler/translator').Translator;
const StyleChecker = require('./formatter/style_checker').StyleChecker;
const XQDoc = require('./xqdoc/xqdoc').XQDoc;
const completer = require('../lib/completion/completer');
const TreeOps = require('./tree_ops').TreeOps;
const ver = require('../package.json').version;



var createStaticContext = exports.createStaticContext = function (processor) {
    var StaticContext = require('./compiler/static_context').StaticContext;
    var sctx= new StaticContext(undefined, undefined, processor);
    return sctx;
};

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

exports.XQueryLexer = require('./lexers/xquery_lexer').XQueryLexer;
exports.CodeFormatter = require('./formatter/formatter').CodeFormatter;

exports.XQLint = function (source, opts) {
    const defaults = { styleCheck: false }; // no default processor!
    //ACE editor worker hack
    opts = { ...defaults, ...opts }

    var ast;
    var sctx = opts.staticContext ? opts.staticContext : createStaticContext(opts.processor);

    this.getAST = function (pos) {
        return pos ?TreeOps.findNode(ast, pos) : ast;
    };

    this.printAST = function () {
        return TreeOps.astAsXML(ast, '  ');
    };
    
    
    this.getXQDoc = function (withPos) {
        const xqdoc=new XQDoc(ast,sctx);
        return xqdoc.getXQDoc(withPos);
    };

    this.getDocLinks = function () {
        const dl=sctx.getDocLinks();
        return dl;
    };

    var markers = [];
    this.getMarkers = function () {
        return markers;
    };

    this.getMarkers = function (type) {
        var m = [];
        markers.forEach(function (marker) {
            if (marker.type === type || type === undefined) {
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
        var con = pos ? TreeOps.findNode(sctx, pos) : sctx ;
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
            markers.push({
                pos: pos,
                type: 'error',
                level: 'error',
                message: message
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
};

exports.version = ver;
