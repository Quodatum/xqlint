(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for parsing and evaluating XQuery strings at runtime, and to run code in parallel.
 :
 : @author BaseX Team
 : @see /wiki/XQuery_Module
 :)
module namespace xquery = "http://basex.org/modules/xquery";

(:~ 
 : Evaluates the supplied <code>$query</code> string as XQuery expression and returns the resulting items.<br/>The evaluated query has its own query context. If a returned node is stored in a database, a main-memory copy will be returned as result, because the referenced database is closed after query execution and will not be accessible anymore.<br/>Variables and context items can be declared via <code>$bindings</code>. The specified keys must be QNames or strings: <ul> <li> If a key is a QName, it will be directly adopted as variable name. </li> <li> It a key is a string, it may be prefixed with a dollar sign. Namespace can be specified using the <a href="http://www.jclark.com/xml/xmlns.htm">Clark Notation</a>. </li> <li> If the specified string is empty, the value will be bound to the context item. </li> </ul> <p>The <code>$options</code> parameter contains evaluation options: </p> <ul> <li> <code>permission</code>: the query will be evaluated with the specified permissions (see <a href="http://docs.basex.org/wiki/User_Management">User Management</a>). </li> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds. </li> <li> <code>memory</code>: query execution will be interrupted if the specified number of megabytes will be exceeded. This check works best if only one process is running at the same time. Moreover, please note that this option enforces garbage collection, so it will take some additional time, and it requires GC to be enabled in your JVM. </li> <li> <code>base-uri</code>: set <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs by functions such as <code>fn:doc</code>. </li> <li> <code>pass</code>: passes on the original error info (line and column number, optional file uri). By default, this option is <code>false</code>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @return value of type item()*
 : @error xquery:update the query contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval($query as xs:string) as item()* external;

(:~ 
 : Evaluates the supplied <code>$query</code> string as XQuery expression and returns the resulting items.<br/>The evaluated query has its own query context. If a returned node is stored in a database, a main-memory copy will be returned as result, because the referenced database is closed after query execution and will not be accessible anymore.<br/>Variables and context items can be declared via <code>$bindings</code>. The specified keys must be QNames or strings: <ul> <li> If a key is a QName, it will be directly adopted as variable name. </li> <li> It a key is a string, it may be prefixed with a dollar sign. Namespace can be specified using the <a href="http://www.jclark.com/xml/xmlns.htm">Clark Notation</a>. </li> <li> If the specified string is empty, the value will be bound to the context item. </li> </ul> <p>The <code>$options</code> parameter contains evaluation options: </p> <ul> <li> <code>permission</code>: the query will be evaluated with the specified permissions (see <a href="http://docs.basex.org/wiki/User_Management">User Management</a>). </li> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds. </li> <li> <code>memory</code>: query execution will be interrupted if the specified number of megabytes will be exceeded. This check works best if only one process is running at the same time. Moreover, please note that this option enforces garbage collection, so it will take some additional time, and it requires GC to be enabled in your JVM. </li> <li> <code>base-uri</code>: set <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs by functions such as <code>fn:doc</code>. </li> <li> <code>pass</code>: passes on the original error info (line and column number, optional file uri). By default, this option is <code>false</code>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the query contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval($query as xs:string, $bindings as map(*)?) as item()* external;

(:~ 
 : Evaluates the supplied <code>$query</code> string as XQuery expression and returns the resulting items.<br/>The evaluated query has its own query context. If a returned node is stored in a database, a main-memory copy will be returned as result, because the referenced database is closed after query execution and will not be accessible anymore.<br/>Variables and context items can be declared via <code>$bindings</code>. The specified keys must be QNames or strings: <ul> <li> If a key is a QName, it will be directly adopted as variable name. </li> <li> It a key is a string, it may be prefixed with a dollar sign. Namespace can be specified using the <a href="http://www.jclark.com/xml/xmlns.htm">Clark Notation</a>. </li> <li> If the specified string is empty, the value will be bound to the context item. </li> </ul> <p>The <code>$options</code> parameter contains evaluation options: </p> <ul> <li> <code>permission</code>: the query will be evaluated with the specified permissions (see <a href="http://docs.basex.org/wiki/User_Management">User Management</a>). </li> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds. </li> <li> <code>memory</code>: query execution will be interrupted if the specified number of megabytes will be exceeded. This check works best if only one process is running at the same time. Moreover, please note that this option enforces garbage collection, so it will take some additional time, and it requires GC to be enabled in your JVM. </li> <li> <code>base-uri</code>: set <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs by functions such as <code>fn:doc</code>. </li> <li> <code>pass</code>: passes on the original error info (line and column number, optional file uri). By default, this option is <code>false</code>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the query contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval($query as xs:string, $bindings as map(*)?, $options as map(*)?) as item()* external;

(:~ 
 : Evaluates <code>$query</code> as updating XQuery expression at runtime.<br/>All updates will be added to the <a href="http://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a> of the main query and performed after the evaluation of the main query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $query value of type xs:string
 : @return value of type item()*
 : @error xquery:update the query contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval-update($query as xs:string) as item()* external;

(:~ 
 : Evaluates <code>$query</code> as updating XQuery expression at runtime.<br/>All updates will be added to the <a href="http://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a> of the main query and performed after the evaluation of the main query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the query contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval-update($query as xs:string, $bindings as map(*)?) as item()* external;

(:~ 
 : Evaluates <code>$query</code> as updating XQuery expression at runtime.<br/>All updates will be added to the <a href="http://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a> of the main query and performed after the evaluation of the main query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type item()
 : @error xquery:update the query contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:limit query execution exceeded memory limit.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:eval-update($query as xs:string, $bindings as map(*)?, $options as map(*)?) as item() external;

(:~ 
 : Evaluates the XQuery module located at <code>$uri</code> at runtime and returns the resulting items. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @return value of type item()*
 : @error xquery:update the expression contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke($uri as xs:string) as item()* external;

(:~ 
 : Evaluates the XQuery module located at <code>$uri</code> at runtime and returns the resulting items. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the expression contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke($uri as xs:string, $bindings as map(*)?) as item()* external;

(:~ 
 : Evaluates the XQuery module located at <code>$uri</code> at runtime and returns the resulting items. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the expression contains <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke($uri as xs:string, $bindings as map(*)?, $options as map(*)?) as item()* external;

(:~ 
 : Evaluates the updating XQuery module located at <code>$uri</code> at runtime. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @return value of type item()*
 : @error xquery:update the expression contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke-update($uri as xs:string) as item()* external;

(:~ 
 : Evaluates the updating XQuery module located at <code>$uri</code> at runtime. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the expression contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke-update($uri as xs:string, $bindings as map(*)?) as item()* external;

(:~ 
 : Evaluates the updating XQuery module located at <code>$uri</code> at runtime. A relative URI will be resolved against the static base URI of the query.<br/>The rules of the <code>$bindings</code> and <code>$options</code> parameters are the same as for <a href="/wiki/XQuery_Module#xquery:eval">xquery:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type item()*
 : @error xquery:update the expression contains no <a href="http://docs.basex.org/wiki/XQuery_Update#Updating_Expressions">updating expressions</a>.
 : @error xquery:permission insufficient permissions for evaluating the query.
 : @error xquery:timeout query execution exceeded timeout.
 : @error xquery:nested nested query evaluation is not allowed.
 :)
declare function xquery:invoke-update($uri as xs:string, $bindings as map(*)?, $options as map(*)?) as item()* external;

(:~ 
 : Parses the specified <code>$query</code> string as XQuery module and returns the resulting query plan. The <code>$options</code> parameter influences the output: <ul> <li> <code>compile</code>: additionally compiles the query after parsing it. By default, this option is <code>false</code>. </li> <li> <code>plan</code>: returns an XML representation of the internal query plan. By default, this option is <code>true</code>. The naming of the expressions in the query plan may change over time </li> <li> <code>pass</code>: passes on the original error info (line and column number, optional file uri). By default, this option is <code>false</code>. </li> <li> <code>base-uri</code>: set <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs by functions such as <code>fn:doc</code>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @return value of type item()?
 :)
declare function xquery:parse($query as xs:string) as item()? external;

(:~ 
 : Parses the specified <code>$query</code> string as XQuery module and returns the resulting query plan. The <code>$options</code> parameter influences the output: <ul> <li> <code>compile</code>: additionally compiles the query after parsing it. By default, this option is <code>false</code>. </li> <li> <code>plan</code>: returns an XML representation of the internal query plan. By default, this option is <code>true</code>. The naming of the expressions in the query plan may change over time </li> <li> <code>pass</code>: passes on the original error info (line and column number, optional file uri). By default, this option is <code>false</code>. </li> <li> <code>base-uri</code>: set <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs by functions such as <code>fn:doc</code>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type item()?
 :)
declare function xquery:parse($query as xs:string, $options as map(*)?) as item()? external;

(:~ 
 : Parses the XQuery module located at <code>$uri</code> and returns the resulting query plan. A relative URI will be resolved against the static base URI of the query. The rules for the <code>$options</code> parameter are the same as for <a href="/wiki/XQuery_Module#xquery:parse">xquery:parse</a>.
 :
 : @param $uri value of type xs:string
 : @return value of type item()?
 :)
declare function xquery:parse-uri($uri as xs:string) as item()? external;

(:~ 
 : Parses the XQuery module located at <code>$uri</code> and returns the resulting query plan. A relative URI will be resolved against the static base URI of the query. The rules for the <code>$options</code> parameter are the same as for <a href="/wiki/XQuery_Module#xquery:parse">xquery:parse</a>.
 :
 : @param $uri value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type item()?
 :)
declare function xquery:parse-uri($uri as xs:string, $options as map(*)?) as item()? external;

(:~ 
 : This function executes the supplied (non-updating) functions in parallel.
 :
 : @param $functions value of type function(*)*
 : @return value of type item()*
 : @error xquery:error an unexpected error occurred.
 :)
declare function xquery:fork-join($functions as function(*)*) as item()* external;
