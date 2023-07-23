(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to access relational databases from XQuery using SQL. With this module, you can execute query, update and prepared statements, and the result sets are returned as sequences of XML elements representing tuples. Each element has children representing the columns returned by the SQL statement.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/SQL_Module
 :)
module namespace sql = "http://basex.org/modules/sql";

(:~ 
 : This function initializes a JDBC driver specified via <code>$class</code>. This step might be superfluous if the SQL database is not embedded.<br/>
 :
 : @param $class value of type xs:string
 : @error sql:init the specified driver is not found.
 :)
declare function sql:init($class as xs:string) as empty-sequence() external;

(:~ 
 : This function establishes a connection to a relational database and returns a connection id. The parameter <code>$url</code> is the URL of the database and shall be of the form: <code>jdbc:&lt;driver name&gt;:<a href="https://docs.basex.org//">&lt;server&gt; [/&lt;database&gt;</a>]</code>. If <code>$username</code> and <code>$password</code> are specified, they are used as credentials for connecting to the database. The <code>$options</code> parameter can be used to set connection options.
 :
 : @param $url value of type xs:string
 : @return value of type xs:anyURI
 : @error sql:error an SQL exception occurred when connecting to the database.
 :)
declare function sql:connect($url as xs:string) as xs:anyURI external;

(:~ 
 : This function establishes a connection to a relational database and returns a connection id. The parameter <code>$url</code> is the URL of the database and shall be of the form: <code>jdbc:&lt;driver name&gt;:<a href="https://docs.basex.org//">&lt;server&gt; [/&lt;database&gt;</a>]</code>. If <code>$username</code> and <code>$password</code> are specified, they are used as credentials for connecting to the database. The <code>$options</code> parameter can be used to set connection options.
 :
 : @param $url value of type xs:string
 : @param $username value of type xs:string
 : @param $password value of type xs:string
 : @return value of type xs:anyURI
 : @error sql:error an SQL exception occurred when connecting to the database.
 :)
declare function sql:connect($url as xs:string, $username as xs:string, $password as xs:string) as xs:anyURI external;

(:~ 
 : This function establishes a connection to a relational database and returns a connection id. The parameter <code>$url</code> is the URL of the database and shall be of the form: <code>jdbc:&lt;driver name&gt;:<a href="https://docs.basex.org//">&lt;server&gt; [/&lt;database&gt;</a>]</code>. If <code>$username</code> and <code>$password</code> are specified, they are used as credentials for connecting to the database. The <code>$options</code> parameter can be used to set connection options.
 :
 : @param $url value of type xs:string
 : @param $username value of type xs:string
 : @param $password value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type xs:anyURI
 : @error sql:error an SQL exception occurred when connecting to the database.
 :)
declare function sql:connect($url as xs:string, $username as xs:string, $password as xs:string, $options as map(*)?) as xs:anyURI external;

(:~ 
 : This function executes an SQL <code>$statement</code>, using the connection with the specified <code>$id</code>. The returned result depends on the kind of statement: <ul> <li>If an update statement was executed, the number of updated rows will be returned as integer.</li> <li>Otherwise, an XML representation of all results will be returned.</li> </ul> <p>With <code>$options</code>, the following parameter can be set: </p> <ul> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds.</li> </ul>
 :
 : @param $id value of type xs:anyURI
 : @param $statement value of type xs:string
 : @return value of type item()*
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 : @error sql:timeout query execution exceeded timeout.
 :)
declare function sql:execute($id as xs:anyURI, $statement as xs:string) as item()* external;

(:~ 
 : This function executes an SQL <code>$statement</code>, using the connection with the specified <code>$id</code>. The returned result depends on the kind of statement: <ul> <li>If an update statement was executed, the number of updated rows will be returned as integer.</li> <li>Otherwise, an XML representation of all results will be returned.</li> </ul> <p>With <code>$options</code>, the following parameter can be set: </p> <ul> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds.</li> </ul>
 :
 : @param $id value of type xs:anyURI
 : @param $statement value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type item()*
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 : @error sql:timeout query execution exceeded timeout.
 :)
declare function sql:execute($id as xs:anyURI, $statement as xs:string, $options as map(*)?) as item()* external;

(:~ 
 : This function executes a prepared statement with the specified <code>$id</code>. The output format is identical to <code> <a href="https://docs.basex.org/wiki/SQL_Module#sql:execute">sql:execute</a> </code>. The optional parameter <code>$params</code> is an element <code>&lt;sql:parameters/&gt;</code> representing the parameters for a prepared statement along with their types and values. The following schema shall be used:<br/> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">element</span> <span class="nv">sql:parameters</span> <span class="p">{</span> <span class="k">element</span> <span class="nv">sql:parameter</span> <span class="p">{</span> <span class="k">attribute</span> <span class="nv">type</span> <span class="p">{</span> <span class="s2">"bigdecimal"</span> <span class="o">|</span> <span class="s2">"boolean"</span> <span class="o">|</span> <span class="s2">"byte"</span> <span class="o">|</span> <span class="s2">"date"</span> <span class="o">|</span> <span class="s2">"double"</span> <span class="o">|</span> <span class="s2">"float"</span> <span class="o">|</span> <span class="s2">"int"</span> <span class="o">|</span> <span class="s2">"long"</span> <span class="o">|</span> <span class="s2">"short"</span> <span class="o">|</span> <span class="s2">"sqlxml"</span> <span class="o">|</span> <span class="s2">"string"</span> <span class="o">|</span> <span class="s2">"time"</span> <span class="o">|</span> <span class="s2">"timestamp"</span> <span class="p">},</span> <span class="k">attribute</span> <span class="nv">null</span> <span class="p">{</span> <span class="s2">"true"</span> <span class="o">|</span> <span class="s2">"false"</span> <span class="p">}?,</span> <span class="nt">text</span> <span class="p">}</span> <span class="o">+</span> <span class="p">}</span> <span class="err">?</span> </pre> </div> <p>With <code>$options</code>, the following parameter can be set: </p> <ul> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds.</li> </ul>
 :
 : @param $id value of type xs:anyURI
 : @param $params value of type element(sql:parameters)
 : @return value of type item()*
 : @error sql:attribute an attribute different from <code>type</code> and <code>null</code> is set for a <code>&lt;sql:parameter/&gt;</code> element.
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 : @error sql:parameters no parameter type specified.
 : @error sql:timeout query execution exceeded timeout.
 : @error sql:type the value of a parameter cannot be converted to the specified format.
 :)
declare function sql:execute-prepared($id as xs:anyURI, $params as element(sql:parameters)) as item()* external;

(:~ 
 : This function executes a prepared statement with the specified <code>$id</code>. The output format is identical to <code> <a href="https://docs.basex.org/wiki/SQL_Module#sql:execute">sql:execute</a> </code>. The optional parameter <code>$params</code> is an element <code>&lt;sql:parameters/&gt;</code> representing the parameters for a prepared statement along with their types and values. The following schema shall be used:<br/> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">element</span> <span class="nv">sql:parameters</span> <span class="p">{</span> <span class="k">element</span> <span class="nv">sql:parameter</span> <span class="p">{</span> <span class="k">attribute</span> <span class="nv">type</span> <span class="p">{</span> <span class="s2">"bigdecimal"</span> <span class="o">|</span> <span class="s2">"boolean"</span> <span class="o">|</span> <span class="s2">"byte"</span> <span class="o">|</span> <span class="s2">"date"</span> <span class="o">|</span> <span class="s2">"double"</span> <span class="o">|</span> <span class="s2">"float"</span> <span class="o">|</span> <span class="s2">"int"</span> <span class="o">|</span> <span class="s2">"long"</span> <span class="o">|</span> <span class="s2">"short"</span> <span class="o">|</span> <span class="s2">"sqlxml"</span> <span class="o">|</span> <span class="s2">"string"</span> <span class="o">|</span> <span class="s2">"time"</span> <span class="o">|</span> <span class="s2">"timestamp"</span> <span class="p">},</span> <span class="k">attribute</span> <span class="nv">null</span> <span class="p">{</span> <span class="s2">"true"</span> <span class="o">|</span> <span class="s2">"false"</span> <span class="p">}?,</span> <span class="nt">text</span> <span class="p">}</span> <span class="o">+</span> <span class="p">}</span> <span class="err">?</span> </pre> </div> <p>With <code>$options</code>, the following parameter can be set: </p> <ul> <li> <code>timeout</code>: query execution will be interrupted after the specified number of seconds.</li> </ul>
 :
 : @param $id value of type xs:anyURI
 : @param $params value of type element(sql:parameters)
 : @param $options value of type map(*)?
 : @return value of type item()*
 : @error sql:attribute an attribute different from <code>type</code> and <code>null</code> is set for a <code>&lt;sql:parameter/&gt;</code> element.
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 : @error sql:parameters no parameter type specified.
 : @error sql:timeout query execution exceeded timeout.
 : @error sql:type the value of a parameter cannot be converted to the specified format.
 :)
declare function sql:execute-prepared($id as xs:anyURI, $params as element(sql:parameters), $options as map(*)?) as item()* external;

(:~ 
 : This function prepares an SQL <code>$statement</code>, using the specified connection <code>$id</code>, and returns the id reference to this statement. The statement is a string with one or more '?' placeholders. If the value of a field has to be set to <code>NULL</code>, then the attribute <code>null</code> of the <code>&lt;sql:parameter/&gt;</code> element must be <code>true</code>.
 :
 : @param $id value of type xs:anyURI
 : @param $statement value of type xs:string
 : @return value of type xs:anyURI
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 :)
declare function sql:prepare($id as xs:anyURI, $statement as xs:string) as xs:anyURI external;

(:~ 
 : This function commits the changes made to a relational database, using the specified connection <code>$id</code>.
 :
 : @param $id value of type xs:anyURI
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 :)
declare function sql:commit($id as xs:anyURI) as empty-sequence() external;

(:~ 
 : This function rolls back the changes made to a relational database, using the specified connection <code>$id</code>.
 :
 : @param $id value of type xs:anyURI
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 :)
declare function sql:rollback($id as xs:anyURI) as empty-sequence() external;

(:~ 
 : This function closes a database connection with the specified <code>$id</code>.<br/>Opened connections will automatically be closed after the XQuery expression has been evaluated, but in order to save memory, it is always recommendable to close connections that are not used anymore.
 :
 : @param $id value of type xs:anyURI
 : @error sql:error an error occurred while executing SQL.
 : @error sql:id the specified connection does not exist.
 :)
declare function sql:close($id as xs:anyURI) as empty-sequence() external;
