// generate xqdoc
var fs = require('fs');

var XQLint = require('../../lib/xqlint').XQLint;

var src="C:/Users/andy/git/quodatum/xqdoca/src/main/lib/ast-to-xqdoc.xqm";
//src="cases\history.xqm";
var linter = new XQLint(fs.readFileSync(src, 'utf-8'));
// .hasSyntaxError()
function replacer2(key, val) {
   if(["pos","posAll"].indexOf(key)>=0){
        return undefined
   }else{
        return val
    }
};
var xqdoc=linter.getXQDoc();
console.log(JSON.stringify(xqdoc,replacer2," "));
