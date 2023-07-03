(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for accessing specific WebSocket functions. This module is mainly useful in the context of <a href="http://docs.basex.org/wiki/WebSockets">WebSockets</a>.
 :
 : @author BaseX Team
 : @see /wiki/WebSocket_Module
 :)
module namespace ws = "http://basex.org/modules/ws";

(:~ 
 : Returns the ID of the current WebSocket.
 :
 : @return value of type xs:string
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:id() as xs:string external;

(:~ 
 : Returns the ids of all currently registered WebSocket.
 :
 : @return value of type xs:string*
 :)
declare function ws:ids() as xs:string* external;

(:~ 
 : Returns the path of the WebSocket with the specified <code>$id</code>.
 :
 : @param $id value of type xs:string
 : @return value of type xs:string
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:path($id as xs:string) as xs:string external;

(:~ 
 : Closes the connection of the WebSocket with the specified <code>$id</code>.
 :
 : @param $id value of type xs:string
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:close($id as xs:string) as empty-sequence() external;

(:~ 
 : Sends a <code>$message</code> to the clients with the specified <code>$ids</code>. Ids that cannot be assigned to clients will be ignored. The message will be handled as follows: <ul> <li> Items of type <code>xs:base64Binary</code> and <code>xs:hexBinary</code> will be transmitted as binary messages. </li> <li> Function items (maps, arrays) will be serialized as JSON and transmitted as string messages. </li> <li> All other items will be serialized with the default serialization options and transmitted as string messages. </li> </ul>
 :
 : @param $message value of type item()
 : @param $ids value of type xs:string*
 :)
declare function ws:send($message as item(), $ids as xs:string*) as empty-sequence() external;

(:~ 
 : Broadcasts a <code>$message</code> to all connected clients except to the caller. Invocations of this convenience function are equivalent to <code>ws:send($message, ws:ids()[. != ws:id()])</code>. See <a href="/wiki/WebSocket_Module#ws:send">ws:send</a> for more details on the message handling.
 :
 : @param $message value of type xs:anyAtomicType
 :)
declare function ws:broadcast($message as xs:anyAtomicType) as empty-sequence() external;

(:~ 
 : Emits a <code>$message</code> to all connected clients. Invocations of this function are equivalent to <code>ws:send($message, ws:ids())</code>. See <a href="/wiki/WebSocket_Module#ws:send">ws:send</a> for more details on the message handling.
 :
 : @param $message value of type xs:anyAtomicType
 :)
declare function ws:emit($message as xs:anyAtomicType) as empty-sequence() external;

(:~ 
 : Returns the value of an attribute with the specified <code>$name</code> from the WebSocket with the specified <code>$id</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param $id value of type xs:string
 : @param $name value of type xs:string
 : @return value of type item()*
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:get($id as xs:string, $name as xs:string) as item()* external;

(:~ 
 : Returns the value of an attribute with the specified <code>$name</code> from the WebSocket with the specified <code>$id</code>. If the attribute is unknown, an empty sequence or the optionally specified <code>$default</code> value will be returned instead.
 :
 : @param $id value of type xs:string
 : @param $name value of type xs:string
 : @param $default value of type item()*
 : @return value of type item()*
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:get($id as xs:string, $name as xs:string, $default as item()*) as item()* external;

(:~ 
 : Returns the specified <code>value</code> of the attribute with the specified <code>$name</code> from the WebSocket with the specified <code>$id</code>.
 :
 : @param $id value of type xs:string
 : @param $name value of type xs:string
 : @param $value value of type item()*
 : @error ws:not-found No WebSocket with the specified id exists.
 : @error ws:set The supplied value cannot be materialized.
 :)
declare function ws:set($id as xs:string, $name as xs:string, $value as item()*) as empty-sequence() external;

(:~ 
 : Deletes an attribute with the specified <code>$name</code> from the WebSocket with the specified <code>$id</code>.
 :
 : @param $id value of type xs:string
 : @param $name value of type xs:string
 : @error ws:not-found No WebSocket with the specified id exists.
 :)
declare function ws:delete($id as xs:string, $name as xs:string) as empty-sequence() external;
