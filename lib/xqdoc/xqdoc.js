/*
 new XQDoc(ast,sctx) creates comments object with parses of xqdoc style comments
 xqdoc.getXQDoc returns object 
*/

const parseComment = require('./parse_comment').parseComment;
const TreeOps = require('../tree_ops').TreeOps;

exports.XQDoc = function (ast, sctx) {
    'use strict';
    var lastComment = null;
    var lastDeclPos = null; //lintRange enclosing current declaration
    const comments = {}; // keyed as fn/vars
    const symbols = []; // {name,key,range (all), selectionRange (just name)} 
    var prefix = null;
    var querybody = null; // capture pos if present
    this.WS = function (node) {
        const txt = node.value.trim();
        if (txt.startsWith('(:')) {
            lastComment = parseComment(node);
        }
    };



    this.VarDecl = function (node) {
        var varname = this.getFirstChild(node, 'VarName');
        var value = TreeOps.flatten(varname);
        var qname = sctx.resolveQName(value, varname.pos);
        const key = qname.uri + "#" + qname.name;

        if (lastComment) {
            comments[key] = lastComment;
        }
        var pos = node.getParent.pos;
        if(lastComment){
            pos=TreeOps.plusRange(pos,lastComment.pos)
        };
        const sym={
            key: key, type: "VarDecl",
            range: pos, selectionRange: varname.pos,
            bcom: !!lastComment,
            xcom: !!(lastComment &&lastComment.description)
        };
        symbols.push(sym);
        lastComment = null;
    };

    this.FunctionDecl = function (node) {
        var fnname = this.getFirstChild(node, 'EQName');
        var value = TreeOps.flatten(fnname);
        var qname = sctx.resolveQName(value, fnname.pos);
        if (qname.uri === "") {
            qname.uri = sctx.defaultFunctionNamespace;
        }
        var arity = "0";
        var params = this.getFirstChild(node, 'ParamList');
        if (params) {
            for (var i = 0; i < params.children.length; i++) {
                if (params.children[i].name === "Param") { arity++; }
            }
        }
        var ret = this.getFirstChild(node, 'SequenceType');

        const key = qname.uri + "#" + qname.name + "#" + arity;

        var pos = node.getParent.pos;
        if(lastComment){
            pos=TreeOps.plusRange(pos,lastComment.pos);
            comments[key] = lastComment;
        };
        const sym = {
            key: key, type: "FunctionDecl",
            range: pos, selectionRange: fnname.pos, 
            bcom: !!lastComment,
            xcom: !!(lastComment &&lastComment.description)
        };
        symbols.push(sym);
        lastComment = null;
    };


    this.ModuleDecl = function (node) {
        //console.log("MODDECL")
        prefix = TreeOps.flatten(this.getFirstChild(node, "NCName"));
        if (lastComment) {
            comments.module = lastComment;
            lastComment = null;
        }
    };
    // main module,xq not xqm
    this.QueryBody = function (node) {
        //console.log("QueryBody");
        querybody = node.pos;
        const pos = node.pos;
        symbols.push({
            key: "QueryBody", type: "QueryBody",
            range: pos, selectionRange: pos
        });
    };

    this.getSymbols = function () {
        return symbols;
    };

    this.getXQDoc = function (withPos) {
        var doc = {
            ns: sctx.moduleNamespace,
            description: "todo",
            prefixes: [prefix],
            namespaces: [],
            variables: [],
            functions: []
        };
        if (comments.module) { doc.description = comments.module.description; }

        symbols.filter(v => v.type === 'VarDecl').forEach((v) => {
            const key = v.key;
            var variable = sctx.variables[key];
            var varDecl = { ...variable.qname }; //name,prefix,uri
            varDecl.key = key;
            varDecl.annotations = variable.annotations;
            varDecl.type = variable.type;
            varDecl.occurrence = variable.occurrence;

            if (comments[key]?.description) { varDecl.description = comments[key]?.description; }
            if (withPos) { this.setPos(varDecl, key, variable.pos); }

            doc.variables.push(varDecl);
        });

        symbols.filter(v => v.type === 'FunctionDecl').forEach((v) => {
            const key = v.key;
            var fn = sctx.functions[key];
            //console.log("fn-key:",key) 
            var tokens = key.split('#');
            var fnDecl = {
                name: tokens[1],
                uri: tokens[0],
                key: key,
                params: fn.params,
                type: fn.return
            };
            if (comments[key]?.description) { fnDecl.description = comments[key]?.description; }

            //fnDecl.comments={...comments[key]};
            // if(!withPos) delete fnDecl.comments.pos;

            if (withPos) { this.setPos(fnDecl, key, fn.pos); }
            doc.functions.push(fnDecl);
        });
        if (querybody) {
            doc.queryBody = querybody;
        }
        return doc;
    };

    this.setPos = function (decl, key, pos) {
        decl.pos = pos;
        var full = pos; //@todo
        decl.posAll = full;
    };

    this.visit = function (node) {
        var name = node.name;
        var skip = false;

        if (typeof this[name] === 'function') {
            skip = this[name](node) === true;
        }

        if (!skip) {
            this.visitChildren(node);
        }
    };

    this.visitChildren = function (node, handler) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            if (handler !== undefined && typeof handler[child.name] === 'function') {
                handler[child.name](child);
            } else {
                this.visit(child);
            }
        }
    };
    this.getFirstChild = function (node, name) {
        var result;
        node.children.forEach(function (child) {
            if (child.name === name && result === undefined) {
                result = child;
            }
        });
        return result;
    };
    this.visit(ast);
};
