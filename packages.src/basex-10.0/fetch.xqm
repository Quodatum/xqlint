(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides simple functions to fetch the content of resources identified by URIs. Resources can be stored locally or remotely and e.g. use the <code>file://</code> or <code>http://</code> scheme. If more control over HTTP requests is required, the <a href="https://docs.basex.org/wiki/HTTP_Client_Module">HTTP Client Module</a> can be used. With the <a href="https://docs.basex.org/wiki/HTML_Module">HTML Module</a>, retrieved HTML documents can be converted to XML.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Fetch_Module
 :)
module namespace fetch = "http://basex.org/modules/fetch";

(:~ 
 : Fetches the resource referred to by the given URI and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:base64Binary</code> item.
 :
 : @param $uri value of type xs:string
 : @return value of type xs:base64Binary
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:binary($uri as xs:string) as xs:base64Binary external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 : @error fetch:encoding the specified encoding is not supported, or unknown.
 :)
declare function fetch:text($uri as xs:string) as xs:string external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $uri value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 : @error fetch:encoding the specified encoding is not supported, or unknown.
 :)
declare function fetch:text($uri as xs:string, $encoding as xs:string) as xs:string external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li> <li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li> </ul>
 :
 : @param $uri value of type xs:string
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 : @error fetch:encoding the specified encoding is not supported, or unknown.
 :)
declare function fetch:text($uri as xs:string, $encoding as xs:string, $fallback as xs:boolean) as xs:string external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as a document node.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.<br/>The function differs from <code>fn:doc</code> in various aspects: <ul> <li>It is <i>non-deterministic</i>, i.e., a new document node will be created by each call of this function.</li> <li>A document created by this function will be garbage-collected as soon as it is not referenced anymore.</li> <li>URIs will not be resolved against existing databases. As a result, it will not trigger any locks (see <a href="https://docs.basex.org/wiki/Transaction_Management#Limitations">limitations of database locking</a> for more details).</li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type document-node()
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:doc($uri as xs:string) as document-node() external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as a document node.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.<br/>The function differs from <code>fn:doc</code> in various aspects: <ul> <li>It is <i>non-deterministic</i>, i.e., a new document node will be created by each call of this function.</li> <li>A document created by this function will be garbage-collected as soon as it is not referenced anymore.</li> <li>URIs will not be resolved against existing databases. As a result, it will not trigger any locks (see <a href="https://docs.basex.org/wiki/Transaction_Management#Limitations">limitations of database locking</a> for more details).</li> </ul>
 :
 : @param $uri value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type document-node()
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:doc($uri as xs:string, $options as map(*)?) as document-node() external;

(:~ 
 : Converts the specified <code>$input</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) to XML and returns it as a document node.<br/>In contrast to <code>fn:parse-xml</code>, which expects a string, the input can be arbitrarily encoded. The encoding will be derived from the XML declaration or (in case of UTF-16 or UTF-32) from the first bytes of the input.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $input value of type xs:anyAtomicType
 : @return value of type document-node()
 : @error fetch:open the input could not be parsed.
 :)
declare function fetch:binary-doc($input as xs:anyAtomicType) as document-node() external;

(:~ 
 : Converts the specified <code>$input</code> (<code>xs:base64Binary</code>, <code>xs:hexBinary</code>) to XML and returns it as a document node.<br/>In contrast to <code>fn:parse-xml</code>, which expects a string, the input can be arbitrarily encoded. The encoding will be derived from the XML declaration or (in case of UTF-16 or UTF-32) from the first bytes of the input.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $data value of type xs:anyAtomicType
 : @param $options value of type map(*)?
 : @return value of type document-node()
 : @error fetch:open the input could not be parsed.
 :)
declare function fetch:binary-doc($data as xs:anyAtomicType, $options as map(*)?) as document-node() external;

(:~ 
 : Returns the content-type (also called mime-type) of the resource specified by <code>$uri</code>: <ul> <li>If a remote resource is addressed, the request header will be evaluated.</li> <li>If the addressed resource is locally stored, the content-type will be guessed based on the file extension.</li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:content-type($uri as xs:string) as xs:string external;
