(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for creating and administering database users. The <a href="http://docs.basex.org/wiki/User_Management">User Management</a> article gives more information on database users and permissions.
 :
 : @author BaseX Team
 : @see /wiki/User_Module
 :)
module namespace user = "http://basex.org/modules/user";

(:~ 
 : Returns the name of the currently logged in user.
 :
 : @return value of type xs:string
 :)
declare function user:current() as xs:string external;

(:~ 
 : Returns the names of all registered users that are visible to the current user.
 :
 : @return value of type xs:string*
 :)
declare function user:list() as xs:string* external;

(:~ 
 : Returns an element sequence, containing all registered users that are visible to the current user.<br/>In addition to the <a href="http://docs.basex.org/wiki/Commands#SHOW_USERS">SHOW USERS</a> command, encoded password strings and database permissions will be output. A user <code>$name</code> can be specified to filter the results in advance.
 :
 : @return value of type element(user)*
 : @error user:unknown The specified user name is unknown.
 :)
declare function user:list-details() as element(user)* external;

(:~ 
 : Returns an element sequence, containing all registered users that are visible to the current user.<br/>In addition to the <a href="http://docs.basex.org/wiki/Commands#SHOW_USERS">SHOW USERS</a> command, encoded password strings and database permissions will be output. A user <code>$name</code> can be specified to filter the results in advance.
 :
 : @param $name value of type xs:string
 : @return value of type element(user)*
 : @error user:unknown The specified user name is unknown.
 :)
declare function user:list-details($name as xs:string) as element(user)* external;

(:~ 
 : Checks if a user with the specified <code>$name</code> exists.
 :
 : @param $name value of type xs:string
 : @return value of type xs:boolean
 : @error user:name The specified user name is invalid.
 :)
declare function user:exists($name as xs:string) as xs:boolean external;

(:~ 
 : Checks if the specified user and password is correct. Raises errors otherwise.
 :
 : @param $name value of type xs:string
 : @param $password value of type xs:string
 : @error user:name The specified user name is invalid.
 : @error user:unknown The specified user does not exist.
 : @error user:password The specified password is wrong.
 :)
declare function user:check($name as xs:string, $password as xs:string) as empty-sequence() external;

(:~ 
 : Returns an <code>info</code> element, which can be used to organize application-specific data. By default, the element has no contents. It can be modified via <a href="/wiki/User_Module#user:update-info">user:update-info</a>.
 :
 : @return value of type element(info)
 :)
declare function user:info() as element(info) external;

(:~ 
 : Creates a new user with the specified <code>$name</code>, <code>$password</code>, and <code>$permissions</code>. Local permissions are granted with non-empty glob <code>$patterns</code>. The default global permission (<i>none</i>) can be overwritten with an empty pattern or by omitting the last argument. Existing users will be overwritten.
 :
 : @param $name value of type xs:string
 : @param $password value of type xs:string
 : @error user:name The specified user name is invalid.
 : @error user:permission The specified permission is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:create($name as xs:string, $password as xs:string) as empty-sequence() external;

(:~ 
 : Creates a new user with the specified <code>$name</code>, <code>$password</code>, and <code>$permissions</code>. Local permissions are granted with non-empty glob <code>$patterns</code>. The default global permission (<i>none</i>) can be overwritten with an empty pattern or by omitting the last argument. Existing users will be overwritten.
 :
 : @param $name value of type xs:string
 : @param $password value of type xs:string
 : @param $permissions value of type xs:string*
 : @error user:name The specified user name is invalid.
 : @error user:permission The specified permission is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:create($name as xs:string, $password as xs:string, $permissions as xs:string*) as empty-sequence() external;

(:~ 
 : Creates a new user with the specified <code>$name</code>, <code>$password</code>, and <code>$permissions</code>. Local permissions are granted with non-empty glob <code>$patterns</code>. The default global permission (<i>none</i>) can be overwritten with an empty pattern or by omitting the last argument. Existing users will be overwritten.
 :
 : @param $name value of type xs:string
 : @param $password value of type xs:string
 : @param $permissions value of type xs:string*
 : @param $patterns value of type xs:string*
 : @error user:name The specified user name is invalid.
 : @error user:permission The specified permission is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:create($name as xs:string, $password as xs:string, $permissions as xs:string*, $patterns as xs:string*) as empty-sequence() external;

(:~ 
 : Grants global or local <code>$permissions</code> to a user with the specified <code>$name</code>. Local permissions are granted with non-empty glob <code>$patterns</code>.
 :
 : @param $name value of type xs:string
 : @param $permissions value of type xs:string*
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:pattern The specified database pattern is invalid.
 : @error user:permission The specified permission is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:local A local permission can only be 'none', 'read' or 'write'.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:grant($name as xs:string, $permissions as xs:string*) as empty-sequence() external;

(:~ 
 : Grants global or local <code>$permissions</code> to a user with the specified <code>$name</code>. Local permissions are granted with non-empty glob <code>$patterns</code>.
 :
 : @param $name value of type xs:string
 : @param $permissions value of type xs:string*
 : @param $patterns value of type xs:string*
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:pattern The specified database pattern is invalid.
 : @error user:permission The specified permission is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:local A local permission can only be 'none', 'read' or 'write'.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:grant($name as xs:string, $permissions as xs:string*, $patterns as xs:string*) as empty-sequence() external;

(:~ 
 : Drops a user with the specified <code>$name</code>. If non-empty glob <code>$patterns</code> are specified, only the database patterns will be dropped.
 :
 : @param $name value of type xs:string
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:pattern The specified database pattern is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 : @error user:conflict A user cannot be both altered and dropped.
 :)
declare function user:drop($name as xs:string) as empty-sequence() external;

(:~ 
 : Drops a user with the specified <code>$name</code>. If non-empty glob <code>$patterns</code> are specified, only the database patterns will be dropped.
 :
 : @param $name value of type xs:string
 : @param $patterns value of type xs:string*
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:pattern The specified database pattern is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 : @error user:conflict A user cannot be both altered and dropped.
 :)
declare function user:drop($name as xs:string, $patterns as xs:string*) as empty-sequence() external;

(:~ 
 : Renames a user with the specified <code>$name</code> to <code>$newname</code>.
 :
 : @param $name value of type xs:string
 : @param $newname value of type xs:string
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:admin The "admin" user cannot be modified.
 : @error user:logged-in The specified user is currently logged in.
 : @error user:update The operation can only be performed once per user or database pattern.
 : @error user:conflict A user cannot be both altered and dropped.
 :)
declare function user:alter($name as xs:string, $newname as xs:string) as empty-sequence() external;

(:~ 
 : Changes the <code>password</code> of a user with the specified <code>$name</code>.
 :
 : @param $name value of type xs:string
 : @param $password value of type xs:string
 : @error user:unknown The specified user name is unknown.
 : @error user:name The specified user name is invalid.
 : @error user:update The operation can only be performed once per user or database pattern.
 :)
declare function user:password($name as xs:string, $password as xs:string) as empty-sequence() external;

(:~ 
 : Updates the <code>info</code> element with <code>$info</code>. This node can be used to organize application-specific data (groups, enhanced user info, etc.).
 :
 : @param $info value of type element(info)
 :)
declare function user:update-info($info as element(info)) as empty-sequence() external;
