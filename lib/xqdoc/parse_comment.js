'use strict';
// @see http://xqdoc.org/xqdoc_comments_doc.html
// @author,@version,@since,@see,@param,@return,@deprecated,@error

exports.parseComment = function (commentNode) {
    const comment = commentNode.value.trim();
    var ann={pos:commentNode.pos};
    var isXQDoc = comment.substring(0, 3) === '(:~';
    if (isXQDoc) {
        var lines = comment.slice(3).slice(0, -2).split('\n');
        ann={...ann,...{
            description: '',
            params: {},
            errors: [],
            others: []
        }}
      
        var tag = "description"; //starting (non) tag

        lines.forEach(function (line, index) {
            line = line.trim();
            if (line[0] === ':') {line = line.substring(1).trim();}
            if (line.length > 0) {
                var reTag = new RegExp("^\\s*@(?<tag>\\w+)\\s+(?<rest>.+)$", "g");
                var hits = reTag.exec(line);
                var hasTag = hits !== null;
                if (hasTag) {tag = hits.groups.tag;}

                switch (tag) {
                    case "description":
                        ann.description +=  line+' ' ;
                        break;
                    case "param":
                        if (hasTag) {
                            var reParam = new RegExp("^\\s*(?<param>[$]\\w+)\\s+(?<rest>.+)$", "g");
                            var phit = reParam.exec(hits.groups.rest);
                            if (phit !== null) {
                                ann.params[phit.groups.param] = phit.groups.rest;}
                        } else {
                            //APB console.log("TODO", tag, line);
                        }
                        break;
                    case "return":
                        if (hasTag) {
                            ann.return = hits.groups.rest;
                        } else {
                            ann.return += ' ' + line;
                        }
                        break;
                    case "error":
                        if (hasTag) {
                            ann.errors.push(hits.groups.rest);
                        } else {
                            //APB console.log('TODO', tag, line);
                        }
                        break;
                    default:
                        if (hasTag) {
                            ann.others.push({ 'tag': tag, 'value': hits.groups.rest });
                            //APB console.log('TODO', tag, line);
                        }
                }
            }
        });
        //        console.log(ann);
        return ann;
    }
};