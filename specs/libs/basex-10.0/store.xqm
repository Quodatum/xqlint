(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions to organize values in a persistent main-memory key-value store.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Store_Module
 :)
module namespace store = "http://basex.org/modules/store";

(:~ 
 : Retrieves an entry from the store with the given <code>$key</code>. If the addressed entry does not exist, an empty sequence is returned.
 :
 : @param  store:get($key value of type xs:string
 : @return value of type item()* 
 :)
declare function  store:get($key as xs:string) as item()*  external;

(:~ 
 : Stores an entry with the given <code>$key</code> and <code>$value</code> in the store: <ul><li>If the value is an empty sequence, the entry is removed.</li><li>If a value refers to an opened database or is <a href="https://docs.basex.org/wiki/Lazy_Module">a lazy item</a>, its contents are materialized in main memory.</li><li>Values with function items are rejected.</li></ul>
 :
 : @param  store:put($key value of type xs:string
 : @param $value value of type item()*
 : @return value of type empty-sequence() 
 :)
declare function  store:put($key as xs:string, $value as item()*) as empty-sequence()  external;

(:~ 
 : Retrieves an entry from the store with the given <code>$key</code>. The <code>$put</code> function will only be invoked if the entry does not exist, and its result will be stored and returned instead.
 :
 : @param  store:get-or-put($key value of type xs:string
 : @param $put value of type function(*)
 : @return value of type item()* 
 :)
declare function  store:get-or-put($key as xs:string, $put as function(*)) as item()*  external;

(:~ 
 : Removes an entry with the given <code>$key</code> from the store. No error will be raised if an addressed entry does not exist.
 :
 : @param  store:remove($key value of type xs:string
 : @return value of type empty-sequence() 
 :)
declare function  store:remove($key as xs:string) as empty-sequence()  external;

(:~ 
 : Lists the names of all keys.
 :
 : @param  store:keys( value of type 
 : @return value of type xs:string* 
 :)
declare function  store:keys() as xs:string*  external;

(:~ 
 : Resets the store by removing all its entries.
 :
 : @param  store:clear( value of type 
 : @return value of type empty-sequence() 
 :)
declare function  store:clear() as empty-sequence()  external;

(:~ 
 : Retrieves the standard store from disk, or a custom store if a <code>$name</code> is supplied.
 :
 : @param  store:read( value of type 
 : @return value of type empty-sequence() 
 : @error store:io The store could not be read.
 : @error store:name The specified name is invalid.
 : @error store:not-found A store with the specified name does not exist.
 :)
declare function  store:read() as empty-sequence()  external;

(:~ 
 : Retrieves the standard store from disk, or a custom store if a <code>$name</code> is supplied.
 :
 : @param  store:read($name value of type xs:string?
 : @return value of type empty-sequence() 
 : @error store:io The store could not be read.
 : @error store:name The specified name is invalid.
 : @error store:not-found A store with the specified name does not exist.
 :)
declare function  store:read($name as xs:string?) as empty-sequence()  external;

(:~ 
 : Writes the standard store to disk, or to a custom store file if a <code>$name</code> is supplied. If the standard store is empty, the store file will be deleted.
 :
 : @param  store:write( value of type 
 : @return value of type empty-sequence() 
 : @error store:io The store could not be written.
 : @error store:name The specified name is invalid.
 :)
declare function  store:write() as empty-sequence()  external;

(:~ 
 : Writes the standard store to disk, or to a custom store file if a <code>$name</code> is supplied. If the standard store is empty, the store file will be deleted.
 :
 : @param  store:write($name value of type xs:string?
 : @return value of type empty-sequence() 
 : @error store:io The store could not be written.
 : @error store:name The specified name is invalid.
 :)
declare function  store:write($name as xs:string?) as empty-sequence()  external;

(:~ 
 : Lists the names of all custom stores.
 :
 : @param  store:list( value of type 
 : @return value of type xs:string* 
 :)
declare function  store:list() as xs:string*  external;

(:~ 
 : Deletes a custom store from disk.
 :
 : @param  store:delete($name value of type xs:string
 : @return value of type empty-sequence() 
 : @error store:name The specified name is invalid.
 : @error store:not-found A store with the specified name does not exist.
 :)
declare function  store:delete($name as xs:string) as empty-sequence()  external;
