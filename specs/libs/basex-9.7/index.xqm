(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions for displaying information stored in the database index structures. For functions that use the indexes to return nodes see <a href="http://docs.basex.org/wiki/Database_Module#Value_Indexes">Value Indexes</a> in the <a href="http://docs.basex.org/wiki/Database_Module">Database Module</a> and <a href="http://docs.basex.org/wiki/Full-Text_Module#ft:search">ft:search</a> in the <a href="http://docs.basex.org/wiki/Full-Text_Module">Full-Text Module</a>.
 :
 : @author BaseX Team
 : @see /wiki/Index_Module
 :)
module namespace index = "http://basex.org/modules/index";

(:~ 
 : Returns information about all facets and facet values of the database <code>$db</code> in document structure format.<br/>If <code>$type</code> is specified as <code>flat</code>, the function returns this information in a flat summarized version. The returned data is derived from the <a href="http://docs.basex.org/wiki/Indexes#Path_Index">Path Index</a>.
 :
 : @param $db value of type xs:string
 : @return value of type xs:string
 : @error db:open The addressed database does not exist or could not be opened.
 :)
declare function index:facets($db as xs:string) as xs:string external;

(:~ 
 : Returns information about all facets and facet values of the database <code>$db</code> in document structure format.<br/>If <code>$type</code> is specified as <code>flat</code>, the function returns this information in a flat summarized version. The returned data is derived from the <a href="http://docs.basex.org/wiki/Indexes#Path_Index">Path Index</a>.
 :
 : @param $db value of type xs:string
 : @param $type value of type xs:string
 : @return value of type xs:string
 : @error db:open The addressed database does not exist or could not be opened.
 :)
declare function index:facets($db as xs:string, $type as xs:string) as xs:string external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Text_Index">Text Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:texts($db as xs:string) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Text_Index">Text Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @param $prefix value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:texts($db as xs:string, $prefix as xs:string) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Text_Index">Text Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @param $start value of type xs:string
 : @param $ascending value of type xs:boolean
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:texts($db as xs:string, $start as xs:string, $ascending as xs:boolean) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Attribute_Index">Attribute Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:attributes($db as xs:string) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Attribute_Index">Attribute Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @param $prefix value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:attributes($db as xs:string, $prefix as xs:string) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Attribute_Index">Attribute Index</a> of the database <code>$db</code>, along with their number of occurrences.<br/>If <code>$prefix</code> is specified, the returned entries will be refined to the ones starting with that prefix.<br/>If <code>$start</code> and <code>$ascending</code> are specified, all nodes will be returned after or before the specified start entry.
 :
 : @param $db value of type xs:string
 : @param $start value of type xs:string
 : @param $ascending value of type xs:boolean
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:attributes($db as xs:string, $start as xs:string, $ascending as xs:boolean) as element(value)* external;

(:~ 
 : Returns all strings stored in the <a href="http://docs.basex.org/wiki/Indexes#Token_Index">Token Index</a> of the database <code>$db</code>, along with their number of occurrences.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function index:tokens($db as xs:string) as element(value)* external;

(:~ 
 : Returns all element names stored in the <a href="http://docs.basex.org/wiki/Indexes#Name_Index">Name Index</a> of the database <code>$db</code>, along with their number of occurrences.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 :)
declare function index:element-names($db as xs:string) as element(value)* external;

(:~ 
 : Returns all attribute names stored in the <a href="http://docs.basex.org/wiki/Indexes#Name_Index">Name Index</a> of the database <code>$db</code>, along with their number of occurrences.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:open The addressed database does not exist or could not be opened.
 :)
declare function index:attribute-names($db as xs:string) as element(value)* external;
