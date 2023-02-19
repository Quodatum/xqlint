
const util = require("./util")
var parseComment = require('./parse_comment').parseComment;

exports.XQDoc = function(ast){
    'use strict';

    var doc = {};

    this.getDoc = function(){
        return doc;
    };

    this.WS = function(node){
        if(node.value.trim().substring(0, 3) === '(:~') {
            node.getParent.comment = parseComment(node.value);

        }
    };

    this.AnnotatedDecl = function(node){
        this.visitChildren(node);
        node.comment = node.getParent.comment;
        node.getParent.comment = undefined;
       // console.log("AnnotatedDecl: ",node.comment)
    };
    
    this.XQuery = function(node){
        this.visitChildren(node);
    };

    this.getXQDoc = function(sctx){
        var doc = {
            moduleNamespace: sctx.moduleNamespace,
            description: sctx.description,
            variables: [],
            functions: []
        };
        
        Object.keys(sctx.variables).forEach( (key)=>{
            var variable=sctx.variables[key];
            var varDecl = util.deepClone(variable.qname);
            varDecl.annotations = variable.annotations;
            varDecl.description = variable.description;
            varDecl.type = variable.type;
            varDecl.occurrence = variable.occurrence;
            varDecl.pos = variable.pos;
            doc.variables.push(varDecl);
        });

        Object.keys(sctx.functions).forEach(( key)=>{
            // cf https://github.com/wcandillon/xqlint/blob/master/lib/xqdoc/xqdoc.js#L47
            if(key.substring(0, key.indexOf("#"))!==sctx.moduleNamespace){
                return;  
            }
            var fn=sctx.functions[key];
            //console.log("FN:",fn) 
            var tokens = key.split('#');
            doc.functions.push({
                name: tokens[1],
                uri: tokens[0],
                params: fn.params,
                //description:
                pos: fn.pos,
                posAll: fn.pos //@todo
            });
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

    this.visit(ast);
};
