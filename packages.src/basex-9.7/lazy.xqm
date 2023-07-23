(:~ 
 : 
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Lazy_Module
 :)
module namespace lazy = "http://basex.org/modules/lazy";

(:~ 
 : Caches the data of lazy <code>$items</code> in a sequence:<br/> <ul> <li>data of lazy items will be retrieved and cached inside the item.</li> <li>non-lazy items, or lazy items with cached data, will simply be passed through.</li> <li>If <code>$lazy</code> is set to <code>true()</code>, caching will be deferred until the data is eventually requested. Streaming will be disabled: Data will always be cached before a stream is returned.</li> </ul> <p>Caching is advisable if an item will be processed more than once, or if the data may not be available anymore at a later stage. </p>
 :
 : @param $items value of type item()*
 : @return value of type item()*
 :)
declare function lazy:cache($items as item()*) as item()* external;

(:~ 
 : Caches the data of lazy <code>$items</code> in a sequence:<br/> <ul> <li>data of lazy items will be retrieved and cached inside the item.</li> <li>non-lazy items, or lazy items with cached data, will simply be passed through.</li> <li>If <code>$lazy</code> is set to <code>true()</code>, caching will be deferred until the data is eventually requested. Streaming will be disabled: Data will always be cached before a stream is returned.</li> </ul> <p>Caching is advisable if an item will be processed more than once, or if the data may not be available anymore at a later stage. </p>
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
