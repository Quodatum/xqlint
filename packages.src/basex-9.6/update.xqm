(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides additional functions for performing updates and returning results in <a href="http://docs.basex.org/wiki/XQuery_Update">updating expressions</a>.
 :
 : @author BaseX Team
 : @see /wiki/Update_Module
 :)
module namespace update = "http://basex.org/modules/update";

(:~ 
 : The updating variant of <a href="http://docs.basex.org/wiki/XQuery_3.1#fn:apply">fn:apply</a> applies the specified updating <code>$function</code> to the specified <code>$arguments</code>.
 :
 : @param $function value of type function(*)
 : @param $arguments value of type array(*)
 :)
declare function update:apply($function as function(*), $arguments as array(*)) as empty-sequence() external;

(:~ 
 : The updating variant of <a href="http://docs.basex.org/wiki/Higher-Order_Functions#fn:for-each">fn:for-each</a> applies the specified updating <code>$function</code> to every item of <code>$seq</code>.
 :
 : @param $seq value of type item()*
 : @param $function value of type function(item()
 :)
declare function update:for-each($seq as item()*, $function as function(item()) as item()*) as empty-sequence() external;

(:~ 
 : The updating variant of <a href="http://docs.basex.org/wiki/Higher-Order_Functions#fn:for-each-pair">fn:for-each-pair</a> applies the specified updating <code>$function</code> to the successive pairs of items of <code>$seq1</code> and <code>$seq2</code>. Evaluation is stopped if one sequence yields no more items.
 :
 : @param $seq1 value of type item()*
 : @param $function value of type function(item()
 :)
declare function update:for-each-pair($seq1 as item()*, $function as function(item()) as item()*) as empty-sequence() external;

(:~ 
 : The updating variant of <a href="http://docs.basex.org/wiki/Map_Module#map:for-each">map:for-each</a> applies the specified <code>$function</code> to every key/value pair of the supplied <code>$map</code> and returns the results as a sequence.
 :
 : @param $map value of type map(*)
 : @param $function value of type function(xs:anyAtomicType
 : @param item()* value of type 
 : @return value of type item()*
 :)
declare function update:map-for-each($map as map(*), $function as function(xs:anyAtomicType, item()*) as item()*) as item()* external;

(:~ 
 : This function is a helper function for returning results in an updating expression. The argument of the function will be evaluated, and the resulting items will be cached and returned after the updates on the <i>pending update list</i> have been processed. If the supplied item will be affected by an update, a copy will be created and cached instead.
 :
 : @param $result value of type item()*
 :)
declare function update:output($result as item()*) as empty-sequence() external;

(:~ 
 : Returns the items that have been cached by <a href="/wiki/Update_Module#update:output">update:output</a>. It can be used to check which items will eventually be returned as result of an updating function.<br/>This function is <i>non-deterministic</i>: It will return different results before and after items have been cached. It is e. g. useful when writing <a href="http://docs.basex.org/wiki/Unit_Module">unit tests</a>.
 :
 : @return value of type item()*
 :)
declare function update:cache() as item()* external;
