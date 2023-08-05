'use strict';

// join name parts ns+":"+name
exports.TreeOps = {
    flatten: function(node){
        var that = this;
        var value = '';
        if(!node) {
            throw new Error('Invalid node found');
        } else if (node.value === undefined) {
            node.children.forEach(function(child){
                //console.log("children of: ", node.name)
                value += that.flatten(child);
            });
        } else {
            value += node.value;
        }
        return value;
    },
    
    concat: function(obj1, obj2, copy){
        var result = copy ? {} : obj1;
        if(copy){
            Object.keys(obj1).forEach(function(key){
                result[key] = obj1[key];
            });
        }
        var keys = Object.keys(obj2);
        keys.forEach(function(key){
            result[key] = obj2[key];
        });
        return result;
    },
    
    removeParentPtr: function(ast){
        if(ast.getParent !== undefined) {
            delete ast.getParent;
        }
        for(var i in ast.children) {
            var child = ast.children[i];
            this.removeParentPtr(child);
        }
    },
    // p:text range {sl,sc,el,ec}, pos {line,col}
    inRange: function(p, pos, exclusive){
        if(p && p.sl <= pos.line && pos.line <= p.el) {
            if(p.sl < pos.line && pos.line < p.el) {
                return true;
            } else if(p.sl === pos.line && pos.line < p.el) {
                return p.sc <= pos.character;
            } else if(p.sl === pos.line && p.el === pos.line) {
                return p.sc <= pos.character && pos.character <= p.ec + (exclusive ? 1 : 0);
            } else if(p.sl < pos.line && p.el === pos.line) {
                return pos.character <= p.ec + (exclusive ? 1 : 0);
            }
        }
    },
    // lintRange enclosing lintRanges a and b
    // https://github.com/microsoft/vscode/blob/5150ef0ce77ef5516e55af4b8272f25907b55953/src/vs/editor/common/core/range.ts#L184
    plusRange: function(a,b){
        let startLineNumber;
		let startColumn;
		let endLineNumber;
		let endColumn;

		if (b.sl < a.sl) {
			startLineNumber = b.sl;
			startColumn = b.sc;
		} else if (b.sl === a.sl) {
			startLineNumber = b.sl;
			startColumn = Math.min(b.sc, a.sc);
		} else {
			startLineNumber = a.sl;
			startColumn = a.sc;
		}

		if (b.el > a.el) {
			endLineNumber = b.el;
			endColumn = b.ec;
		} else if (b.el === a.el ){
			endLineNumber = b.el;
			endColumn = Math.max(b.ec, a.ec);
		} else {
			endLineNumber = a.el;
			endColumn = a.ec;
		}

		return  {
            sl: startLineNumber,
            sc: startColumn, 
            el: endLineNumber,
            ec: endColumn
        };
    },
    
    findNode: function(ast, pos) {
        if(!ast) {
            return;
        }
        var p = ast.pos;
        //console.log("inrange: ",this.inRange(p, pos),p,pos)
        if(this.inRange(p, pos) === true) {
            for(var i in ast.children) {
                var child = ast.children[i];
                var n = this.findNode(child, pos);
                if(n !== undefined) {
                    return n;
                }
            }
            return ast;
        } else {
            return;
        }
    },
    
    astAsXML: function (node, indent) {
        var result = '';
        indent = indent ? indent : '';
        //console.log(indent, node.name, node.children.length, Boolean(node.value))
        if (node.value) {
            result += (indent + '<' + node.name + '>' + node.value + '</' + node.name + '>\n');
            console.assert(node.children.length === 0, 'astAsXML: No children expected');
        } else {
            result += indent + '<' + node.name + '>\n';
            var that = this;
            node.children.forEach(function (child) {
                result += that.astAsXML(child, indent + ' ');
            });
            result += indent + '</' + node.name + '>\n';
        }
        return result;
    }
};