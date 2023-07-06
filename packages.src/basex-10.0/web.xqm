(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides convenience functions for building web applications with <a href="https://docs.basex.org/wiki/RESTXQ">RESTXQ</a>.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Web_Module
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
 : Creates a new URL from the specified <code>$url</code> string, query string <code>$parameters</code> and an optional <code>$anchor</code> reference. The keys and values of the map entries will be converted to strings, URL-encoded (see <code> <a href="https://docs.basex.org/wiki/Web_Module#web:encode-url">web:encode-url</a> </code>), and appended to the URL as query parameters. If a map entry has more than a single item, all of them will be appended as single parameters.
 :
 : @param $url value of type xs:string
 : @param $parameters value of type map(*)
 : @return value of type xs:string
 :)
declare function web:create-url($url as xs:string, $parameters as map(*)) as xs:string external;

(:~ 
 : Creates a new URL from the specified <code>$url</code> string, query string <code>$parameters</code> and an optional <code>$anchor</code> reference. The keys and values of the map entries will be converted to strings, URL-encoded (see <code> <a href="https://docs.basex.org/wiki/Web_Module#web:encode-url">web:encode-url</a> </code>), and appended to the URL as query parameters. If a map entry has more than a single item, all of them will be appended as single parameters.
 :
 : @param $url value of type xs:string
 : @param $parameters value of type map(*)
 : @param $anchor value of type xs:string
 : @return value of type xs:string
 :)
declare function web:create-url($url as xs:string, $parameters as map(*), $anchor as xs:string) as xs:string external;

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
 : Creates a server-side <a href="https://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ forward request</a> to the specified <code>$path</code>: <ul> <li>The client will not get notified of this forwarding.</li> <li>Supplied query parameters will be attached to parameters of the current request.</li> <li>The <code>$parameter</code> argument is processed as described in <code> <a href="https://docs.basex.org/wiki/Web_Module#web:create-url">web:create-url</a> </code>.</li> </ul>
 :
 : @param $path value of type xs:string
 : @return value of type element(rest:forward)
 :)
declare function web:forward($path as xs:string) as element(rest:forward) external;

(:~ 
 : Creates a server-side <a href="https://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ forward request</a> to the specified <code>$path</code>: <ul> <li>The client will not get notified of this forwarding.</li> <li>Supplied query parameters will be attached to parameters of the current request.</li> <li>The <code>$parameter</code> argument is processed as described in <code> <a href="https://docs.basex.org/wiki/Web_Module#web:create-url">web:create-url</a> </code>.</li> </ul>
 :
 : @param $path value of type xs:string
 : @param $parameters value of type map(*)
 : @return value of type element(rest:forward)
 :)
declare function web:forward($path as xs:string, $parameters as map(*)) as element(rest:forward) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ redirection</a> to the specified <code>$url</code>. The returned response will only work if no other items are returned by the RESTXQ function.<br/>The <code>$parameters</code> and <code>$anchor</code> arguments are processed as described in (see <code> <a href="https://docs.basex.org/wiki/Web_Module#web:create-url">web:create-url</a> </code>).
 :
 : @param $url value of type xs:string
 : @return value of type element(rest:response)
 :)
declare function web:redirect($url as xs:string) as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ redirection</a> to the specified <code>$url</code>. The returned response will only work if no other items are returned by the RESTXQ function.<br/>The <code>$parameters</code> and <code>$anchor</code> arguments are processed as described in (see <code> <a href="https://docs.basex.org/wiki/Web_Module#web:create-url">web:create-url</a> </code>).
 :
 : @param $url value of type xs:string
 : @param $parameters value of type map(*)
 : @return value of type element(rest:response)
 :)
declare function web:redirect($url as xs:string, $parameters as map(*)) as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Forwards_and_Redirects">RESTXQ redirection</a> to the specified <code>$url</code>. The returned response will only work if no other items are returned by the RESTXQ function.<br/>The <code>$parameters</code> and <code>$anchor</code> arguments are processed as described in (see <code> <a href="https://docs.basex.org/wiki/Web_Module#web:create-url">web:create-url</a> </code>).
 :
 : @param $url value of type xs:string
 : @param $parameters value of type map(*)
 : @param $anchor value of type xs:string
 : @return value of type element(rest:response)
 :)
declare function web:redirect($url as xs:string, $parameters as map(*), $anchor as xs:string) as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the HTTP response element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @return value of type element(rest:response)
 :)
declare function web:response-header() as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the HTTP response element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?) as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the HTTP response element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @param $headers value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?, $headers as map(*)?) as element(rest:response) external;

(:~ 
 : Creates a <a href="https://docs.basex.org/wiki/RESTXQ#Response">RESTXQ response header</a>.<br/> <p>Serialization parameters and header values can be supplied via the <code>$output</code> and <code>$headers</code> arguments, and status and message attributes can be attached to the HTTP response element with the <code>$atts</code> argument. </p> <ul> <li> <code>media-type</code>: <code>application/octet-stream</code> </li> </ul> <p>Header options can be supplied via the <code>$headers</code> argument. Empty string values can be specified to invalidate default values. By default, the following header options will be returned: </p> <ul> <li> <code>Cache-Control</code>: <code>max-age=3600,public</code> </li> </ul>
 :
 : @param $output value of type map(*)?
 : @param $headers value of type map(*)?
 : @param $atts value of type map(*)?
 : @return value of type element(rest:response)
 :)
declare function web:response-header($output as map(*)?, $headers as map(*)?, $atts as map(*)?) as element(rest:response) external;

(:~ 
 : Raises an error with the QName <code>rest:error</code>, the specified <code>$message</code> and the specified <code>$status</code> as error value.<br/>Calls to this function are equivalent to <code>fn:error(xs:QName('rest:error'), $message, $status)</code>. <p>See <a href="https://docs.basex.org/wiki/RESTXQ#Raise_Errors">RESTXQ: Raise Errors</a> to learn how the function is helpful in web applications. </p>
 :
 : @param $status value of type xs:integer
 : @param $message value of type xs:string
 : @return value of type none
 : @error web:status The supplied status code is invalid.
 :)
declare function web:error($status as xs:integer, $message as xs:string) as none external;
