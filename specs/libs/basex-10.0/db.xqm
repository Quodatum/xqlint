(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for processing databases from within XQuery. Existing databases can be opened and listed, its contents can be directly accessed, documents can be added to and removed, etc.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Database_Module
 :)
module namespace db = "http://basex.org/modules/db";

(:~ 
 : Returns general information on the database system the current values of all global and local <a href="https://docs.basex.org/wiki/Options">Options</a>. The <code><a href="https://docs.basex.org/wiki/Commands#INFO">INFO</a></code> command returns similar output.
 :
 : @param  db:system( value of type 
 : @return value of type element(system) 
 :)
declare function  db:system() as element(system)  external;

(:~ 
 : Returns the current value (string, integer, boolean, map) of a global or local <a href="https://docs.basex.org/wiki/Options">Option</a> with the specified <code>$name</code>. The <code><a href="https://docs.basex.org/wiki/Commands#SHOW_OPTIONS">SHOW OPTIONS</a></code> command returns similar output.
 :
 : @param  db:option($name value of type xs:string
 : @return value of type xs:string 
 : @error db:option the specified option is unknown.
 :)
declare function  db:option($name as xs:string) as xs:string  external;

(:~ 
 : Returns meta information on the specified <code>$database</code>. The output is similar to the <code><a href="https://docs.basex.org/wiki/Commands#INFO_DB">INFO DB</a></code> command.
 :
 : @param  db:info($database value of type xs:string
 : @return value of type element(database) 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:info($database as xs:string) as element(database)  external;

(:~ 
 : Returns the value (string, boolean, integer) of a property with the specified <code>$name</code> in the specified <code>$database</code>. The available properties are the ones returned by <code><a href="https://docs.basex.org/wiki/Database_Module#db:info">db:info</a></code>.
 :
 : @param  db:property($database value of type xs:string
 : @param $name value of type xs:string
 : @return value of type xs:anyAtomicType 
 : @error db:property the specified property is unknown.
 :)
declare function  db:property($database as xs:string, $name as xs:string) as xs:anyAtomicType  external;

(:~ 
 : Without arguments, the names of all databases are returned that are accessible to the current user. If <code>$database</code> is specified, paths to all resources of this database are returned. The results can be restricted to resources starting with the specified <code>$path</code>.
 :
 : @param  db:list( value of type 
 : @return value of type xs:string* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list() as xs:string*  external;

(:~ 
 : Without arguments, the names of all databases are returned that are accessible to the current user. If <code>$database</code> is specified, paths to all resources of this database are returned. The results can be restricted to resources starting with the specified <code>$path</code>.
 :
 : @param  db:list($database value of type xs:string
 : @return value of type xs:string* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list($database as xs:string) as xs:string*  external;

(:~ 
 : Without arguments, the names of all databases are returned that are accessible to the current user. If <code>$database</code> is specified, paths to all resources of this database are returned. The results can be restricted to resources starting with the specified <code>$path</code>.
 :
 : @param  db:list($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list($database as xs:string, $path as xs:string) as xs:string*  external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul><li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li></ul> <p>If <code>$database</code> is specified, an element for each resource in this database is returned: </p> <ul><li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li><li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li><li>The results can be restricted to resources starting with the specified <code>$path</code>.</li></ul>
 :
 : @param  db:list-details( value of type 
 : @return value of type element()* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list-details() as element()*  external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul><li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li></ul> <p>If <code>$database</code> is specified, an element for each resource in this database is returned: </p> <ul><li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li><li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li><li>The results can be restricted to resources starting with the specified <code>$path</code>.</li></ul>
 :
 : @param  db:list-details($database value of type xs:string
 : @return value of type element()* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list-details($database as xs:string) as element()*  external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul><li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li></ul> <p>If <code>$database</code> is specified, an element for each resource in this database is returned: </p> <ul><li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li><li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li><li>The results can be restricted to resources starting with the specified <code>$path</code>.</li></ul>
 :
 : @param  db:list-details($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type element()* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:list-details($database as xs:string, $path as xs:string) as element()*  external;

(:~ 
 : Returns metadata on all directories and resources of a <code>$database</code> in the specified <code>$path</code>. Two types of elements are returned: <ul><li><code>resource</code> represents a resource. The element value is the directory path; content type, modification date, raw flag (which indicates if the resource is binary or XML), and size of the resource are returned as attributes.</li><li><code>dir</code> represents a directory. The element value is the directory path; the modification date is returned in an attribute.</li></ul> <p>The directories are not stored in the internal database layout. Instead, they result implicitly from the paths of stored resources. </p>
 :
 : @param  db:dir($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type element()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified path is invalid.
 :)
declare function  db:dir($database as xs:string, $path as xs:string) as element()*  external;

(:~ 
 : Returns all documents from the specified <code>$database</code>, or only documents matching the specified <code>$path</code>.
 :
 : @param  db:get($database value of type xs:string
 : @return value of type document-node()* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:get($database as xs:string) as document-node()*  external;

(:~ 
 : Returns all documents from the specified <code>$database</code>, or only documents matching the specified <code>$path</code>.
 :
 : @param  db:get($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type document-node()* 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:get($database as xs:string, $path as xs:string) as document-node()*  external;

(:~ 
 : Returns all nodes from a <code>$database</code> with the specified PRE <code>values</code> in <a href="https://docs.basex.org/wiki/Utility_Module#util:ddo">distinct document order</a>.<br/>The <a href="https://docs.basex.org/wiki/Node_Storage#PRE_Value">PRE value</a> provides very fast access to an existing database node, but it will change whenever a node with a smaller <i>pre</i> values is added to or deleted from a database.
 :
 : @param  db:get-pre($database value of type xs:string
 : @param $values value of type xs:integer*
 : @return value of type node()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:range the specified PRE value does not exist in the database.
 :)
declare function  db:get-pre($database as xs:string, $values as xs:integer*) as node()*  external;

(:~ 
 : Returns all nodes from a <code>$database</code> with the specified ID <code>$values</code> in <a href="https://docs.basex.org/wiki/Utility_Module#util:ddo">distinct document order</a>.<br/>Each database node has a <i>persistent</i> <a href="https://docs.basex.org/wiki/Node_Storage#ID_Value">ID value</a>. Access to the node ID can be sped up by turning on the <code><a href="https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a></code> option.
 :
 : @param  db:get-id($database value of type xs:string
 : @param $values value of type xs:integer*
 : @return value of type node()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:range the specified ID value does not exist in the database.
 :)
declare function  db:get-id($database as xs:string, $values as xs:integer*) as node()*  external;

(:~ 
 : Returns a map with the paths and binary items of all resources in the specified <code>$database</code>. A single <code>xs:base64Binary</code> item is returned if a <code>$path</code> is specified. All items are <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a>, i.e., the actual data will only be retrieved if it is processed.
 :
 : @param  db:get-binary($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type item() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function  db:get-binary($database as xs:string, $path as xs:string) as item()  external;

(:~ 
 : Returns a map with the paths and values of all resources in the specified <code>$database</code>. A single value is returned if a <code>$path</code> is specified.
 :
 : @param  db:get-value($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type item()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function  db:get-value($database as xs:string, $path as xs:string) as item()*  external;

(:~ 
 : Returns the PRE values of the specified <code>$nodes</code>, which must all be <a href="https://docs.basex.org/wiki/Database_Module#Database_Nodes">database nodes</a>.<br/>The <a href="https://docs.basex.org/wiki/Node_Storage#PRE_Value">PRE value</a> provides very fast access to an existing database node, but it will change whenever a node with a smaller <i>pre</i> values is added to or deleted from a database.
 :
 : @param  db:node-pre($nodes value of type node()*
 : @return value of type xs:integer* 
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function  db:node-pre($nodes as node()*) as xs:integer*  external;

(:~ 
 : Returns the ID values of the specified <code>$nodes</code>, which must all be <a href="https://docs.basex.org/wiki/Database_Module#Database_Nodes">database nodes</a>.<br/>Each database node has a <i>persistent</i> <a href="https://docs.basex.org/wiki/Node_Storage#ID_Value">ID value</a>. Access to the node id can be sped up by turning on the <code><a href="https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a></code> option.
 :
 : @param  db:node-id($nodes value of type node()*
 : @return value of type xs:integer* 
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function  db:node-id($nodes as node()*) as xs:integer*  external;

(:~ 
 : Exports the specified <code>$database</code> to the specified file <code>$path</code>. Existing files will be overwritten.<br/>The <code>$options</code> argument contains <a href="https://docs.basex.org/wiki/Serialization">serialization parameters</a> (see <a href="https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>).
 :
 : @param  db:export($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:export($database as xs:string, $path as xs:string) as empty-sequence()  external;

(:~ 
 : Exports the specified <code>$database</code> to the specified file <code>$path</code>. Existing files will be overwritten.<br/>The <code>$options</code> argument contains <a href="https://docs.basex.org/wiki/Serialization">serialization parameters</a> (see <a href="https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>).
 :
 : @param  db:export($database value of type xs:string
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:export($database as xs:string, $path as xs:string, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Returns all text nodes of a <code>$database</code> that match one of the specified <code>$values</code> and that are stored in the text index.
 :
 : @param  db:text($database value of type xs:string
 : @param $values value of type xs:string*
 : @return value of type text()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:text($database as xs:string, $values as xs:string*) as text()*  external;

(:~ 
 : Returns all text nodes of a <code>$database</code> whose values are larger than or equal to <code>$min</code> and smaller than or equal to <code>$max</code> and that are stored in the text index.
 :
 : @param  db:text-range($database value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @return value of type text()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:text-range($database as xs:string, $min as xs:string, $max as xs:string) as text()*  external;

(:~ 
 : Returns all attribute nodes of a <code>$database</code> that match one of the specified <code>$values</code> and that are stored in the attribute index.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param  db:attribute($database value of type xs:string
 : @param $values value of type xs:string*
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:attribute($database as xs:string, $values as xs:string*) as attribute()*  external;

(:~ 
 : Returns all attribute nodes of a <code>$database</code> that match one of the specified <code>$values</code> and that are stored in the attribute index.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param  db:attribute($database value of type xs:string
 : @param $values value of type xs:string*
 : @param $name value of type xs:string
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:attribute($database as xs:string, $values as xs:string*, $name as xs:string) as attribute()*  external;

(:~ 
 : Returns all attributes of a <code>$database</code> whose values are larger than or equal to <code>$min</code> and smaller than or equal to <code>$max</code> and that are stored in the attribute index.
 :
 : @param  db:attribute-range($database value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:attribute-range($database as xs:string, $min as xs:string, $max as xs:string) as attribute()*  external;

(:~ 
 : Returns all attributes of a <code>$database</code> whose values are larger than or equal to <code>$min</code> and smaller than or equal to <code>$max</code> and that are stored in the attribute index.
 :
 : @param  db:attribute-range($database value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @param $name value of type xs:string
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:attribute-range($database as xs:string, $min as xs:string, $max as xs:string, $name as xs:string) as attribute()*  external;

(:~ 
 : Returns all attribute nodes of a <code>$database</code> the values of which contain one of the specified <code>$tokens</code>.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param  db:token($database value of type xs:string
 : @param $tokens value of type xs:string*
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:token($database as xs:string, $tokens as xs:string*) as attribute()*  external;

(:~ 
 : Returns all attribute nodes of a <code>$database</code> the values of which contain one of the specified <code>$tokens</code>.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param  db:token($database value of type xs:string
 : @param $tokens value of type xs:string*
 : @param $name value of type xs:string
 : @return value of type attribute()* 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function  db:token($database as xs:string, $tokens as xs:string*, $name as xs:string) as attribute()*  external;

(:~ 
 : Creates a new <code>$database</code> and adds the supplied <code>$inputs</code> to the specified <code>$paths</code>: <ul><li>The inputs may be strings or nodes: <ul><li>nodes may be of any type except for attributes</li><li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li><li>a path must be specified if the input is not a file or directory reference</li></ul></li><li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed.</li></ul></li><li>An existing database will be overwritten.</li><li>Database creation takes place after most other update operations (see <a href="https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li></ul>
 :
 : @param  db:create($database value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function  db:create($database as xs:string) as empty-sequence()  external;

(:~ 
 : Creates a new <code>$database</code> and adds the supplied <code>$inputs</code> to the specified <code>$paths</code>: <ul><li>The inputs may be strings or nodes: <ul><li>nodes may be of any type except for attributes</li><li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li><li>a path must be specified if the input is not a file or directory reference</li></ul></li><li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed.</li></ul></li><li>An existing database will be overwritten.</li><li>Database creation takes place after most other update operations (see <a href="https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li></ul>
 :
 : @param  db:create($database value of type xs:string
 : @param $inputs value of type item()*
 : @return value of type empty-sequence() 
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function  db:create($database as xs:string, $inputs as item()*) as empty-sequence()  external;

(:~ 
 : Creates a new <code>$database</code> and adds the supplied <code>$inputs</code> to the specified <code>$paths</code>: <ul><li>The inputs may be strings or nodes: <ul><li>nodes may be of any type except for attributes</li><li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li><li>a path must be specified if the input is not a file or directory reference</li></ul></li><li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed.</li></ul></li><li>An existing database will be overwritten.</li><li>Database creation takes place after most other update operations (see <a href="https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li></ul>
 :
 : @param  db:create($database value of type xs:string
 : @param $inputs value of type item()*
 : @param $paths value of type xs:string*
 : @return value of type empty-sequence() 
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function  db:create($database as xs:string, $inputs as item()*, $paths as xs:string*) as empty-sequence()  external;

(:~ 
 : Creates a new <code>$database</code> and adds the supplied <code>$inputs</code> to the specified <code>$paths</code>: <ul><li>The inputs may be strings or nodes: <ul><li>nodes may be of any type except for attributes</li><li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li><li>a path must be specified if the input is not a file or directory reference</li></ul></li><li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed.</li></ul></li><li>An existing database will be overwritten.</li><li>Database creation takes place after most other update operations (see <a href="https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li></ul>
 :
 : @param  db:create($database value of type xs:string
 : @param $inputs value of type item()*
 : @param $paths value of type xs:string*
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function  db:create($database as xs:string, $inputs as item()*, $paths as xs:string*, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Adds the specified <code>$input</code> to a <code>$database</code> with the specified <code>$path</code>: <ul><li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <code><a href="https://docs.basex.org/wiki/Database_Module#db:put">db:put</a></code> instead.</li><li>See <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> for more details on the input and path arguments.</li><li>The parsing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed</li></ul></li></ul>
 :
 : @param  db:add($database value of type xs:string
 : @param $input value of type item()
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:add($database as xs:string, $input as item()) as empty-sequence()  external;

(:~ 
 : Adds the specified <code>$input</code> to a <code>$database</code> with the specified <code>$path</code>: <ul><li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <code><a href="https://docs.basex.org/wiki/Database_Module#db:put">db:put</a></code> instead.</li><li>See <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> for more details on the input and path arguments.</li><li>The parsing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed</li></ul></li></ul>
 :
 : @param  db:add($database value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:add($database as xs:string, $input as item(), $path as xs:string?) as empty-sequence()  external;

(:~ 
 : Adds the specified <code>$input</code> to a <code>$database</code> with the specified <code>$path</code>: <ul><li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <code><a href="https://docs.basex.org/wiki/Database_Module#db:put">db:put</a></code> instead.</li><li>See <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> for more details on the input and path arguments.</li><li>The parsing behavior can be controlled via <code>$options</code>: <ul><li>allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li><li>parsing options will only impact string input (URIs, XML strings) because nodes have already been parsed</li></ul></li></ul>
 :
 : @param  db:add($database value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:add($database as xs:string, $input as item(), $path as xs:string?, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Replaces a resource, specified by <code>$path</code>, in a <code>$database</code> with the contents of <code>$input</code>, or adds it as a new resource: <ul><li>The parsing behavior can be controlled via <code>$options</code>: <ul><li>Allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case.</li><li>Parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li></ul></li><li>See <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> for more details on the input argument.</li></ul>
 :
 : @param  db:put($database value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:target the path points to a directory.
 :)
declare function  db:put($database as xs:string, $input as item(), $path as xs:string) as empty-sequence()  external;

(:~ 
 : Replaces a resource, specified by <code>$path</code>, in a <code>$database</code> with the contents of <code>$input</code>, or adds it as a new resource: <ul><li>The parsing behavior can be controlled via <code>$options</code>: <ul><li>Allowed options are <code><a href="https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a></code> and the <a href="https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case.</li><li>Parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li></ul></li><li>See <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> for more details on the input argument.</li></ul>
 :
 : @param  db:put($database value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:target the path points to a directory.
 :)
declare function  db:put($database as xs:string, $input as item(), $path as xs:string, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Stores a binary resource specified by <code>$input</code> in a <code>$database</code> at the specified <code>$path</code>. Existing resources are overwritten.
 :
 : @param  db:put-binary($database value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function  db:put-binary($database as xs:string, $input as item(), $path as xs:string) as empty-sequence()  external;

(:~ 
 : Stores an <code>$input</code> value in a <code>$database</code> at the specified <code>$path</code>. Existing resources are overwritten. The value can be an arbitrary sequence of atomic items, nodes, maps, and arrays.
 :
 : @param  db:put-value($database value of type xs:string
 : @param $input value of type item()*
 : @param $path value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function  db:put-value($database as xs:string, $input as item()*, $path as xs:string) as empty-sequence()  external;

(:~ 
 : Deletes resource(s), specified by <code>$path</code>, from the specified <code>$database</code>.
 :
 : @param  db:delete($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified path is invalid.
 :)
declare function  db:delete($database as xs:string, $path as xs:string) as empty-sequence()  external;

(:~ 
 : Creates a copy of <code>$database</code>, which will be called <code>$new-name</code>.
 :
 : @param  db:copy($database value of type xs:string
 : @param $new-name value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:copy($database as xs:string, $new-name as xs:string) as empty-sequence()  external;

(:~ 
 : Renames a <code>$database</code> to <code>$new-name</code>.
 :
 : @param  db:alter($database value of type xs:string
 : @param $new-name value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:alter($database as xs:string, $new-name as xs:string) as empty-sequence()  external;

(:~ 
 : Optimizes the metadata and indexes of a <code>$database</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> function: Allowed options are all <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code><a href="https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a></code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param  db:optimize($database value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:optimize($database as xs:string) as empty-sequence()  external;

(:~ 
 : Optimizes the metadata and indexes of a <code>$database</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> function: Allowed options are all <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code><a href="https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a></code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param  db:optimize($database value of type xs:string
 : @param $all value of type xs:boolean?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:optimize($database as xs:string, $all as xs:boolean?) as empty-sequence()  external;

(:~ 
 : Optimizes the metadata and indexes of a <code>$database</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <code><a href="https://docs.basex.org/wiki/Database_Module#db:create">db:create</a></code> function: Allowed options are all <a href="https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code><a href="https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a></code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param  db:optimize($database value of type xs:string
 : @param $all value of type xs:boolean?
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:optimize($database as xs:string, $all as xs:boolean?, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Moves all resources(s) of a <code>$database</code>, which are found in the supplied <code>$source</code> path, to the supplied <code>$target</code> path. The paths may point to single resources or directories. No updates will take place if a non-existing source path is supplied.
 :
 : @param  db:rename($database value of type xs:string
 : @param $source value of type xs:string
 : @param $target value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified source or target path, or one of its descendants, is invalid.
 :)
declare function  db:rename($database as xs:string, $source as xs:string, $target as xs:string) as empty-sequence()  external;

(:~ 
 : Explicitly flushes the buffers of a <code>$database</code>. This command is only useful if <code><a href="https://docs.basex.org/wiki/Options#AUTOFLUSH">AUTOFLUSH</a></code> has been set to <code>false</code>.
 :
 : @param  db:flush($database value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:flush($database as xs:string) as empty-sequence()  external;

(:~ 
 : Drops a <code>$database</code> and all connected resources.
 :
 : @param  db:drop($database value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:drop($database as xs:string) as empty-sequence()  external;

(:~ 
 : Creates a backup of a <code>$database</code>. If no name is supplied, general data will be backed up. The following <code>$options</code> are available: <ul><li>With <code>comment</code>, a comment string can be attached to the backup.</li><li>By setting <code>compress</code> to false, the backup will be created faster, but it will take more space on disk.</li></ul>
 :
 : @param  db:create-backup($database value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:create-backup($database as xs:string) as empty-sequence()  external;

(:~ 
 : Creates a backup of a <code>$database</code>. If no name is supplied, general data will be backed up. The following <code>$options</code> are available: <ul><li>With <code>comment</code>, a comment string can be attached to the backup.</li><li>By setting <code>compress</code> to false, the backup will be created faster, but it will take more space on disk.</li></ul>
 :
 : @param  db:create-backup($database value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:create-backup($database as xs:string, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Drops all backups of the database with the specified <code>$name</code>. If the name ends with a timestamp, only the specified backup file will be deleted. If no name is supplied, backups with general data are addressed.
 :
 : @param  db:drop-backup($name value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:backup No backup file found.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:drop-backup($name as xs:string) as empty-sequence()  external;

(:~ 
 : Renames all backups of the database with the specified <code>$name</code> to <code>$new-name</code>. If the name ends with a date, only the specified backup file will be renamed.
 :
 : @param  db:alter-backup($name value of type xs:string
 : @param $new-name value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:backup No backup file found.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:alter-backup($name as xs:string, $new-name as xs:string) as empty-sequence()  external;

(:~ 
 : Restores the database with the specified <code>$name</code>. The <code>$name</code> may include the timestamp of the backup file. If no name is supplied, general data will be restored. If general data is restored, it will only be available after BaseX has been restarted.
 :
 : @param  db:restore($name value of type xs:string
 : @return value of type empty-sequence() 
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:no-backup No backup found.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function  db:restore($name as xs:string) as empty-sequence()  external;

(:~ 
 : Returns an element sequence containing all available database backups with timestamp, file size and comment.<br/>If a <code>$database</code> is specified, the sequence will be restricted to the backups matching this database.
 :
 : @param  db:backups( value of type 
 : @return value of type element(backup)* 
 :)
declare function  db:backups() as element(backup)*  external;

(:~ 
 : Returns an element sequence containing all available database backups with timestamp, file size and comment.<br/>If a <code>$database</code> is specified, the sequence will be restricted to the backups matching this database.
 :
 : @param  db:backups($database value of type xs:string
 : @return value of type element(backup)* 
 :)
declare function  db:backups($database as xs:string) as element(backup)*  external;

(:~ 
 : Returns the name of the database in which the specified <a href="https://docs.basex.org/wiki/Database_Module#Database_Nodes">database node</a> <code>$node</code> is stored.
 :
 : @param  db:name($node value of type node()
 : @return value of type xs:string 
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function  db:name($node as node()) as xs:string  external;

(:~ 
 : Returns the path of the database document in which the specified <a href="https://docs.basex.org/wiki/Database_Module#Database_Nodes">database node</a> <code>$node</code> is stored.
 :
 : @param  db:path($node value of type node()
 : @return value of type xs:string 
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function  db:path($node as node()) as xs:string  external;

(:~ 
 : Checks if a <code>$database</code> exists, or a resource located at <code>$path</code> in this database.
 :
 : @param  db:exists($database value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  db:exists($database as xs:string) as xs:boolean  external;

(:~ 
 : Checks if a <code>$database</code> exists, or a resource located at <code>$path</code> in this database.
 :
 : @param  db:exists($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  db:exists($database as xs:string, $path as xs:string) as xs:boolean  external;

(:~ 
 : Returns the type (<code>xml</code>, <code>binary</code>, <code>value</code>) of a resource in a <code>$database</code> at the specified <code>$path</code>.
 :
 : @param  db:type($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:type($database as xs:string, $path as xs:string) as xs:string  external;

(:~ 
 : Retrieves the content-type of a resource in a <code>$database</code> at the specified <code>$path</code>.<br/>The file extension is used to recognize the content-type of a resource stored in the database. <code>application/xml</code> will be returned for any XML document stored in the database, regardless of its file name extension.
 :
 : @param  db:content-type($database value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string 
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function  db:content-type($database as xs:string, $path as xs:string) as xs:string  external;
