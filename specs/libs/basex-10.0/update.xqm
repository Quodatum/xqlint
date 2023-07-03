(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides additional functions for performing updates and returning results in <a href="https://docs.basex.org/wiki/XQuery_Update">updating expressions</a>.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Update_Module
 :)
module namespace update = "http://basex.org/modules/update";

(:~ 
 : The updating variant of <a href="https://docs.basex.org/wiki/XQuery_3.1#fn:apply">fn:apply</a> applies the specified updating <code>$function</code> to the specified <code>$arguments</code>.
 :
 : @param  update:apply($function value of type function(*)
 : @param $arguments value of type array(*)
 : @return value of type empty-sequence() 
 :)
declare function  update:apply($function as function(*), $arguments as array(*)) as empty-sequence()  external;

(:~ 
 : The updating variant of <a href="https://docs.basex.org/wiki/Higher-Order_Functions#fn:for-each">fn:for-each</a> applies the specified updating <code>$action</code> to every item of <code>$input</code>.
 :
 : @param  update:for-each($input value of type item()*
 : @param $action value of type function(item()
 : @return value of type empty-sequence() 
 :)
declare function  update:for-each($input as item()*, $action as function(item()) as item()*) as empty-sequence()  external;

(:~ 
 : The updating variant of <a href="https://docs.basex.org/wiki/Higher-Order_Functions#fn:for-each-pair">fn:for-each-pair</a> applies the specified updating <code>$action</code> to the successive pairs of items of <code>$input1</code> and <code>$input2</code>. Evaluation is stopped if one sequence yields no more items.
 :
 : @param  update:for-each-pair($input1 value of type item()*
 : @param $input2 value of type item()*
 : @param $action value of type function(item()
 : @return value of type empty-sequence() 
 :)
declare function  update:for-each-pair($input1 as item()*, $input2 as item()*, $action as function(item()) as item()*) as empty-sequence()  external;

(:~ 
 : The updating variant of <code><a href="https://docs.basex.org/wiki/Map_Module#map:for-each">map:for-each</a></code> applies the specified <code>$action</code> to every key/value pair of the supplied <code>$map</code> and returns the results as a sequence.
 :
 : @param  update:map-for-each($map value of type map(*)
 : @param $action value of type function(xs:anyAtomicType
 : @param item()* value of type 
 : @return value of type item()* 
 :)
declare function  update:map-for-each($map as map(*), $action as function(xs:anyAtomicType, item()*) as item()*) as item()*  external;

(:~ 
 : This function can be used if <code><a href="https://docs.basex.org/wiki/Options#MIXUPDATES">MIXUPDATES</a></code> is not enabled, and if values need to be returned within an updating expression: The supplied <code>$input</code> will be cached and returned at the very end, i.e., after all updates on the <i>pending update list</i> have been processed. If one of the supplied items is affected by an update, a copy will be created and cached instead.
 :
 : @param  update:output($input value of type item()*
 : @return value of type empty-sequence() 
 :)
declare function  update:output($input as item()*) as empty-sequence()  external;

(:~ 
 : Returns the items that have been cached by <code><a href="https://docs.basex.org/wiki/Update_Module#update:output">update:output</a></code>. The output cache can optionally be <code>$reset</code>. The function can be used to check which items will eventually be returned as the result of an updating function.<br/>This function is <i>non-deterministic</i>: It will return different results before and after items have been cached. The function can be useful for writing <a href="https://docs.basex.org/wiki/Unit_Module">unit tests</a>.
 :
 : @param  update:cache( value of type 
 : @return value of type item()* 
 :)
declare function  update:cache() as item()*  external;

(:~ 
 : Returns the items that have been cached by <code><a href="https://docs.basex.org/wiki/Update_Module#update:output">update:output</a></code>. The output cache can optionally be <code>$reset</code>. The function can be used to check which items will eventually be returned as the result of an updating function.<br/>This function is <i>non-deterministic</i>: It will return different results before and after items have been cached. The function can be useful for writing <a href="https://docs.basex.org/wiki/Unit_Module">unit tests</a>.
 :
 : @param  update:cache($reset value of type xs:boolean?
 : @return value of type item()* 
 :)
declare function  update:cache($reset as xs:boolean?) as item()*  external;
