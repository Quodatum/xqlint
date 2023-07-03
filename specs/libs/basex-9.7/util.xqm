(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains various small utility and helper functions. Please note that some of the functions are used for internal query rewritings. They may be renamed or moved to other modules in future versions of BaseX.
 :
 : @author BaseX Team
 : @see /wiki/Utility_Module
 :)
module namespace util = "http://basex.org/modules/util";

(:~ 
 : Alternative writing for the if/then/else expression: <ul> <li> If the <i>effective boolean value</i> of <code>$condition</code> is true, the <code>$then</code> branch will be evaluated. </li> <li> Otherwise, <code>$else</code> will be evaluated. If no third argument is supplied, an empty sequence will be returned. </li> </ul>
 :
 : @param $condition value of type item()*
 : @param $then value of type item()*
 : @return value of type item()*
 :)
declare function util:if($condition as item()*, $then as item()*) as item()* external;

(:~ 
 : Alternative writing for the if/then/else expression: <ul> <li> If the <i>effective boolean value</i> of <code>$condition</code> is true, the <code>$then</code> branch will be evaluated. </li> <li> Otherwise, <code>$else</code> will be evaluated. If no third argument is supplied, an empty sequence will be returned. </li> </ul>
 :
 : @param $condition value of type item()*
 : @param $then value of type item()*
 : @param $else value of type item()*
 : @return value of type item()*
 :)
declare function util:if($condition as item()*, $then as item()*, $else as item()*) as item()* external;

(:~ 
 : Returns <code>$items</code> if it is a non-empty sequence. Otherwise, returns <code>$default</code>. The function is equivalent to the expression <code>if(exists($items)) then $items else $default</code>.
 :
 : @param $items value of type item()*
 : @param $default value of type item()*
 : @return value of type item()*
 :)
declare function util:or($items as item()*, $default as item()*) as item()* external;

(:~ 
 : Returns the item from <code>$sequence</code> at the specified <code>$position</code>. Equivalent to <code>$sequence[$position]</code>.
 :
 : @param $sequence value of type item()*
 : @param $position value of type xs:double
 : @return value of type item()?
 :)
declare function util:item-at($sequence as item()*, $position as xs:double) as item()? external;

(:~ 
 : Returns items from <code>$sequence</code>, starting at position <code>$first</code> and ending at <code>$last</code>. Equivalent to <code>subsequence($sequence, $first, $last - $first + 1)</code>.
 :
 : @param $sequence value of type item()*
 : @param $first value of type xs:double
 : @param $last value of type xs:double
 : @return value of type item()*
 :)
declare function util:item-range($sequence as item()*, $first as xs:double, $last as xs:double) as item()* external;

(:~ 
 : Returns last item of a <code>$sequence</code>. Equivalent to <code>$sequence[last()]</code>.
 :
 : @param $sequence value of type item()*
 : @return value of type item()?
 :)
declare function util:last-from($sequence as item()*) as item()? external;

(:~ 
 : Returns <code>$count</code> instances of the specified <code>$sequence</code>. A similar result can be generated with <code>(1 to $count) ! $sequence</code>, but in the latter case, the right-hand expression will be evaluated multiple times.
 :
 : @param $sequence value of type item()*
 : @param $count value of type xs:integer
 : @return value of type item()*
 : @error util:negative The specified number is negative.
 :)
declare function util:replicate($sequence as item()*, $count as xs:integer) as item()* external;
