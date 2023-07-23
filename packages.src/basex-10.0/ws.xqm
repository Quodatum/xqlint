(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for accessing specific WebSocket functions. This module is mainly useful in the context of <a href="https://docs.basex.org/wiki/WebSockets">WebSockets</a>.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/WebSocket_Module
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
 : Returns the ids of all currently registered WebSockets.
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
 : Sends a <code>$message</code> to the clients with the specified <code>$ids</code>. Ids that cannot be assigned to clients will be ignored. The message will be handled as follows: <ul> <li>Items of type <code>xs:base64Binary</code> and <code>xs:hexBinary</code> will be transmitted as binary messages.</li> <li>Function items (maps, arrays) will be serialized as JSON and transmitted as string messages.</li> <li>All other items will be serialized with the default serialization options and transmitted as string messages.</li> </ul>
 :
 : @param $message value of type item()
 : @param $ids value of type xs:string*
 :)
declare function ws:send($message as item(), $ids as xs:string*) as empty-sequence() external;

(:~ 
 : Broadcasts a <code>$message</code> to all connected clients except to the caller. Invocations of this convenience function are equivalent to <code>ws:send($message, ws:ids()[. != ws:id()])</code>. See <code> <a href="https://docs.basex.org/wiki/WebSocket_Module#ws:send">ws:send</a> </code> for more details on the message handling.
 :
 : @param $message value of type xs:anyAtomicType
 :)
declare function ws:broadcast($message as xs:anyAtomicType) as empty-sequence() external;

(:~ 
 : Emits a <code>$message</code> to all connected clients. Invocations of this function are equivalent to <code>ws:send($message, ws:ids())</code>. See <code> <a href="https://docs.basex.org/wiki/WebSocket_Module#ws:send">ws:send</a> </code> for more details on the message handling.
 :
 : @param $message value of type xs:anyAtomicType
 :)
declare function ws:emit($message as xs:anyAtomicType) as empty-sequence() external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns the result to the calling WebSocket client. The query can be a URI or a string, and variables and context items can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> </ul> <p>Query scheduling is recommendable if the immediate query execution might be too time consuming and lead to a timeout. </p>
 :
 : @param $query value of type xs:anyAtomicType
 : @return value of type xs:string
 : @error ws:overflow Query execution is rejected, because too many jobs are queued or being executed.
 : @error ws:id The specified id is invalid or has already been assigned.
 :)
declare function ws:eval($query as xs:anyAtomicType) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns the result to the calling WebSocket client. The query can be a URI or a string, and variables and context items can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> </ul> <p>Query scheduling is recommendable if the immediate query execution might be too time consuming and lead to a timeout. </p>
 :
 : @param $query value of type xs:anyAtomicType
 : @param $bindings value of type map(*)?
 : @return value of type xs:string
 : @error ws:overflow Query execution is rejected, because too many jobs are queued or being executed.
 : @error ws:id The specified id is invalid or has already been assigned.
 :)
declare function ws:eval($query as xs:anyAtomicType, $bindings as map(*)?) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns the result to the calling WebSocket client. The query can be a URI or a string, and variables and context items can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> </ul> <p>Query scheduling is recommendable if the immediate query execution might be too time consuming and lead to a timeout. </p>
 :
 : @param $query value of type xs:anyAtomicType
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 : @error ws:overflow Query execution is rejected, because too many jobs are queued or being executed.
 : @error ws:id The specified id is invalid or has already been assigned.
 :)
declare function ws:eval($query as xs:anyAtomicType, $bindings as map(*)?, $options as map(*)?) as xs:string external;

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
