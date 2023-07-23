(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions that perform different hash operations.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Hashing_Module
 :)
module namespace hash = "http://basex.org/modules/hash";

(:~ 
 : Computes the MD5 hash of the given <code>$value</code>, which may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.
 :
 : @param $value value of type xs:anyAtomicType
 : @return value of type xs:base64Binary
 :)
declare function hash:md5($value as xs:anyAtomicType) as xs:base64Binary external;

(:~ 
 : Computes the SHA-1 hash of the given <code>$value</code>, which may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.
 :
 : @param $value value of type xs:anyAtomicType
 : @return value of type xs:base64Binary
 :)
declare function hash:sha1($value as xs:anyAtomicType) as xs:base64Binary external;

(:~ 
 : Computes the SHA-256 hash of the given <code>$value</code>, which may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.
 :
 : @param $value value of type xs:anyAtomicType
 : @return value of type xs:base64Binary
 :)
declare function hash:sha256($value as xs:anyAtomicType) as xs:base64Binary external;

(:~ 
 : Computes the hash of the given <code>$value</code>, using the specified <code>$algorithm</code>. The specified values may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.<br/>The following three algorithms are supported: <code>MD5</code>, <code>SHA-1</code>, and <code>SHA-256</code>.
 :
 : @param $value value of type xs:anyAtomicType
 : @param $algorithm value of type xs:string
 : @return value of type xs:base64Binary
 : @error hash:algorithm the specified hashing algorithm is unknown.
 :)
declare function hash:hash($value as xs:anyAtomicType, $algorithm as xs:string) as xs:base64Binary external;
