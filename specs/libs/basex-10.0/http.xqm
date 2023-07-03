(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains a single function to send HTTP requests and handle HTTP responses. The function <code>send-request</code> is based on the <a href="http://expath.org/spec/http-client">EXPath HTTP Client Module</a>. It gives full control over the available request and response parameters. For simple GET requests, the <a href="https://docs.basex.org/wiki/Fetch_Module">Fetch Module</a> may be sufficient.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/HTTP_Client_Module
 :)
module namespace http = "http://expath.org/ns/http-client";
declare namespace experr = "http://expath.org/ns/error";

(:~ 
 : Sends an HTTP request and interprets the corresponding response: <ul><li><code>$request</code> contains the parameters of the HTTP request such as HTTP method and headers.</li><li>In addition to this it can also contain the URI to which the request will be sent and the body of the HTTP method.</li><li>If the URI is not given with the parameter <code>$href</code>, its value in <code>$request</code> is used instead.</li><li>The request body can also be supplied via the <code>$bodies</code> parameter.</li><li>Certificate verification can be globally disabled via the <code><a href="https://docs.basex.org/wiki/Options#IGNORECERT">IGNORECERT</a></code> option.</li></ul> <p>Notes: </p> <ul><li>Both basic and digest authentication is supported.</li><li>While the contents of the request can be supplied as child of the <code>http:body</code> element, it is faster and safer to pass them on via the third argument.</li><li>For further information, please check out the <a href="http://expath.org/spec/http-client">EXPath</a> specification.</li></ul>
 :
 : @param  http:send-request($request value of type element(http:request)?
 : @return value of type item()+ 
 : @error experr:HC0001 an HTTP error occurred.
 : @error experr:HC0002 error parsing the entity content as XML or HTML.
 : @error experr:HC0003 with a multipart response, the override-media-type must be either a multipart media type or application/octet-stream.
 : @error experr:HC0004 the src attribute on the body element is mutually exclusive with all other attribute (except the media-type).
 : @error experr:HC0005 the request element is not valid.
 : @error experr:HC0006 a timeout occurred waiting for the response.
 :)
declare function  http:send-request($request as element(http:request)?) as item()+  external;

(:~ 
 : Sends an HTTP request and interprets the corresponding response: <ul><li><code>$request</code> contains the parameters of the HTTP request such as HTTP method and headers.</li><li>In addition to this it can also contain the URI to which the request will be sent and the body of the HTTP method.</li><li>If the URI is not given with the parameter <code>$href</code>, its value in <code>$request</code> is used instead.</li><li>The request body can also be supplied via the <code>$bodies</code> parameter.</li><li>Certificate verification can be globally disabled via the <code><a href="https://docs.basex.org/wiki/Options#IGNORECERT">IGNORECERT</a></code> option.</li></ul> <p>Notes: </p> <ul><li>Both basic and digest authentication is supported.</li><li>While the contents of the request can be supplied as child of the <code>http:body</code> element, it is faster and safer to pass them on via the third argument.</li><li>For further information, please check out the <a href="http://expath.org/spec/http-client">EXPath</a> specification.</li></ul>
 :
 : @param  http:send-request($request value of type element(http:request)?
 : @param $href value of type xs:string?
 : @return value of type item()+ 
 : @error experr:HC0001 an HTTP error occurred.
 : @error experr:HC0002 error parsing the entity content as XML or HTML.
 : @error experr:HC0003 with a multipart response, the override-media-type must be either a multipart media type or application/octet-stream.
 : @error experr:HC0004 the src attribute on the body element is mutually exclusive with all other attribute (except the media-type).
 : @error experr:HC0005 the request element is not valid.
 : @error experr:HC0006 a timeout occurred waiting for the response.
 :)
declare function  http:send-request($request as element(http:request)?, $href as xs:string?) as item()+  external;

(:~ 
 : Sends an HTTP request and interprets the corresponding response: <ul><li><code>$request</code> contains the parameters of the HTTP request such as HTTP method and headers.</li><li>In addition to this it can also contain the URI to which the request will be sent and the body of the HTTP method.</li><li>If the URI is not given with the parameter <code>$href</code>, its value in <code>$request</code> is used instead.</li><li>The request body can also be supplied via the <code>$bodies</code> parameter.</li><li>Certificate verification can be globally disabled via the <code><a href="https://docs.basex.org/wiki/Options#IGNORECERT">IGNORECERT</a></code> option.</li></ul> <p>Notes: </p> <ul><li>Both basic and digest authentication is supported.</li><li>While the contents of the request can be supplied as child of the <code>http:body</code> element, it is faster and safer to pass them on via the third argument.</li><li>For further information, please check out the <a href="http://expath.org/spec/http-client">EXPath</a> specification.</li></ul>
 :
 : @param  http:send-request($request value of type element(http:request)?
 : @param $href value of type xs:string?
 : @param $bodies value of type item()*
 : @return value of type item()+ 
 : @error experr:HC0001 an HTTP error occurred.
 : @error experr:HC0002 error parsing the entity content as XML or HTML.
 : @error experr:HC0003 with a multipart response, the override-media-type must be either a multipart media type or application/octet-stream.
 : @error experr:HC0004 the src attribute on the body element is mutually exclusive with all other attribute (except the media-type).
 : @error experr:HC0005 the request element is not valid.
 : @error experr:HC0006 a timeout occurred waiting for the response.
 :)
declare function  http:send-request($request as element(http:request)?, $href as xs:string?, $bodies as item()*) as item()+  external;
