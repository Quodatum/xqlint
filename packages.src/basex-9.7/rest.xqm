(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains helper functions for the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/RESTXQ">RESTXQ</a> API, some of which are defined in the <a href="https://web.archive.org/web/20220623231029/http://exquery.github.io/exquery/exquery-restxq-specification/restxq-1.0-specification.html">RESTXQ Draft</a>.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/RESTXQ_Module
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
 : Returns the complete URI that addresses the Resource Function. This is the result of <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/RESTXQ_Module#rest:base-uri">rest:base-uri</a> appended with the path from the path annotation of the resource function.
 :
 : @return value of type xs:anyURI
 :)
declare function rest:uri() as xs:anyURI external;

(:~ 
 : Returns a <a href="https://web.archive.org/web/20220623231029/https://www.w3.org/Submission/wadl">WADL description</a> of all available REST services.
 :
 : @return value of type element(wadl:application)
 :)
declare function rest:wadl() as element(wadl:application) external;

(:~ 
 : Initializes the RESTXQ module cache: <ul> <li>By default, the cache will be discarded, and all modules will be parsed and cached again.</li> <li>If <code>$update</code> is enabled, the background caching behavior is simulated (see <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Options#PARSERESTXQ">PARSERESTXQ</a> </code>): Only updated modules will be parsed.</li> <li>This function should be called if new RESTXQ code is deployed at runtime.</li> </ul>
 :)
declare function rest:init() as empty-sequence() external;

(:~ 
 : Initializes the RESTXQ module cache: <ul> <li>By default, the cache will be discarded, and all modules will be parsed and cached again.</li> <li>If <code>$update</code> is enabled, the background caching behavior is simulated (see <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Options#PARSERESTXQ">PARSERESTXQ</a> </code>): Only updated modules will be parsed.</li> <li>This function should be called if new RESTXQ code is deployed at runtime.</li> </ul>
 :
 : @param $update value of type xs:boolean
 :)
declare function rest:init($update as xs:boolean) as empty-sequence() external;
