/*
 new XQDoc(ast,sctx) creates comments object with parses of xqdoc style comments
 xqdoc.getXQDoc returns object 
*/
const util = require("./util")
var parseComment = require('./parse_comment').parseComment;
var TreeOps = require('../tree_ops').TreeOps;

exports.XQDoc = function (ast,sctx) {
    'use strict';
    var comments={};
    this.WS = function (node) {
        if (node.value.trim().substring(0, 3) === '(:~') {
            var comments=parseComment(node.value)
            comments.pos=node.pos;
            node.getParent.comments = comments;
            //assume 1st is module
            if(!comments['module']){
                 comments["module"]=comments;
            };
        }
    };

    this.AnnotatedDecl = function (node) {
        this.visitChildren(node);
        node.comments = node.getParent.comments;
        node.getParent.comments = undefined;
        //console.log("AnnotatedDecl: ",node.comment)
    };

    this.VarDecl = function (node) { 
        var varname = this.getFirstChild(node, 'VarName');
        var value = TreeOps.flatten(varname);
        var qname = sctx.resolveQName(value, varname.pos);
        const key=qname.uri+"#" + qname.name;
      //  var variable = rootStcx.getVariable(qname);   
        if(!!node.getParent.comments) comments[key]=node.getParent.comments
      //  console.log("VarDecl: ",value,", pos: ",node.pos,", comments: ",node.getParent.comments)
    };

    this.FunctionDecl = function (node) { 
        var fnname = this.getFirstChild(node, 'EQName');
        var value = TreeOps.flatten(fnname);
        var qname = sctx.resolveQName(value, fnname.pos);
        var arity="0"
        var params = this.getFirstChild(node, 'ParamList');
        if(params){
            for (var i = 0; i < params.children.length; i++) {
                if(params.children[i].name==="Param")arity++
            }
        };
        const key=qname.uri+"#" + qname.name +"#" +arity;
        if(!!node.getParent.comments) comments[key]=node.getParent.comments
        //console.log("FunctionDecl: ",value,", pos: ",node.pos,", comments: ",node.getParent.comments)
    };
    
    this.XQuery = function (node) {
        this.visitChildren(node);
    };
    this.ModuleDecl=  function(node){
        console.log("MODDECL")
    };
    this.getXQDoc = function (withPos) {
        var doc = {
            moduleNamespace: sctx.moduleNamespace,
            prefixes: ["TODO"],
            variables: [],
            functions: []
        };
        if(comments["module"])doc.description=comments["module"].description;
        Object.keys(sctx.variables).forEach((key) => {
            var variable = sctx.variables[key];
            var varDecl = util.deepClone(variable.qname);
            varDecl.annotations = variable.annotations;
            varDecl.type = variable.type;
            varDecl.occurrence = variable.occurrence;
            if (withPos) varDecl.pos = variable.pos;
            if(!!comments[key]) varDecl.comments=comments[key]
            doc.variables.push(varDecl);
        });

        Object.keys(sctx.functions).forEach((key) => {
            // cf https://github.com/wcandillon/xqlint/blob/master/lib/xqdoc/xqdoc.js#L47
            if (key.substring(0, key.indexOf("#")) !== sctx.moduleNamespace) {
                return;
            }
            var fn = sctx.functions[key];
            //console.log("fn-key:",key) 
            var tokens = key.split('#');
            var fnDecl = {
                name: tokens[1]
                , uri: tokens[0]
                , params: fn.params
                , return: fn.return
            };
            if(!!comments[key]) {
                fnDecl.comments=util.deepClone(comments[key])
            };
            if (withPos) {
                fnDecl.pos = fn.pos;
                fnDecl.posAll = fn.pos;
            };
            doc.functions.push(fnDecl);
        });

        return doc;
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
    this.getFirstChild = function(node, name) {
        var result;
        node.children.forEach(function(child){
            if(child.name === name && result === undefined){
                result = child;
            }
        });
        return result;
    };
    this.visit(ast);
};
