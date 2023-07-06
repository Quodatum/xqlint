(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides simple functions to fetch the content of resources identified by URIs. Resources can be stored locally or remotely and e.g. use the <code>file://</code> or <code>http://</code> scheme. If more control over HTTP requests is required, the <a href="http://docs.basex.org/wiki/HTTP_Module">HTTP Module</a> can be used. With the <a href="http://docs.basex.org/wiki/HTML_Module">HTML Module</a>, retrieved HTML documents can be converted to XML.
 :
 : @author BaseX Team
 : @see /wiki/Fetch_Module
 :)
module namespace fetch = "http://basex.org/modules/fetch";

(:~ 
 : Fetches the resource referred to by the given URI and returns it as <a href="http://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:base64Binary</code> item.
 :
 : @param $uri value of type xs:string
 : @return value of type xs:base64Binary
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:binary($uri as xs:string) as xs:base64Binary external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="http://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li> The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument. </li> <li> By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�). </li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 : @error fetch:encoding the specified encoding is not supported, or unknown.
 :)
declare function fetch:text($uri as xs:string) as xs:string external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="http://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li> The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument. </li> <li> By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�). </li> </ul>
 :
 : @param $uri value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 : @error fetch:encoding the specified encoding is not supported, or unknown.
 :)
declare function fetch:text($uri as xs:string, $encoding as xs:string) as xs:string external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as <a href="http://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul> <li> The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument. </li> <li> By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�). </li> </ul>
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
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as XML document node.<br/>In contrast to <code>fn:doc</code>, each function call returns a different document node. As a consequence, document instances created by this function will not be kept in memory until the end of query evaluation.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="http://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="http://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $uri value of type xs:string
 : @return value of type document-node()
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:xml($uri as xs:string) as document-node() external;

(:~ 
 : Fetches the resource referred to by the given <code>$uri</code> and returns it as XML document node.<br/>In contrast to <code>fn:doc</code>, each function call returns a different document node. As a consequence, document instances created by this function will not be kept in memory until the end of query evaluation.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="http://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="http://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $uri value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type document-node()
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:xml($uri as xs:string, $options as map(*)?) as document-node() external;

(:~ 
 : Parses binary <code>$data</code> and returns it as XML document node.<br/>In contrast to fn:parse-xml, which expects an XQuery string, the input of this function can be arbitrarily encoded. The encoding will be derived from the XML declaration or (in case of UTF16 or UTF32) from the first bytes of the input.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="http://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="http://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $data value of type xs:base64Binary
 : @return value of type document-node()
 :)
declare function fetch:xml-binary($data as xs:base64Binary) as document-node() external;

(:~ 
 : Parses binary <code>$data</code> and returns it as XML document node.<br/>In contrast to fn:parse-xml, which expects an XQuery string, the input of this function can be arbitrarily encoded. The encoding will be derived from the XML declaration or (in case of UTF16 or UTF32) from the first bytes of the input.<br/>The <code>$options</code> argument can be used to change the parsing behavior. Allowed options are all <a href="http://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="http://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options in lower case.
 :
 : @param $data value of type xs:base64Binary
 : @param $options value of type map(*)?
 : @return value of type document-node()
 :)
declare function fetch:xml-binary($data as xs:base64Binary, $options as map(*)?) as document-node() external;

(:~ 
 : Returns the content-type (also called mime-type) of the resource specified by <code>$uri</code>: <ul> <li> If a remote resource is addressed, the request header will be evaluated. </li> <li> If the addressed resource is locally stored, the content-type will be guessed based on the file extension. </li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type xs:string
 : @error fetch:open the URI could not be resolved, or the resource could not be retrieved.
 :)
declare function fetch:content-type($uri as xs:string) as xs:string external;
