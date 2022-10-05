'use strict';
// @see http://xqdoc.org/xqdoc_comments_doc.html
// @author,@version,@since,@see,@param,@return,@deprecated,@error

exports.parseComment = function(comment){
    comment = comment.trim();
    var isXQDoc = comment.substring(0, 3) === '(:~';
    if(isXQDoc){
        var lines = comment.split('\n');

        var ann = {
            description: '',
            params: {},
            errors: [],
            others: []
        };
        var bSeenTag=false;

        lines.forEach(function(line, index){
            if(index === 0) {
                line = line.substring(3);
            }
            line = line.trim();
            
            if(line[0] === ':') {
                line = line.substring(1);
            }
            line = line.trim();
            var reTag=new RegExp("^\\s*@(?<tag>\\w+)\\s+(?<rest>.+)$","g");
            var hits=reTag.exec(line);
            var b=hits !== null;
            bSeenTag=bSeenTag || b;
            if(bSeenTag){
                if(b){
                    switch(hits.groups.tag){
                    case "param":
                       var reParam=new RegExp("^\\s*(?<param>[$]\\w+)\\s+(?<rest>.+)$","g");  
                       var phit=reParam.exec(hits.groups.rest)  
                       if(phit !== null) ann.params[phit.groups.param]=phit.groups.rest;
                       break;
                    case "return":
                        ann.return=hits.groups.rest;
                        break;
                    case "error":
                        ann.errors.push(hits.groups.rest)
                        break;    
                    default:
                        ann.others.push({'tag':hits.groups.tag, 'value': hits.groups.rest})
                    }
                }else {
                    console.log("after: ",line)
                } 
            }else {
               ann.description += ' ' + line;
            }
        });
        ann.description = ann.description.trim();
//        ann.description = ann.description.substring(0, ann.description.length - 2).trim();
        console.log(ann);
        return ann;
    }
};