(:~ 
 : The math <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> defines functions to perform mathematical operations, such as <code>pi</code>, <code>asin</code> and <code>acos</code>. Most functions are specified in the <a href="http://www.w3.org/TR/xpath-functions-30/">Functions and Operators Specification</a> of the upcoming XQuery 3.0 Recommendation, and some additional ones have been added in this module.
 :
 : @author BaseX Team
 : @see /wiki/Math_Module
 :)
module namespace math = "http://www.w3.org/2005/xpath-functions/math";

(:~ 
 : Returns the <code>xs:double</code> value of the mathematical constant π whose lexical representation is 3.141592653589793.
 :
 : @return value of type xs:double
 :)
declare function math:pi() as xs:double external;

(:~ 
 : Returns the square root of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the <code>xs:double</code> value of the mathematical square root of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:sqrt($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the sine of the <code>$arg</code>, expressed in radians.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the sine of <code>$arg</code>, treated as an angle in radians.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:sin($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the cosine of <code>$arg</code>, expressed in radians.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the cosine of <code>$arg</code>, treated as an angle in radians.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:cos($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the tangent of <code>$arg</code>, expressed in radians.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the tangent of <code>$arg</code>, treated as an angle in radians.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:tan($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the arc sine of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the arc sine of <code>$arg</code>, returned as an angle in radians in the range -π/2 to +π/2.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:asin($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the arc cosine of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the arc cosine of <code>$arg</code>, returned as an angle in radians in the range 0 to +π.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:acos($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the arc tangent of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the arc tangent of <code>$arg</code>, returned as an angle in radians in the range -π/2 to +π/2.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:atan($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the arc tangent of <code>$arg1</code> divided by <code>$arg2</code>, the result being in the range -π/2 to +π/2 radians.<br/>If <code>$arg1</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the arc tangent of <code>$arg1</code> divided by <code>$arg2</code>, returned as an angle in radians in the range -π to +π.
 :
 : @param $arg1 value of type xs:double?
 : @param $arg2 value of type xs:double
 : @return value of type xs:double?
 :)
declare function math:atan2($arg1 as xs:double?, $arg2 as xs:double) as xs:double? external;

(:~ 
 : Returns <code>$arg1</code> raised to the power of <code>$arg2</code>.<br/>If <code>$arg1</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the <code>$arg1</code> raised to the power of <code>$arg2</code>.
 :
 : @param $arg1 value of type xs:double?
 : @param $arg2 value of type xs:double
 : @return value of type xs:double?
 :)
declare function math:pow($arg1 as xs:double?, $arg2 as xs:double) as xs:double? external;

(:~ 
 : Returns <i>e</i> raised to the power of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the value of <i>e</i> raised to the power of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:exp($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the natural logarithm of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the natural logarithm (base <i>e</i>) of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:log($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the base 10 logarithm of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the base 10 logarithm of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:log10($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the <code>xs:double</code> value of the mathematical constant <i>e</i> whose lexical representation is 2.718281828459045.
 :
 : @return value of type xs:double
 :)
declare function math:e() as xs:double external;

(:~ 
 : Returns the hyperbolic sine of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the hyperbolic sine of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:sinh($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the hyperbolic cosine of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the hyperbolic cosine of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:cosh($arg as xs:double?) as xs:double? external;

(:~ 
 : Returns the hyperbolic tangent of <code>$arg</code>.<br/>If <code>$arg</code> is the empty sequence, the empty sequence is returned.<br/>Otherwise the result is the hyperbolic tangent of <code>$arg</code>.
 :
 : @param $arg value of type xs:double?
 : @return value of type xs:double?
 :)
declare function math:tanh($arg as xs:double?) as xs:double? external;

(:~ 
 : Calculates the CRC32 check sum of the given <code>$string</code>.<br/>If an empty sequence is supplied, the empty sequence is returned.
 :
 : @param $string value of type xs:string?
 : @return value of type xs:hexBinary?
 :)
declare function math:crc32($string as xs:string?) as xs:hexBinary? external;
