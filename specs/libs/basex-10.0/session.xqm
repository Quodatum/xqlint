(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for accessing and modifying server-side session information. This module is mainly useful in the context of <a href="https://docs.basex.org/wiki/Web_Application">Web Applications</a>.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Session_Module
 :)
module namespace session = "http://basex.org/modules/session";

(:~ 
 : Returns the session ID of a servlet request.
 :
 : @param  session:id( value of type 
 : @return value of type xs:string 
 : @error session:not-found No session is available for the current client.
 :)
declare function  session:id() as xs:string  external;

(:~ 
 : Returns the creation time of a session.
 :
 : @param  session:created( value of type 
 : @return value of type xs:dateTime 
 : @error session:not-found No session is available for the current client.
 :)
declare function  session:created() as xs:dateTime  external;

(:~ 
 : Returns the last access time of a session.
 :
 : @param  session:accessed( value of type 
 : @return value of type xs:dateTime 
 : @error session:not-found No session is available for the current client.
 :)
declare function  session:accessed() as xs:dateTime  external;

(:~ 
 : Returns the names of all attributes bound to the current session.
 :
 : @param  session:names( value of type 
 : @return value of type xs:string* 
 :)
declare function  session:names() as xs:string*  external;

(:~ 
 : Returns the value of a session attribute with the specified <code>$name</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param  session:get($name value of type xs:string
 : @return value of type item()* 
 :)
declare function  session:get($name as xs:string) as item()*  external;

(:~ 
 : Returns the value of a session attribute with the specified <code>$name</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param  session:get($name value of type xs:string
 : @param $default value of type item()*
 : @return value of type item()* 
 :)
declare function  session:get($name as xs:string, $default as item()*) as item()*  external;

(:~ 
 : Binds the specified <code>$value</code> to the session attribute with the specified <code>$name</code>.
 :
 : @param  session:set($name value of type xs:string
 : @param $value value of type item()*
 : @return value of type empty-sequence() 
 : @error session:not-found No session is available for the current client.
 :)
declare function  session:set($name as xs:string, $value as item()*) as empty-sequence()  external;

(:~ 
 : Deletes a session attribute with the specified <code>$name</code>.
 :
 : @param  session:delete($name value of type xs:string
 : @return value of type empty-sequence() 
 :)
declare function  session:delete($name as xs:string) as empty-sequence()  external;

(:~ 
 : Unregisters a session and all data associated with it.
 :
 : @param  session:close( value of type 
 : @return value of type empty-sequence() 
 :)
declare function  session:close() as empty-sequence()  external;
