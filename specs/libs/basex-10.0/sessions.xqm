(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> can only be called from users with <i>Admin</i> permissions. It contains functions for accessing and modifying all registered server-side sessions. This module is mainly useful in the context of <a href="https://docs.basex.org/wiki/Web_Application">Web Applications</a>.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Sessions_Module
 :)
module namespace sessions = "http://basex.org/modules/sessions";

(:~ 
 : Returns the IDs of all registered sessions.
 :
 : @param  sessions:ids( value of type 
 : @return value of type xs:string* 
 :)
declare function  sessions:ids() as xs:string*  external;

(:~ 
 : Returns the creation time of the session specified by <code>$id</code>.
 :
 : @param  sessions:created($id value of type xs:string
 : @return value of type xs:dateTime 
 :)
declare function  sessions:created($id as xs:string) as xs:dateTime  external;

(:~ 
 : Returns the last access time of the session specified by <code>$id</code>.
 :
 : @param  sessions:accessed($id value of type xs:string
 : @return value of type xs:dateTime 
 :)
declare function  sessions:accessed($id as xs:string) as xs:dateTime  external;

(:~ 
 : Returns the names of all attributes bound to the session specified by <code>$id</code>.
 :
 : @param  sessions:names($id value of type xs:string
 : @return value of type xs:string* 
 :)
declare function  sessions:names($id as xs:string) as xs:string*  external;

(:~ 
 : Returns the value of an attribute with the specified <code>$name</code> from the session with the specified <code>$id</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param  sessions:get($id value of type xs:string
 : @param $name value of type xs:string
 : @return value of type item()* 
 :)
declare function  sessions:get($id as xs:string, $name as xs:string) as item()*  external;

(:~ 
 : Returns the value of an attribute with the specified <code>$name</code> from the session with the specified <code>$id</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param  sessions:get($id value of type xs:string
 : @param $name value of type xs:string
 : @param $default value of type item()*
 : @return value of type item()* 
 :)
declare function  sessions:get($id as xs:string, $name as xs:string, $default as item()*) as item()*  external;

(:~ 
 : Returns the specified <code>value</code> to the attribute with the specified <code>$name</code> from the session with the specified <code>$id</code>.
 :
 : @param  sessions:set($id value of type xs:string
 : @param $name value of type xs:string
 : @param $value value of type item()*
 : @return value of type empty-sequence() 
 :)
declare function  sessions:set($id as xs:string, $name as xs:string, $value as item()*) as empty-sequence()  external;

(:~ 
 : Deletes an attribute with the specified <code>$name</code> from the session with the specified <code>$id</code>.
 :
 : @param  sessions:delete($id value of type xs:string
 : @param $name value of type xs:string
 : @return value of type empty-sequence() 
 :)
declare function  sessions:delete($id as xs:string, $name as xs:string) as empty-sequence()  external;

(:~ 
 : Unregisters the session specified by <code>$id</code>.
 :
 : @param  sessions:close($id value of type xs:string
 : @return value of type empty-sequence() 
 :)
declare function  sessions:close($id as xs:string) as empty-sequence()  external;
