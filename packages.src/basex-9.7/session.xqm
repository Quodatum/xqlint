(:~ 
 : 
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Session_Module
 :)
module namespace session = "http://basex.org/modules/session";

(:~ 
 : Returns the session ID of a servlet request.
 :
 : @return value of type xs:string
 : @error session:not-found No session is available for the current client.
 :)
declare function session:id() as xs:string external;

(:~ 
 : Returns the creation time of a session.
 :
 : @return value of type xs:dateTime
 : @error session:not-found No session is available for the current client.
 :)
declare function session:created() as xs:dateTime external;

(:~ 
 : Returns the last access time of a session.
 :
 : @return value of type xs:dateTime
 : @error session:not-found No session is available for the current client.
 :)
declare function session:accessed() as xs:dateTime external;

(:~ 
 : Returns the names of all attributes bound to the current session.
 :
 : @return value of type xs:string*
 :)
declare function session:names() as xs:string* external;

(:~ 
 : Returns the value of a session attribute with the specified <code>$name</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param $name value of type xs:string
 : @return value of type item()*
 :)
declare function session:get($name as xs:string) as item()* external;

(:~ 
 : Returns the value of a session attribute with the specified <code>$name</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param $name value of type xs:string
 : @param $default value of type item()*
 : @return value of type item()*
 :)
declare function session:get($name as xs:string, $default as item()*) as item()* external;

(:~ 
 : Binds the specified <code>$value</code> to the session attribute with the specified <code>$name</code>.
 :
 : @param $name value of type xs:string
 : @param $value value of type item()*
 : @error session:not-found No session is available for the current client.
 :)
declare function session:set($name as xs:string, $value as item()*) as empty-sequence() external;

(:~ 
 : Deletes a session attribute with the specified <code>$name</code>.
 :
 : @param $name value of type xs:string
 :)
declare function session:delete($name as xs:string) as empty-sequence() external;

(:~ 
 : Unregisters a session and all data associated with it.
 :)
declare function session:close() as empty-sequence() external;
