(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to convert data between different formats.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Conversion_Module
 :)
module namespace convert = "http://basex.org/modules/convert";

(:~ 
 : Converts the specifed <code>$bytes</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) to a string: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $bytes value of type xs:anyAtomicType
 : @return value of type xs:string
 : @error convert:string The input is an invalid XML string, or the wrong encoding has been specified.
 : @error convert:BXCO0002 The specified encoding is invalid or not supported.
 :)
declare function convert:binary-to-string($bytes as xs:anyAtomicType) as xs:string external;

(:~ 
 : Converts the specifed <code>$bytes</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) to a string: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $bytes value of type xs:anyAtomicType
 : @param $encoding value of type xs:string
 : @return value of type xs:string
 : @error convert:string The input is an invalid XML string, or the wrong encoding has been specified.
 : @error convert:BXCO0002 The specified encoding is invalid or not supported.
 :)
declare function convert:binary-to-string($bytes as xs:anyAtomicType, $encoding as xs:string) as xs:string external;

(:~ 
 : Converts the specifed <code>$bytes</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) to a string: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $bytes value of type xs:anyAtomicType
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean
 : @return value of type xs:string
 : @error convert:string The input is an invalid XML string, or the wrong encoding has been specified.
 : @error convert:BXCO0002 The specified encoding is invalid or not supported.
 :)
declare function convert:binary-to-string($bytes as xs:anyAtomicType, $encoding as xs:string, $fallback as xs:boolean) as xs:string external;

(:~ 
 : Converts the specified <code>$string</code> to an <code>xs:base64Binary</code> item. If the default encoding is chosen, conversion will be cheap, as strings and binaries are both internally represented as byte arrays.<br/>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.
 :
 : @param $string value of type xs:string
 : @return value of type xs:base64Binary
 : @error convert:binary The input cannot be represented in the specified encoding.
 : @error convert:encoding The specified encoding is invalid or not supported.
 :)
declare function convert:string-to-base64($string as xs:string) as xs:base64Binary external;

(:~ 
 : Converts the specified <code>$string</code> to an <code>xs:base64Binary</code> item. If the default encoding is chosen, conversion will be cheap, as strings and binaries are both internally represented as byte arrays.<br/>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.
 :
 : @param $string value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:base64Binary
 : @error convert:binary The input cannot be represented in the specified encoding.
 : @error convert:encoding The specified encoding is invalid or not supported.
 :)
declare function convert:string-to-base64($string as xs:string, $encoding as xs:string) as xs:base64Binary external;

(:~ 
 : Converts the specified <code>$string</code> to an <code>xs:hexBinary</code> item. If the default encoding is chosen, conversion will be cheap, as strings and binaries are both internally represented as byte arrays.<br/>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.
 :
 : @param $string value of type xs:string
 : @return value of type xs:hexBinary
 : @error convert:binary The input cannot be represented in the specified encoding.
 : @error convert:encoding The specified encoding is invalid or not supported.
 :)
declare function convert:string-to-hex($string as xs:string) as xs:hexBinary external;

(:~ 
 : Converts the specified <code>$string</code> to an <code>xs:hexBinary</code> item. If the default encoding is chosen, conversion will be cheap, as strings and binaries are both internally represented as byte arrays.<br/>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.
 :
 : @param $string value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:hexBinary
 : @error convert:binary The input cannot be represented in the specified encoding.
 : @error convert:encoding The specified encoding is invalid or not supported.
 :)
declare function convert:string-to-hex($string as xs:string, $encoding as xs:string) as xs:hexBinary external;

(:~ 
 : Converts the specified <code>$integers</code> to an item of type <code>xs:base64Binary</code>: <ul> <li>Only the first 8 bits of the supplied integers will be considered.</li> <li>Conversion of byte sequences is very efficient, as items of binary type are internally represented as byte arrays.</li> </ul>
 :
 : @param $integers value of type xs:integer*
 : @return value of type xs:base64Binary
 :)
declare function convert:integers-to-base64($integers as xs:integer*) as xs:base64Binary external;

(:~ 
 : Converts the specified <code>$integers</code> to an item of type <code>xs:hexBinary</code>: <ul> <li>Only the first 8 bits of the supplied integers will be considered.</li> <li>Conversion of byte sequences is very efficient, as items of binary type are internally represented as byte arrays.</li> </ul>
 :
 : @param $integers value of type xs:integer*
 : @return value of type xs:hexBinary
 :)
declare function convert:integers-to-hex($integers as xs:integer*) as xs:hexBinary external;

(:~ 
 : Returns the specified <code>$binary</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) as a sequence of unsigned integers (octets).
 :
 : @param $binary value of type xs:anyAtomicType
 : @return value of type xs:integer*
 :)
declare function convert:binary-to-integers($binary as xs:anyAtomicType) as xs:integer* external;

(:~ 
 : Returns the specified <code>$binary</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) as a sequence of bytes. The conversion is very cheap and takes no additional memory, as items of binary type are internally represented as byte arrays.
 :
 : @param $binary value of type xs:anyAtomicType
 : @return value of type xs:byte*
 :)
declare function convert:binary-to-bytes($binary as xs:anyAtomicType) as xs:byte* external;

(:~ 
 : Converts <code>$number</code> to a string, using the specified <code>$base</code>, interpreting it as a 64-bit unsigned integer.<br/>The first base elements of the sequence <code>'0',..,'9','a',..,'z'</code> are used as digits.<br/>Valid bases are <code>2, .., 36</code>.<br/>
 :
 : @param $number value of type xs:integer
 : @param $base value of type xs:integer
 : @return value of type xs:string
 : @error convert:base The specified base is not in the range 2-36.
 :)
declare function convert:integer-to-base($number as xs:integer, $base as xs:integer) as xs:string external;

(:~ 
 : Decodes an integer from <code>$string</code>, using the specified <code>$base</code>.<br/> The first base elements of the sequence <code>'0',..,'9','a',..,'z'</code> are allowed as digits; case does not matter. <br/>Valid bases are 2 - 36.<br/> If the supplied string contains more than 64 bits of information, the result will be truncated.
 :
 : @param $string value of type xs:string
 : @param $base value of type xs:integer
 : @return value of type xs:integer
 : @error convert:base The specified base is not in the range 2-36.
 : @error convert:integer The specified digit is not valid for the given range.
 :)
declare function convert:integer-from-base($string as xs:string, $base as xs:integer) as xs:integer external;

(:~ 
 : Converts the specified number of <code>$milliseconds</code> since 1 Jan 1970 to an item of type xs:dateTime.<br/>
 :
 : @param $milliseconds value of type xs:integer
 : @return value of type xs:dateTime
 :)
declare function convert:integer-to-dateTime($milliseconds as xs:integer) as xs:dateTime external;

(:~ 
 : Converts the specified <code>$dateTime</code> item to the number of milliseconds since 1 Jan 1970.<br/>
 :
 : @param $dateTime value of type xs:dateTime
 : @return value of type xs:integer
 :)
declare function convert:dateTime-to-integer($dateTime as xs:dateTime) as xs:integer external;

(:~ 
 : Converts the specified number of <code>$milliseconds</code> to an item of type xs:dayTimeDuration.<br/>
 :
 : @param $milliseconds value of type xs:integer
 : @return value of type xs:dayTimeDuration
 :)
declare function convert:integer-to-dayTime($milliseconds as xs:integer) as xs:dayTimeDuration external;

(:~ 
 : Converts the specified <code>$dayTime</code> duration to milliseconds represented by an integer.<br/>
 :
 : @param $dayTime value of type xs:dayTimeDuration
 : @return value of type xs:integer
 :)
declare function convert:dayTime-to-integer($dayTime as xs:dayTimeDuration) as xs:integer external;

(:~ 
 : Encodes the specified <code>$key</code> (with the optional <code>$lax</code> conversion method) to a valid NCName representation, which can be used to create an element node: <ul> <li>An empty string is converted to a single underscore (<code>_</code>).</li> <li>Existing underscores are rewritten to two underscores (<code>__</code>).</li> <li>Characters that are no valid NCName characters are rewritten to an underscore and the character’s four-digit Unicode. For example, the exclamation mark <code>?</code> is transformed to <code>_003f</code>.</li> <li>If lax conversion is chosen, invalid characters are replaced with underscores or (when invalid as first character of an element name) prefixed with an underscore. The resulting string may be better readable, but it cannot necessarily be converted back to the original form.</li> </ul> <p>This encoding is employed by the <code>direct</code> conversion format in the <a href="https://docs.basex.org/wiki/JSON_Module">JSON Module</a> and the <a href="https://docs.basex.org/wiki/CSV_Module">CSV Module</a>. </p>
 :
 : @param $key value of type xs:string
 : @return value of type xs:string
 :)
declare function convert:encode-key($key as xs:string) as xs:string external;

(:~ 
 : Encodes the specified <code>$key</code> (with the optional <code>$lax</code> conversion method) to a valid NCName representation, which can be used to create an element node: <ul> <li>An empty string is converted to a single underscore (<code>_</code>).</li> <li>Existing underscores are rewritten to two underscores (<code>__</code>).</li> <li>Characters that are no valid NCName characters are rewritten to an underscore and the character’s four-digit Unicode. For example, the exclamation mark <code>?</code> is transformed to <code>_003f</code>.</li> <li>If lax conversion is chosen, invalid characters are replaced with underscores or (when invalid as first character of an element name) prefixed with an underscore. The resulting string may be better readable, but it cannot necessarily be converted back to the original form.</li> </ul> <p>This encoding is employed by the <code>direct</code> conversion format in the <a href="https://docs.basex.org/wiki/JSON_Module">JSON Module</a> and the <a href="https://docs.basex.org/wiki/CSV_Module">CSV Module</a>. </p>
 :
 : @param $key value of type xs:string
 : @param $lax value of type xs:boolean
 : @return value of type xs:string
 :)
declare function convert:encode-key($key as xs:string, $lax as xs:boolean) as xs:string external;

(:~ 
 : Decodes the specified <code>$key</code> (with the optional <code>$lax</code> conversion method) to the original string representation.<br/>Keys supplied to this function are usually element names from documents that have been created with the <a href="https://docs.basex.org/wiki/JSON_Module">JSON Module</a> or <a href="https://docs.basex.org/wiki/CSV_Module">CSV Module</a>.
 :
 : @param $key value of type xs:string
 : @return value of type xs:string
 : @error convert:key The specified key cannot be decoded to its original representation.
 :)
declare function convert:decode-key($key as xs:string) as xs:string external;

(:~ 
 : Decodes the specified <code>$key</code> (with the optional <code>$lax</code> conversion method) to the original string representation.<br/>Keys supplied to this function are usually element names from documents that have been created with the <a href="https://docs.basex.org/wiki/JSON_Module">JSON Module</a> or <a href="https://docs.basex.org/wiki/CSV_Module">CSV Module</a>.
 :
 : @param $key value of type xs:string
 : @param $lax value of type xs:boolean
 : @return value of type xs:string
 : @error convert:key The specified key cannot be decoded to its original representation.
 :)
declare function convert:decode-key($key as xs:string, $lax as xs:boolean) as xs:string external;
