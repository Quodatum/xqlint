(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for manipulating arrays, which has been introduced with <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/XQuery_3.1#Arrays">XQuery 3.1</a>.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Array_Module
 :)
module namespace array = "http://www.w3.org/2005/xpath-functions/array";

(:~ 
 : Returns the number of members in <code>$array</code>. Note that because an array is an item, the <code>fn:count</code> function when applied to an array always returns <code>1</code>.
 :
 : @param $input value of type array(*)
 : @return value of type xs:integer
 :)
declare function array:size($input as array(*)) as xs:integer external;

(:~ 
 : Returns the <code>$array</code> member at the specified <code>$position</code>.
 :
 : @param $array value of type array(*)
 : @param $position value of type xs:integer
 : @return value of type item()*
 : @error array:FOAY0001 <code>$position</code> is not in the range <code>1</code> to <code>array:size($array)</code> inclusive.
 :)
declare function array:get($array as array(*), $position as xs:integer) as item()* external;

(:~ 
 : Returns a copy of <code>$array</code> with a new <code>$member</code> attached.
 :
 : @param $array value of type array(*)
 : @param $member value of type item()*
 : @return value of type array(*)
 :)
declare function array:append($array as array(*), $member as item()*) as array(*) external;

(:~ 
 : Constructs a new array with with <code>$length</code> members of <code>$array</code> beginning from the specified <code>$position</code>.<br/>The two-argument version of the function returns the same result as the three-argument version when called with <code>$length</code> equal to the value of <code>array:size($array) - $position + 1</code>.
 :
 : @param $array value of type array(*)
 : @param $position value of type xs:integer
 : @return value of type array(*)
 : @error array:FOAY0001 <code>$position</code> is less than one, or if <code>$position + $length</code> is greater than <code>array:size($array) + 1</code>.
 : @error array:FOAY0002 <code>$length</code> is less than zero.
 :)
declare function array:subarray($array as array(*), $position as xs:integer) as array(*) external;

(:~ 
 : Constructs a new array with with <code>$length</code> members of <code>$array</code> beginning from the specified <code>$position</code>.<br/>The two-argument version of the function returns the same result as the three-argument version when called with <code>$length</code> equal to the value of <code>array:size($array) - $position + 1</code>.
 :
 : @param $array value of type array(*)
 : @param $position value of type xs:integer
 : @param $length value of type xs:integer
 : @return value of type array(*)
 : @error array:FOAY0001 <code>$position</code> is less than one, or if <code>$position + $length</code> is greater than <code>array:size($array) + 1</code>.
 : @error array:FOAY0002 <code>$length</code> is less than zero.
 :)
declare function array:subarray($array as array(*), $position as xs:integer, $length as xs:integer) as array(*) external;

(:~ 
 : Returns a copy of <code>$array</code> with <code>$member</code> replaced at the specified <code>$position</code>. Equivalent to <code>$array =&gt; array:remove($position) =&gt; array:insert-before($position, $member)</code>.
 :
 : @param $array value of type array(*)
 : @param $position value of type xs:integer
 : @param $member value of type item()*
 : @return value of type array(*)
 : @error array:FOAY0001 <code>$position</code> is not in the range <code>1</code> to <code>array:size($array)</code> inclusive.
 :)
declare function array:put($array as array(*), $position as xs:integer, $member as item()*) as array(*) external;

(:~ 
 : Returns a copy of <code>$array</code> without the member at the specified <code>$positions</code>.
 :
 : @param $array value of type array(*)
 : @param $positions value of type xs:integer*
 : @return value of type array(*)
 : @error array:FOAY0001 A position is not in the range <code>1</code> to <code>array:size($array)</code> inclusive.
 :)
declare function array:remove($array as array(*), $positions as xs:integer*) as array(*) external;

(:~ 
 : Returns a copy of <code>$array</code> with one new <code>$member</code> at the specified <code>$position</code>. Setting <code>$position</code> to the value <code>array:size($array) + 1</code> yields the same result as <code>array:append($array, $insert)</code>.
 :
 : @param $array value of type array(*)
 : @param $position value of type xs:integer
 : @param $member value of type item()*
 : @return value of type array(*)
 : @error array:FOAY0001 <code>$position</code> is not in the range <code>1</code> to <code>array:size($array) + 1</code> inclusive.
 :)
declare function array:insert-before($array as array(*), $position as xs:integer, $member as item()*) as array(*) external;

(:~ 
 : Returns the first member of <code>$array</code>. This function is equivalent to the expression <code>$array(1)</code>.
 :
 : @param $array value of type array(*)
 : @return value of type item()*
 : @error array:FOAY0001 The array is empty.
 :)
declare function array:head($array as array(*)) as item()* external;

(:~ 
 : Returns a new array with all members except the first from <code>$array</code>. This function is equivalent to the expression <code>array:remove($array, 1)</code>.
 :
 : @param $array value of type array(*)
 : @return value of type array(*)
 : @error array:FOAY0001 The array is empty.
 :)
declare function array:tail($array as array(*)) as array(*) external;

(:~ 
 : Returns a new array with all members of <code>$array</code> in reverse order.
 :
 : @param $array value of type array(*)
 : @return value of type array(*)
 :)
declare function array:reverse($array as array(*)) as array(*) external;

(:~ 
 : Concatenates the contents of several <code>$arrays</code> into a single array.
 :
 : @param $arrays value of type array(*)*
 : @return value of type array(*)
 :)
declare function array:join($arrays as array(*)*) as array(*) external;

(:~ 
 : Recursively flattens all arrays that occur in the supplied <code>$items</code>.
 :
 : @param $items value of type item()*
 : @return value of type item()*
 :)
declare function array:flatten($items as item()*) as item()* external;

(:~ 
 : Returns a new array, in which each member is computed by applying <code>$function</code> to the corresponding member of <code>$array</code>.
 :
 : @param $array value of type array(*)
 : @param $function value of type function(item()*
 : @return value of type array(*)
 :)
declare function array:for-each($array as array(*), $function as function(item()*) as item()*) as array(*) external;

(:~ 
 : Returns a new array with those members of <code>$array</code> for which <code>$function</code> returns <code>true</code>.
 :
 : @param $array value of type array(*)
 : @param $function value of type function(item()*
 : @return value of type array(*)
 :)
declare function array:filter($array as array(*), $function as function(item()*) as xs:boolean) as array(*) external;

(:~ 
 : Evaluates the supplied <code>$function</code> cumulatively on successive members of the supplied <code>$array</code> from left to right and using <code>$zero</code> as first argument.
 :
 : @param $array value of type array(*)
 : @param $zero value of type item()*
 : @param $function value of type function(item()*
 : @param item()* value of type 
 : @return value of type item()*
 :)
declare function array:fold-left($array as array(*), $zero as item()*, $function as function(item()*, item()*) as item()*) as item()* external;

(:~ 
 : Evaluates the supplied <code>$function</code> cumulatively on successive members of the supplied <code>$array</code> from right to left and using <code>$zero</code> as first argument.
 :
 : @param $array value of type array(*)
 : @param $zero value of type item()*
 : @param $function value of type function(item()*
 : @param item()* value of type 
 : @return value of type item()*
 :)
declare function array:fold-right($array as array(*), $zero as item()*, $function as function(item()*, item()*) as item()*) as item()* external;

(:~ 
 : Returns a new array obtained by evaluating the supplied <code>$function</code> for each pair of members at the same position in <code>$array1</code> and <code>$array2</code>.
 :
 : @param $array1 value of type array(*)
 : @param $array2 value of type array(*)
 : @param $function value of type function(item()*
 : @return value of type array(*)
 :)
declare function array:for-each-pair($array1 as array(*), $array2 as array(*), $function as function(item()*) as item()*) as array(*) external;

(:~ 
 : Returns a new array with sorted <code>$array</code> members, using an optional <code>$collation</code>. If a <code>$key</code> function is supplied, it will be applied on all array members. The items of the resulting values will be sorted using the semantics of the <code>lt</code> expression.
 :
 : @param $array value of type array(*)
 : @return value of type array(*)
 :)
declare function array:sort($array as array(*)) as array(*) external;

(:~ 
 : Returns a new array with sorted <code>$array</code> members, using an optional <code>$collation</code>. If a <code>$key</code> function is supplied, it will be applied on all array members. The items of the resulting values will be sorted using the semantics of the <code>lt</code> expression.
 :
 : @param $array value of type array(*)
 : @param $collation value of type xs:string?
 : @return value of type array(*)
 :)
declare function array:sort($array as array(*), $collation as xs:string?) as array(*) external;

(:~ 
 : Returns a new array with sorted <code>$array</code> members, using an optional <code>$collation</code>. If a <code>$key</code> function is supplied, it will be applied on all array members. The items of the resulting values will be sorted using the semantics of the <code>lt</code> expression.
 :
 : @param $array value of type array(*)
 : @param $collation value of type xs:string?
 : @param $key value of type function(item()*
 : @return value of type array(*)
 :)
declare function array:sort($array as array(*), $collation as xs:string?, $key as function(item()*) as xs:anyAtomicType*) as array(*) external;
