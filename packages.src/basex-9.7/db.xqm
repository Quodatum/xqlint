(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for processing databases from within XQuery. Existing databases can be opened and listed, its contents can be directly accessed, documents can be added to and removed, etc.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module
 :)
module namespace db = "http://basex.org/modules/db";

(:~ 
 : Returns general information on the database system the current values of all global and local <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options">Options</a>. The <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#INFO">INFO</a> </code> command returns similar output.
 :
 : @return value of type element(system)
 :)
declare function db:system() as element(system) external;

(:~ 
 : Returns the current value (string, integer, boolean, map) of a global or local <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options">Option</a> with the specified <code>$name</code>. The <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#GET">GET</a> </code> command works similar.
 :
 : @param $name value of type xs:string
 : @return value of type xs:string
 : @error db:option the specified option is unknown.
 :)
declare function db:option($name as xs:string) as xs:string external;

(:~ 
 : Returns meta information on the database <code>$db</code>. The output is similar to the <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#INFO_DB">INFO DB</a> </code> command.
 :
 : @param $db value of type xs:string
 : @return value of type element(database)
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:info($db as xs:string) as element(database) external;

(:~ 
 : Returns the value (string, boolean, integer) of a property with the specified <code>$name</code> in the database <code>$db</code>. The available properties are the ones returned by <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:info">db:info</a>.
 :
 : @param $db value of type xs:string
 : @param $name value of type xs:string
 : @return value of type xs:anyAtomicType
 : @error db:property the specified property is unknown.
 :)
declare function db:property($db as xs:string, $name as xs:string) as xs:anyAtomicType external;

(:~ 
 : The result of this function is dependent on the number of arguments: <ul> <li>Without arguments, the names of all databases are returned that are accessible to the current user.</li> <li>If a database <code>$db</code> is specified, all documents and raw files of the specified database are returned.</li> <li>The list of returned resources can be restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @return value of type xs:string*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list() as xs:string* external;

(:~ 
 : The result of this function is dependent on the number of arguments: <ul> <li>Without arguments, the names of all databases are returned that are accessible to the current user.</li> <li>If a database <code>$db</code> is specified, all documents and raw files of the specified database are returned.</li> <li>The list of returned resources can be restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @param $db value of type xs:string
 : @return value of type xs:string*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list($db as xs:string) as xs:string* external;

(:~ 
 : The result of this function is dependent on the number of arguments: <ul> <li>Without arguments, the names of all databases are returned that are accessible to the current user.</li> <li>If a database <code>$db</code> is specified, all documents and raw files of the specified database are returned.</li> <li>The list of returned resources can be restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list($db as xs:string, $path as xs:string) as xs:string* external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul> <li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li> </ul> <p>If a database <code>$db</code> is specified, an element for each documents and raw file of the specified database is returned: </p> <ul> <li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li> <li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li> <li>Returned databases resources can be further restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @return value of type element(database)*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list-details() as element(database)* external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul> <li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li> </ul> <p>If a database <code>$db</code> is specified, an element for each documents and raw file of the specified database is returned: </p> <ul> <li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li> <li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li> <li>Returned databases resources can be further restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @param $db value of type xs:string
 : @return value of type element(resource)*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list-details($db as xs:string) as element(resource)* external;

(:~ 
 : Without arguments, an element is returned for each database that is accessible to the current user: <ul> <li>An element has a value, which is the name of the database, and several attributes, which contain the number of stored resources, the modification date, the database size on disk (measured in bytes), and a path to the original database input.</li> </ul> <p>If a database <code>$db</code> is specified, an element for each documents and raw file of the specified database is returned: </p> <ul> <li>An element has a value, which is the name of the resource, and several attributes, which contain the content type, the modification date, the raw flag (which indicates if the resource is binary or XML), and the size of a resource.</li> <li>The value of the size attribute depends on the resource type: for documents, it represents the number of nodes; for binary data, it represents the file size (measured in bytes).</li> <li>Returned databases resources can be further restricted by the <code>$path</code> argument.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type element(resource)*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:list-details($db as xs:string, $path as xs:string) as element(resource)* external;

(:~ 
 : Returns meta data on all directories and resources of the database <code>$db</code> in the specified directory <code>$path</code>. Two types of elements are returned: <ul> <li> <code>resource</code> represents a resource. The element value is the directory path; content type, modification date, raw flag (which indicates if the resource is binary or XML), and size of the resource are returned as attributes.</li> <li> <code>dir</code> represents a directory. The element value is the directory path; the modification date is returned as attribute.</li> </ul> <p>Please note that directories are not stored in BaseX. Instead, they result implicitly from the paths of stored resources. </p>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type element()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified path is invalid.
 :)
declare function db:dir($db as xs:string, $path as xs:string) as element()* external;

(:~ 
 : Opens the database <code>$db</code> and returns all document nodes.<br/>The document nodes to be returned can be filtered with the <code>$path</code> argument.
 :
 : @param $db value of type xs:string
 : @return value of type document-node()*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:open($db as xs:string) as document-node()* external;

(:~ 
 : Opens the database <code>$db</code> and returns all document nodes.<br/>The document nodes to be returned can be filtered with the <code>$path</code> argument.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type document-node()*
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:open($db as xs:string, $path as xs:string) as document-node()* external;

(:~ 
 : Opens the database <code>$db</code> and returns all distinct nodes with the pre values <code>$pres</code> in document order.<br/>The <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Node_Storage#PRE_Value">PRE value</a> provides very fast access to an existing database node, but it will change whenever a node with a smaller <i>pre</i> values is added to or deleted from a database.
 :
 : @param $db value of type xs:string
 : @param $pres value of type xs:integer*
 : @return value of type node()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:range the specified pre value does not exist in the database.
 :)
declare function db:open-pre($db as xs:string, $pres as xs:integer*) as node()* external;

(:~ 
 : Opens the database <code>$db</code> and returns all distinct nodes with the specified <code>$ids</code> in document order.<br/>Each database node has a <i>persistent</i> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Node_Storage#ID_Value">ID value</a>. Access to the node id can be sped up by turning on the <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a> </code> option.
 :
 : @param $db value of type xs:string
 : @param $ids value of type xs:integer*
 : @return value of type node()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:range the specified id value does not exist in the database.
 :)
declare function db:open-id($db as xs:string, $ids as xs:integer*) as node()* external;

(:~ 
 : Returns the <i>pre</i> values of the specified <code>$nodes</code>, which must all be <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#Database_Nodes">database nodes</a>.<br/>The <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Node_Storage#PRE_Value">PRE value</a> provides very fast access to an existing database node, but it will change whenever a node with a smaller <i>pre</i> values is added to or deleted from a database.
 :
 : @param $nodes value of type node()*
 : @return value of type xs:integer*
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function db:node-pre($nodes as node()*) as xs:integer* external;

(:~ 
 : Returns the <i>id</i> values of the specified <code>$nodes</code>, which must all be <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#Database_Nodes">database nodes</a>.<br/>Each database node has a <i>persistent</i> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Node_Storage#ID_Value">ID value</a>. Access to the node id can be sped up by turning on the <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a> </code> option.
 :
 : @param $nodes value of type node()*
 : @return value of type xs:integer*
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function db:node-id($nodes as node()*) as xs:integer* external;

(:~ 
 : Returns a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Binary_Data">binary resource</a> addressed by the database <code>$db</code> and <code>$path</code> as <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Streaming_Module">streamable</a> <code>xs:base64Binary</code>.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:base64Binary
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function db:retrieve($db as xs:string, $path as xs:string) as xs:base64Binary external;

(:~ 
 : Exports the specified database <code>$db</code> to the specified file <code>$path</code>. Existing files will be overwritten.<br/>The <code>$params</code> argument contains <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Serialization">serialization parameters</a>. As with <a href="https://web.archive.org/web/20220623231030/https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>, the parameters can be specified<br/> <ul> <li>either as children of an <code>&lt;output:serialization-parameters/&gt;</code> element:</li> </ul> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;output:serialization-parameters&gt;</span> <span class="nt">&lt;output:method</span> <span class="na">value=</span> <span class="s">'xml'</span> <span class="nt">/&gt;</span> <span class="nt">&lt;output:cdata-section-elements</span> <span class="na">value=</span> <span class="s">"div"</span> <span class="nt">/&gt;</span> ... <span class="nt">&lt;/output:serialization-parameters&gt;</span> </pre> </div> <ul> <li>or as map, which contains all key/value pairs:</li> </ul> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">map</span> <span class="p">{</span> <span class="s2">"method"</span> <span class="p">:</span> <span class="s2">"xml"</span> <span class="p">,</span> <span class="s2">"cdata-section-elements"</span> <span class="p">:</span> <span class="s2">"div"</span> <span class="p">,</span> <span class="p">..</span> <span class="o">.</span> <span class="p">}</span> </pre> </div>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:export($db as xs:string, $path as xs:string) as empty-sequence() external;

(:~ 
 : Exports the specified database <code>$db</code> to the specified file <code>$path</code>. Existing files will be overwritten.<br/>The <code>$params</code> argument contains <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Serialization">serialization parameters</a>. As with <a href="https://web.archive.org/web/20220623231030/https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>, the parameters can be specified<br/> <ul> <li>either as children of an <code>&lt;output:serialization-parameters/&gt;</code> element:</li> </ul> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;output:serialization-parameters&gt;</span> <span class="nt">&lt;output:method</span> <span class="na">value=</span> <span class="s">'xml'</span> <span class="nt">/&gt;</span> <span class="nt">&lt;output:cdata-section-elements</span> <span class="na">value=</span> <span class="s">"div"</span> <span class="nt">/&gt;</span> ... <span class="nt">&lt;/output:serialization-parameters&gt;</span> </pre> </div> <ul> <li>or as map, which contains all key/value pairs:</li> </ul> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">map</span> <span class="p">{</span> <span class="s2">"method"</span> <span class="p">:</span> <span class="s2">"xml"</span> <span class="p">,</span> <span class="s2">"cdata-section-elements"</span> <span class="p">:</span> <span class="s2">"div"</span> <span class="p">,</span> <span class="p">..</span> <span class="o">.</span> <span class="p">}</span> </pre> </div>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @param $params value of type item()
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:export($db as xs:string, $path as xs:string, $params as item()) as empty-sequence() external;

(:~ 
 : Returns all text nodes of the database <code>$db</code> that have one of the specified <code>$strings</code> as values and that are stored in the text index.
 :
 : @param $db value of type xs:string
 : @param $strings value of type xs:string*
 : @return value of type text()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:text($db as xs:string, $strings as xs:string*) as text()* external;

(:~ 
 : Returns all text nodes of the database <code>$db</code> whose values are between <code>$min</code> and <code>$max</code> and that are stored in the text index.
 :
 : @param $db value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @return value of type text()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:text-range($db as xs:string, $min as xs:string, $max as xs:string) as text()* external;

(:~ 
 : Returns all attribute nodes of the database <code>$db</code> that have one of the specified <code>$strings</code> as values and that are stored in the attribute index.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param $db value of type xs:string
 : @param $strings value of type xs:string*
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:attribute($db as xs:string, $strings as xs:string*) as attribute()* external;

(:~ 
 : Returns all attribute nodes of the database <code>$db</code> that have one of the specified <code>$strings</code> as values and that are stored in the attribute index.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param $db value of type xs:string
 : @param $strings value of type xs:string*
 : @param $name value of type xs:string
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:attribute($db as xs:string, $strings as xs:string*, $name as xs:string) as attribute()* external;

(:~ 
 : Returns all attributes of the database <code>$db</code>, the string values of which are larger than or equal to <code>$min</code> and smaller than or equal to <code>$max</code> and that are stored in the attribute index.
 :
 : @param $db value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:attribute-range($db as xs:string, $min as xs:string, $max as xs:string) as attribute()* external;

(:~ 
 : Returns all attributes of the database <code>$db</code>, the string values of which are larger than or equal to <code>$min</code> and smaller than or equal to <code>$max</code> and that are stored in the attribute index.
 :
 : @param $db value of type xs:string
 : @param $min value of type xs:string
 : @param $max value of type xs:string
 : @param $name value of type xs:string
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:attribute-range($db as xs:string, $min as xs:string, $max as xs:string, $name as xs:string) as attribute()* external;

(:~ 
 : Returns all attribute nodes of the database <code>$db</code> the values of which contain one of the specified <code>$tokens</code>.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param $db value of type xs:string
 : @param $tokens value of type xs:string*
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:token($db as xs:string, $tokens as xs:string*) as attribute()* external;

(:~ 
 : Returns all attribute nodes of the database <code>$db</code> the values of which contain one of the specified <code>$tokens</code>.<br/>If <code>$name</code> is specified, the resulting attribute nodes are filtered by their attribute name.
 :
 : @param $db value of type xs:string
 : @param $tokens value of type xs:string*
 : @param $name value of type xs:string
 : @return value of type attribute()*
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 :)
declare function db:token($db as xs:string, $tokens as xs:string*, $name as xs:string) as attribute()* external;

(:~ 
 : Creates a new database with name <code>$db</code> and adds initial documents specified via <code>$inputs</code> to the specified <code>$paths</code>: <ul> <li> <code>$inputs</code> may be strings or nodes: <ul> <li>nodes may be of any type except for attributes</li> <li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li> <li>a path must be specified if the input is not a file or directory reference</li> </ul> </li> <li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li> </ul> </li> <li>An existing database will be overwritten.</li> <li>Database creation takes place after most other update operations (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li> </ul>
 :
 : @param $db value of type xs:string
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function db:create($db as xs:string) as empty-sequence() external;

(:~ 
 : Creates a new database with name <code>$db</code> and adds initial documents specified via <code>$inputs</code> to the specified <code>$paths</code>: <ul> <li> <code>$inputs</code> may be strings or nodes: <ul> <li>nodes may be of any type except for attributes</li> <li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li> <li>a path must be specified if the input is not a file or directory reference</li> </ul> </li> <li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li> </ul> </li> <li>An existing database will be overwritten.</li> <li>Database creation takes place after most other update operations (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $inputs value of type item()*
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function db:create($db as xs:string, $inputs as item()*) as empty-sequence() external;

(:~ 
 : Creates a new database with name <code>$db</code> and adds initial documents specified via <code>$inputs</code> to the specified <code>$paths</code>: <ul> <li> <code>$inputs</code> may be strings or nodes: <ul> <li>nodes may be of any type except for attributes</li> <li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li> <li>a path must be specified if the input is not a file or directory reference</li> </ul> </li> <li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li> </ul> </li> <li>An existing database will be overwritten.</li> <li>Database creation takes place after most other update operations (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $inputs value of type item()*
 : @param $paths value of type xs:string*
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function db:create($db as xs:string, $inputs as item()*, $paths as xs:string*) as empty-sequence() external;

(:~ 
 : Creates a new database with name <code>$db</code> and adds initial documents specified via <code>$inputs</code> to the specified <code>$paths</code>: <ul> <li> <code>$inputs</code> may be strings or nodes: <ul> <li>nodes may be of any type except for attributes</li> <li>strings can be a URI pointing to a file/directory or an XML string (which is detected by the leading <code>&lt;</code> character)</li> <li>a path must be specified if the input is not a file or directory reference</li> </ul> </li> <li>The parsing and indexing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text_Indexing">full-text indexing</a>, <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed.</li> </ul> </li> <li>An existing database will be overwritten.</li> <li>Database creation takes place after most other update operations (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/XQuery_Update#Pending_Update_List">Pending Update List</a>). As a consequence, a newly created database cannot be addressed in the same query.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $inputs value of type item()*
 : @param $paths value of type xs:string*
 : @param $options value of type map(*)?
 : @error db:lock a database is opened by another process.
 : @error db:name the specified name is not a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Commands#Valid_Names">valid database name</a>.
 : @error db:conflict the same database was addressed more than once.
 : @error db:args the number of specified inputs and paths differs.
 :)
declare function db:create($db as xs:string, $inputs as item()*, $paths as xs:string*, $options as map(*)?) as empty-sequence() external;

(:~ 
 : Drops the database <code>$db</code> and all connected resources.
 :
 : @param $db value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:drop($db as xs:string) as empty-sequence() external;

(:~ 
 : Adds documents specified by <code>$input</code> to the database <code>$db</code> with the specified <code>$path</code>: <ul> <li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:replace">db:replace</a> instead.</li> <li>See <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> for more details on the input and path arguments.</li> <li>The parsing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed</li> </ul> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $input value of type item()
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:add($db as xs:string, $input as item()) as empty-sequence() external;

(:~ 
 : Adds documents specified by <code>$input</code> to the database <code>$db</code> with the specified <code>$path</code>: <ul> <li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:replace">db:replace</a> instead.</li> <li>See <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> for more details on the input and path arguments.</li> <li>The parsing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed</li> </ul> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string?
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:add($db as xs:string, $input as item(), $path as xs:string?) as empty-sequence() external;

(:~ 
 : Adds documents specified by <code>$input</code> to the database <code>$db</code> with the specified <code>$path</code>: <ul> <li>A document with the same path may occur more than once in a database. If you want to enforce single instances, use <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:replace">db:replace</a> instead.</li> <li>See <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> for more details on the input and path arguments.</li> <li>The parsing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed</li> </ul> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $input value of type item()
 : @param $path value of type xs:string?
 : @param $options value of type map(*)?
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:add($db as xs:string, $input as item(), $path as xs:string?, $options as map(*)?) as empty-sequence() external;

(:~ 
 : Deletes resource(s), specified by <code>$path</code>, from the database <code>$db</code>.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified path is invalid.
 :)
declare function db:delete($db as xs:string, $path as xs:string) as empty-sequence() external;

(:~ 
 : Creates a copy of the database <code>$db</code>, which will be called <code>$name</code>.
 :
 : @param $db value of type xs:string
 : @param $name value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:copy($db as xs:string, $name as xs:string) as empty-sequence() external;

(:~ 
 : Renames the database <code>$db</code> to <code>$name</code>.
 :
 : @param $db value of type xs:string
 : @param $name value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:alter($db as xs:string, $name as xs:string) as empty-sequence() external;

(:~ 
 : Optimizes the meta data and indexes of the database <code>$db</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> function: Allowed options are all <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a> </code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param $db value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:optimize($db as xs:string) as empty-sequence() external;

(:~ 
 : Optimizes the meta data and indexes of the database <code>$db</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> function: Allowed options are all <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a> </code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param $db value of type xs:string
 : @param $all value of type xs:boolean
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:optimize($db as xs:string, $all as xs:boolean) as empty-sequence() external;

(:~ 
 : Optimizes the meta data and indexes of the database <code>$db</code>.<br/>If <code>$all</code> is <code>true</code>, the complete database will be rebuilt.<br/>The <code>$options</code> argument can be used to control indexing. The syntax is identical to the <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> function: Allowed options are all <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Indexing">indexing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Full-Text">full-text</a> options. <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#UPDINDEX">UPDINDEX</a> </code> is only supported if <code>$all</code> is <code>true</code>.
 :
 : @param $db value of type xs:string
 : @param $all value of type xs:boolean
 : @param $options value of type map(*)?
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:optimize($db as xs:string, $all as xs:boolean, $options as map(*)?) as empty-sequence() external;

(:~ 
 : Moves all resources(s) of database <code>$db</code>, which are found in the supplied <code>$source</code> path, to the supplied <code>$target</code> path. The paths may point to single resources or directories. No updates will take place if a non-existing source path is supplied.
 :
 : @param $db value of type xs:string
 : @param $source value of type xs:string
 : @param $target value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:path the specified source or target path, or one of its descendants, is invalid.
 :)
declare function db:rename($db as xs:string, $source as xs:string, $target as xs:string) as empty-sequence() external;

(:~ 
 : Replaces a resource, specified by <code>$path</code>, in the database <code>$db</code> with the contents of <code>$input</code>, or adds it as a new resource: <ul> <li>See <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> for more details on the input argument.</li> <li>The parsing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed</li> </ul> </li> <li>For historical reasons, the order of the 2nd and 3rd argument is different to <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:add">db:add</a> and <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @param $input value of type item()
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:target the path points to a directory.
 :)
declare function db:replace($db as xs:string, $path as xs:string, $input as item()) as empty-sequence() external;

(:~ 
 : Replaces a resource, specified by <code>$path</code>, in the database <code>$db</code> with the contents of <code>$input</code>, or adds it as a new resource: <ul> <li>See <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> for more details on the input argument.</li> <li>The parsing behavior can be controlled via <code>$options</code>: <ul> <li>allowed options are <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#ADDCACHE">ADDCACHE</a> </code> and the <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#Parsing">parsing</a> and <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#XML_Parsing">XML parsing</a> options, all in lower case</li> <li>parsing options will only impact string input (URIs, XML strings), because nodes have already been parsed</li> </ul> </li> <li>For historical reasons, the order of the 2nd and 3rd argument is different to <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:add">db:add</a> and <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#db:create">db:create</a> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @param $input value of type item()
 : @param $options value of type map(*)?
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:target the path points to a directory.
 :)
declare function db:replace($db as xs:string, $path as xs:string, $input as item(), $options as map(*)?) as empty-sequence() external;

(:~ 
 : Replaces a binary resource specified by <code>$input</code> in the database <code>$db</code> and the location specified by <code>$path</code>, or adds it as new resource.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @param $input value of type item()
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:mainmem the database is not <i>persistent</i> (stored on disk).
 :)
declare function db:store($db as xs:string, $path as xs:string, $input as item()) as empty-sequence() external;

(:~ 
 : Explicitly flushes the buffers of the database <code>$db</code>. This command is only useful if <code> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Options#AUTOFLUSH">AUTOFLUSH</a> </code> has been set to <code>false</code>.
 :
 : @param $db value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:flush($db as xs:string) as empty-sequence() external;

(:~ 
 : Creates a backup of the database <code>$db</code>. If no name is supplied, general data will be backed up. The following <code>$options</code> are available: <ul> <li>With <code>comment</code>, a comment string can be attached to the backup.</li> <li>By setting <code>compress</code> to false, the backup will be created faster, but it will take more space on disk.</li> </ul>
 :
 : @param $db value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:create-backup($db as xs:string) as empty-sequence() external;

(:~ 
 : Creates a backup of the database <code>$db</code>. If no name is supplied, general data will be backed up. The following <code>$options</code> are available: <ul> <li>With <code>comment</code>, a comment string can be attached to the backup.</li> <li>By setting <code>compress</code> to false, the backup will be created faster, but it will take more space on disk.</li> </ul>
 :
 : @param $db value of type xs:string
 : @param $options value of type map(*)
 : @error db:open the addressed database does not exist or could not be opened.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:create-backup($db as xs:string, $options as map(*)) as empty-sequence() external;

(:~ 
 : Drops all backups of the database with the specified <code>$name</code>. If the name ends with a timestamp, only the specified backup file will be deleted. If no name is supplied, backups with general data are addressed.
 :
 : @param $name value of type xs:string
 : @error db:backup No backup file found.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:drop-backup($name as xs:string) as empty-sequence() external;

(:~ 
 : Renames all backups of the database with the specified <code>$name</code> to <code>$new-name</code>. If the name ends with a date, only the specified backup file will be renamed.
 :
 : @param $name value of type xs:string
 : @param $new-name value of type xs:string
 : @error db:backup No backup file found.
 : @error db:name invalid database name.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:alter-backup($name as xs:string, $new-name as xs:string) as empty-sequence() external;

(:~ 
 : Restores the database with the specified <code>$name</code>. The <code>$name</code> may include the timestamp of the backup file. If no name is supplied, general data will be restored. If general data is restored, it will only be available after BaseX has been restarted.
 :
 : @param $name value of type xs:string
 : @error db:lock a database is opened by another process.
 : @error db:name invalid database name.
 : @error db:no-backup No backup found.
 : @error db:conflict the same database was addressed more than once.
 :)
declare function db:restore($name as xs:string) as empty-sequence() external;

(:~ 
 : Returns an element sequence containing all available database backups with timestamp, file size and comment.<br/>If a database <code>$db</code> is specified, the sequence will be restricted to the backups matching this database.
 :
 : @return value of type element(backup)*
 :)
declare function db:backups() as element(backup)* external;

(:~ 
 : Returns an element sequence containing all available database backups with timestamp, file size and comment.<br/>If a database <code>$db</code> is specified, the sequence will be restricted to the backups matching this database.
 :
 : @param $db value of type xs:string
 : @return value of type element(backup)*
 :)
declare function db:backups($db as xs:string) as element(backup)* external;

(:~ 
 : Returns the name of the database in which the specified <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#Database_Nodes">database node</a> <code>$node</code> is stored.
 :
 : @param $node value of type node()
 : @return value of type xs:string
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function db:name($node as node()) as xs:string external;

(:~ 
 : Returns the path of the database document in which the specified <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Database_Module#Database_Nodes">database node</a> <code>$node</code> is stored.
 :
 : @param $node value of type node()
 : @return value of type xs:string
 : @error db:node <code>$nodes</code> contains a node which is not stored in a database.
 :)
declare function db:path($node as node()) as xs:string external;

(:~ 
 : Checks if the database <code>$db</code> or the resource specified by <code>$path</code> exists. <code>false</code> is returned if a database directory has been addressed.
 :
 : @param $db value of type xs:string
 : @return value of type xs:boolean
 :)
declare function db:exists($db as xs:string) as xs:boolean external;

(:~ 
 : Checks if the database <code>$db</code> or the resource specified by <code>$path</code> exists. <code>false</code> is returned if a database directory has been addressed.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:boolean
 :)
declare function db:exists($db as xs:string, $path as xs:string) as xs:boolean external;

(:~ 
 : Checks if the specified resource in the database <code>$db</code> and the path <code>$path</code> exists, and if it is a <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Binary_Data">binary resource</a>.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:boolean
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:is-raw($db as xs:string, $path as xs:string) as xs:boolean external;

(:~ 
 : Checks if the specified resource in the database <code>$db</code> and the path <code>$path</code> exists, and if it is an XML document.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:boolean
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:is-xml($db as xs:string, $path as xs:string) as xs:boolean external;

(:~ 
 : Retrieves the content type of a resource in the database <code>$db</code> and the path <code>$path</code>.<br/>The file extension is used to recognize the content-type of a resource stored in the database. Content-type <code>application/xml</code> will be returned for any XML document stored in the database, regardless of its file name extension.
 :
 : @param $db value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string
 : @error db:open the addressed database does not exist or could not be opened.
 :)
declare function db:content-type($db as xs:string, $path as xs:string) as xs:string external;
