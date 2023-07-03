(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains helper functions for the <a href="http://docs.basex.org/wiki/RESTXQ">RESTXQ</a> API, some of which are defined in the <a href="http://exquery.github.io/exquery/exquery-restxq-specification/restxq-1.0-specification.html">RESTXQ Draft</a>.
 :
 : @author BaseX Team
 : @see /wiki/RESTXQ_Module
 :)
module namespace rest = "http://exquery.org/ns/restxq";
declare namespace wadl = "http://wadl.dev.java.net/2009/02";

(:~ 
 : Returns the implementation-defined base URI of the resource function.
 :
 : @return value of type xs:anyURI
 :)
declare function rest:base-uri() as xs:anyURI external;

(:~ 
 : Returns the complete URI that addresses the Resource Function. This is the result of <a href="/wiki/RESTXQ_Module#rest:base-uri">rest:base-uri</a> appended with the path from the path annotation of the resource function.
 :
 : @return value of type xs:anyURI
 :)
declare function rest:uri() as xs:anyURI external;

(:~ 
 : Returns a <a href="http://www.w3.org/Submission/wadl">WADL description</a> of all available REST services.
 :
 : @return value of type element(wadl:application)
 :)
declare function rest:wadl() as element(wadl:application) external;

(:~ 
 : Initializes the RESTXQ module cache. This function should be called after RESTXQ modules have been replaced while the web server is running, and if <code> <a href="http://docs.basex.org/wiki/Options#PARSERESTXQ">PARSERESTXQ</a> </code> is not set to <code>0</code>.
 :)
declare function rest:init() as empty-sequence() external;
