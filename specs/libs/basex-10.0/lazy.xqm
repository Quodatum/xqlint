(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for handling <i>lazy</i> items.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Lazy_Module
 :)
module namespace lazy = "http://basex.org/modules/lazy";

(:~ 
 : Caches the data of lazy <code>$input</code> items:<br/> <ul><li>data of lazy items are retrieved and cached inside the item.</li><li>non-lazy items, or lazy items with cached data, are simply passed through.</li><li>If <code>$lazy</code> is set to <code>true()</code>, caching is deferred until the data is eventually requested. Streaming will be disabled: Data will be cached before a stream is returned.</li></ul> <p>Caching is advisable if an item is processed more than once, or if the data may not be available anymore at a later stage. </p>
 :
 : @param  lazy:cache($input value of type item()*
 : @return value of type item()* 
 :)
declare function  lazy:cache($input as item()*) as item()*  external;

(:~ 
 : Caches the data of lazy <code>$input</code> items:<br/> <ul><li>data of lazy items are retrieved and cached inside the item.</li><li>non-lazy items, or lazy items with cached data, are simply passed through.</li><li>If <code>$lazy</code> is set to <code>true()</code>, caching is deferred until the data is eventually requested. Streaming will be disabled: Data will be cached before a stream is returned.</li></ul> <p>Caching is advisable if an item is processed more than once, or if the data may not be available anymore at a later stage. </p>
 :
 : @param  lazy:cache($input value of type item()*
 : @param $lazy value of type xs:boolean?
 : @return value of type item()* 
 :)
declare function  lazy:cache($input as item()*, $lazy as xs:boolean?) as item()*  external;

(:~ 
 : Checks whether the specified <code>$item</code> is lazy.
 :
 : @param  lazy:is-lazy($item value of type item()
 : @return value of type xs:boolean 
 :)
declare function  lazy:is-lazy($item as item()) as xs:boolean  external;

(:~ 
 : Checks whether the contents of the specified <code>$item</code> are cached. The function will always return <code>true</code> for non-lazy items.
 :
 : @param  lazy:is-cached($item value of type item()
 : @return value of type xs:boolean 
 :)
declare function  lazy:is-cached($item as item()) as xs:boolean  external;
