(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides convenience functions for building web applications with <a href="http://docs.basex.org/wiki/RESTXQ">RESTXQ</a>.
 :
 : @author BaseX Team
 : @see /wiki/Web_Module
 :)
module namespace web = "http://basex.org/modules/web";

(:~ 
 : Returns the content type of a path by analyzing its file suffix. <code>application/octet-stream</code> is returned if the file suffix is unknown.
 :
 : @param $path value of type xs:string
 : @return value of type xs:string
 :)
declare function web:content-type($path as xs:string) as xs:string external;

(:~ 
 : Creates a new URL from the specified <code>$url</code> string and the <code>$parameters</code> specified in a map. The keys and and values of the map entries will be converted to strings, URL-encoded (see <a href="/wiki/Web_Module#web:encode-url">web:encode-url</a>), and appended to the url as query parameters. If a map entry has more than a single item, all of them will be appended as single parameters.
 :
 : @param $url value of type xs:string
 : @param $parameters value of type map(*)
 : @return value of type xs:string
 :)
declare function web:create-url($url as xs:string, $parameters as map(*)) as xs:string external;

(:~ 
 : Encodes a string to a URL. Spaces are rewritten to <code>+</code>; <code>*</code>, <code>-</code>, <code>.</code> and <code>_</code> are adopted; and all other non-ASCII characters and special characters are percent-encoded.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 :)
declare function web:encode-url($string as xs:string) as xs:string external;

(:~ 
 : Decodes a URL to the original string. Percent-encoded characters are decoded to their UTF8 codepoints, and <code>+</code> characters are rewritten to spaces.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 : @error web:invalid the string contains invalid XML characters.
 :)
declare function web:decode-url($string as xs:string) as xs:string external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ redirection</a> to the specified location. The returned response will only work if no other items are returned by the RESTXQ function.<br/>If <code>$parameters</code> are specified, they will be appended as query parameters to the URL as described for <a href="/wiki/Web_Module#web:create-url">web:create-url</a>.
 :
 : @param $location value of type xs:string
 : @return value of type element(rest:response)
 :)
declare function web:redirect($location as xs:string) as element(rest:response) external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ redirection</a> to the specified location. The returned response will only work if no other items are returned by the RESTXQ function.<br/>If <code>$parameters</code> are specified, they will be appended as query parameters to the URL as described for <a href="/wiki/Web_Module#web:create-url">web:create-url</a>.
 :
 : @param $location value of type xs:string
 : @param $parameters value of type map(*)
 : @return value of type element(rest:response)
 :)
declare function web:redirect($location as xs:string, $parameters as map(*)) as element(rest:response) external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the top element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @return value of type element(rest:response)
 :)
declare function web:response-header() as element(rest:response) external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the top element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?) as element(rest:response) external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the top element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @param $headers value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?, $headers as map(*)?) as element(rest:response) external;

(:~ 
 : Creates a <a href="http://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the top element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @param $headers value of type map(*)?
 : @param $atts value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?, $headers as map(*)?, $atts as map(*)?) as element(rest:response) external;
