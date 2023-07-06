(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for retrieving information on an HTTP request that has triggered the query. It is mostly useful when building <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/Web_Application">Web Applications</a>.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Request_Module
 :)
module namespace request = "http://exquery.org/ns/request";

(:~ 
 : Returns the Method of the HTTP request.
 :
 : @return value of type xs:string
 :)
declare function request:method() as xs:string external;

(:~ 
 : Returns the Scheme component of the URI of an HTTP request.
 :
 : @return value of type xs:string
 :)
declare function request:scheme() as xs:string external;

(:~ 
 : Returns the Hostname component of the URI of an HTTP request.
 :
 : @return value of type xs:string
 :)
declare function request:hostname() as xs:string external;

(:~ 
 : Returns the Port component of the URI of an HTTP request, or a default port if it has not been explicitly specified in the URI.
 :
 : @return value of type xs:integer
 :)
declare function request:port() as xs:integer external;

(:~ 
 : Returns the Path component of the URI of an HTTP request.
 :
 : @return value of type xs:string
 :)
declare function request:path() as xs:string external;

(:~ 
 : Returns the Query component of the URI of an HTTP request. If no query component exists, an empty sequence is returned.
 :
 : @return value of type xs:string?
 :)
declare function request:query() as xs:string? external;

(:~ 
 : Returns the complete URI of an HTTP request as it has been specified by the client.
 :
 : @return value of type xs:anyURI
 :)
declare function request:uri() as xs:anyURI external;

(:~ 
 : Returns the context of the request. For servlets in the default (root) context, this method returns an empty string.
 :
 : @return value of type xs:string
 :)
declare function request:context-path() as xs:string external;

(:~ 
 : Returns the IP address of the server.
 :
 : @return value of type xs:string
 :)
declare function request:address() as xs:string external;

(:~ 
 : Returns the fully qualified hostname of the client that sent the request.
 :
 : @return value of type xs:string
 :)
declare function request:remote-hostname() as xs:string external;

(:~ 
 : Returns the IP address of the client that sent the request.
 :
 : @return value of type xs:string
 :)
declare function request:remote-address() as xs:string external;

(:~ 
 : Returns the TCP port of the client socket that triggered the request.
 :
 : @return value of type xs:string
 :)
declare function request:remote-port() as xs:string external;

(:~ 
 : Returns the names of all query and form field parameters available from the HTTP request. With <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ">RESTXQ</a>, this function can be used to access parameters that have not been statically bound by <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ#Query_Parameters">%rest:query-param</a>.
 :
 : @return value of type xs:string*
 : @error request:parameter the request has invalid parameters.
 :)
declare function request:parameter-names() as xs:string* external;

(:~ 
 : Returns the value of the named query or form field parameter in an HTTP request. If the parameter does not exist, an empty sequence or the optionally specified default value is returned instead. If both query and form field parameters with the same name exist, the form field values will be attached to the query values.
 :
 : @param $name value of type xs:string
 : @return value of type xs:string*
 : @error request:parameter the request has invalid parameters.
 :)
declare function request:parameter($name as xs:string) as xs:string* external;

(:~ 
 : Returns the value of the named query or form field parameter in an HTTP request. If the parameter does not exist, an empty sequence or the optionally specified default value is returned instead. If both query and form field parameters with the same name exist, the form field values will be attached to the query values.
 :
 : @param $name value of type xs:string
 : @param $default value of type xs:string
 : @return value of type xs:string*
 : @error request:parameter the request has invalid parameters.
 :)
declare function request:parameter($name as xs:string, $default as xs:string) as xs:string* external;

(:~ 
 : Returns the names of all headers available from the HTTP request. If <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ">RESTXQ</a> is used, this function can be used to access headers that have not been statically bound by <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ#HTTP_Headers">%rest:header-param</a>.
 :
 : @return value of type xs:string*
 :)
declare function request:header-names() as xs:string* external;

(:~ 
 : Returns the value of the named header in an HTTP request. If the header does not exist, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @return value of type xs:string?
 :)
declare function request:header($name as xs:string) as xs:string? external;

(:~ 
 : Returns the value of the named header in an HTTP request. If the header does not exist, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @param $default value of type xs:string
 : @return value of type xs:string
 :)
declare function request:header($name as xs:string, $default as xs:string) as xs:string external;

(:~ 
 : Returns the names of all cookies in the HTTP headers available from the HTTP request. If <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ">RESTXQ</a> is used, this function can be used to access cookies that have not been statically bound by <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231027/https://docs.basex.org/wiki/RESTXQ#Cookies">%rest:cookie-param</a>.
 :
 : @return value of type xs:string*
 :)
declare function request:cookie-names() as xs:string* external;

(:~ 
 : Returns the value of the named Cookie in an HTTP request. If there is no such cookie, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @return value of type xs:string?
 :)
declare function request:cookie($name as xs:string) as xs:string? external;

(:~ 
 : Returns the value of the named Cookie in an HTTP request. If there is no such cookie, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @param $default value of type xs:string
 : @return value of type xs:string
 :)
declare function request:cookie($name as xs:string, $default as xs:string) as xs:string external;

(:~ 
 : Returns the names of all HTTP request attributes.
 :
 : @return value of type xs:string*
 :)
declare function request:attribute-names() as xs:string* external;

(:~ 
 : Returns the value of an attribute of the HTTP request. If the attribute does not exist, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @return value of type item()*
 :)
declare function request:attribute($name as xs:string) as item()* external;

(:~ 
 : Returns the value of an attribute of the HTTP request. If the attribute does not exist, an empty sequence or the optionally specified default value is returned instead.
 :
 : @param $name value of type xs:string
 : @param $default value of type item()*
 : @return value of type item()*
 :)
declare function request:attribute($name as xs:string, $default as item()*) as item()* external;

(:~ 
 : Binds the specified <code>$value</code> to the request attribute with the specified <code>$name</code>.
 :
 : @param $name value of type xs:string
 : @param $value value of type item()*
 :)
declare function request:set-attribute($name as xs:string, $value as item()*) as empty-sequence() external;
