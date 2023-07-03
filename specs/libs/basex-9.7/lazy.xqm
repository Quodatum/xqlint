(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for handling <i>lazy</i> items. In contrast to standard XQuery items, a lazy item contains a reference to the actual data, and the data itself will only be retrieved if it is requested. Hence, possible errors will be postponed, and no memory will be occupied by a lazy item as long as its content has not been requested yet. The following BaseX functions return lazy items: Some functions are capable of consuming the contents of lazy items in a <i>streamable</i> fashion: data will not be cached, but instead passed on to another target (file, the calling expression, etc.). The following streaming functions are currently available: The XQuery expression below serves as an example on how large files can be downloaded and written to a file with constant memory consumption: If lazy items are serialized, they will be streamed as well.
 :
 : @author BaseX Team
 : @see /wiki/Lazy_Module
 :)
module namespace lazy = "http://basex.org/modules/lazy";

(:~ 
 : Caches the data of lazy <code>$items</code> in a sequence:<br/> <ul> <li> data of lazy items will be retrieved and cached inside the item. </li> <li> non-lazy items, or lazy items with cached data, will simply be passed through. </li> <li> If <code>$lazy</code> is set to <code>true()</code>, caching will be deferred until the data is eventually requested. Streaming will be disabled: Data will always be cached before a stream is returned. </li> </ul> <p>Caching is advisable if an item will be processed more than once, or if the data may not be available anymore at a later stage. </p>
 :
 : @param $items value of type item()*
 : @return value of type item()*
 :)
declare function lazy:cache($items as item()*) as item()* external;

(:~ 
 : Caches the data of lazy <code>$items</code> in a sequence:<br/> <ul> <li> data of lazy items will be retrieved and cached inside the item. </li> <li> non-lazy items, or lazy items with cached data, will simply be passed through. </li> <li> If <code>$lazy</code> is set to <code>true()</code>, caching will be deferred until the data is eventually requested. Streaming will be disabled: Data will always be cached before a stream is returned. </li> </ul> <p>Caching is advisable if an item will be processed more than once, or if the data may not be available anymore at a later stage. </p>
 :
 : @param $items value of type item()*
 : @param $lazy value of type xs:boolean
 : @return value of type item()*
 :)
declare function lazy:cache($items as item()*, $lazy as xs:boolean) as item()* external;

(:~ 
 : Checks whether the specified <code>$item</code> is lazy.
 :
 : @param $item value of type item()
 : @return value of type xs:boolean
 :)
declare function lazy:is-lazy($item as item()) as xs:boolean external;

(:~ 
 : Checks whether the contents of the specified <code>$item</code> are cached. The function will always return <code>true</code> for non-lazy items.
 :
 : @param $item value of type item()
 : @return value of type xs:boolean
 :)
declare function lazy:is-cached($item as item()) as xs:boolean external;
