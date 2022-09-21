module namespace _ = 'upload';
import  module namespace util = 'utils' at "../../lib/utils.xqm";

declare function _:about(){
 let $a:=util:render("about.txq")
 return $a
};
