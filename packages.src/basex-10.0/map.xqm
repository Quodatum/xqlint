(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for manipulating maps. <a href="https://docs.basex.org/wiki/XQuery_3.1#Maps">Maps</a> have been introduced with <a href="https://docs.basex.org/wiki/XQuery_3.1">XQuery 3.1</a>.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Map_Module
 :)
module namespace map = "http://www.w3.org/2005/xpath-functions/map";

(:~ 
 : Returns true if the supplied <code>$map</code> contains an entry with a key equal to the supplied value of <code>$key</code>; otherwise it returns false. No error is raised if the map contains keys that are not comparable with the supplied <code>$key</code>. <p>If the supplied key is <code>xs:untypedAtomic</code>, it is compared as an instance of <code>xs:string</code>. If the supplied key is the <code>xs:float</code> or <code>xs:double</code> value <code>NaN</code>, the function returns true if there is an entry whose key is <code>NaN</code>, or false otherwise. </p>
 :
 : @param $map value of type map(*)
 : @param $key value of type xs:anyAtomicType
 : @return value of type xs:boolean
 :)
declare function map:contains($map as map(*), $key as xs:anyAtomicType) as xs:boolean external;

(:~ 
 : Creates a new <i>map</i> containing a single entry. The key of the entry in the new map is <code>$key</code>, and its associated value is <code>$value</code>. <p>The function <code>map:entry</code> is intended primarily for use in conjunction with the function <code> <code> <a href="https://docs.basex.org/wiki/Map_Module#map:merge">map:merge</a> </code> </code>. For example, a map containing seven entries may be constructed like this: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">map:merge</span> <span class="p">((</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Sun"</span> <span class="p">,</span> <span class="s2">"Sunday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Mon"</span> <span class="p">,</span> <span class="s2">"Monday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Tue"</span> <span class="p">,</span> <span class="s2">"Tuesday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Wed"</span> <span class="p">,</span> <span class="s2">"Wednesday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Thu"</span> <span class="p">,</span> <span class="s2">"Thursday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Fri"</span> <span class="p">,</span> <span class="s2">"Friday"</span> <span class="p">),</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="s2">"Sat"</span> <span class="p">,</span> <span class="s2">"Saturday"</span> <span class="p">)</span> <span class="p">))</span> </pre> </div> <p>Unlike the <code>map { ... }</code> expression, this technique can be used to construct a map with a variable number of entries, for example: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">map:merge</span> <span class="p">(</span> <span class="k">for</span> <span class="nv">$</span> <span class="n">b</span> <span class="ow">in</span> <span class="p">//</span> <span class="nt">book</span> <span class="k">return</span> <span class="nf">map:entry</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">b</span> <span class="p">/</span> <span class="nt">isbn</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">b</span> <span class="p">))</span> </pre> </div>
 :
 : @param $key value of type xs:anyAtomicType
 : @param $value value of type item()*
 : @return value of type map(*)
 :)
declare function map:entry($key as xs:anyAtomicType, $value as item()*) as map(*) external;

(:~ 
 : Returns all values of maps in the supplied <code>$input</code> with the specified <code>$key</code>. The found values will be returned in an array. Arbitrary input will be processed recursively as follows: <ul> <li>In a sequence, each item will be processed in order.</li> <li>In an array, all array members will be processed as sequence.</li> <li>In a map, all entries whose keys match the specified key. Moreover, all values of the map will be processed as sequence.</li> </ul>
 :
 : @param $input value of type item()*
 : @param $key value of type xs:anyAtomicType
 : @return value of type array(*)
 :)
declare function map:find($input as item()*, $key as xs:anyAtomicType) as array(*) external;

(:~ 
 : Applies the specified <code>$function</code> to every key/value pair of the supplied <code>$map</code> and returns the results as a sequence.
 :
 : @param $map value of type map(*)
 : @param $function value of type function(xs:anyAtomicType
 : @param item()* value of type 
 : @return value of type item()*
 :)
declare function map:for-each($map as map(*), $function as function(xs:anyAtomicType, item()*) as item()*) as item()* external;

(:~ 
 : Returns the value associated with a supplied key in a given map. This function attempts to find an entry within the <code>$map</code> that has a key equal to the supplied value of <code>$key</code>. If there is such an entry, the function returns the associated value; otherwise it returns an empty sequence. No error is raised if the map contains keys that are not comparable with the supplied <code>$key</code>. If the supplied key is <code>xs:untypedAtomic</code>, it is converted to <code>xs:string</code>. <p>A return value of <code>()</code> from <code>map:get</code> could indicate that the key is present in the map with an associated value of <code>()</code>, or it could indicate that the key is not present in the map. The two cases can be distinguished by calling <code>map:contains</code>. Invoking the <i>map</i> as a function item has the same effect as calling <code>get</code>: that is, when <code>$map</code> is a map, the expression <code>$map($K)</code> is equivalent to <code>get($map, $K)</code>. Similarly, the expression <code>get(get(get($map, 'employee'), 'name'), 'first')</code> can be written as <code>$map('employee')('name')('first')</code>. </p>
 :
 : @param $map value of type map(*)
 : @param $key value of type xs:anyAtomicType
 : @return value of type item()*
 :)
declare function map:get($map as map(*), $key as xs:anyAtomicType) as item()* external;

(:~ 
 : Returns a sequence containing all the key values present in a map. The function takes the supplied <code>$map</code> and returns the keys that are present in the map as a sequence of atomic values. The order may differ from the order in which entries were inserted in the map.
 :
 : @param $map value of type map(*)
 : @return value of type xs:anyAtomicType*
 :)
declare function map:keys($map as map(*)) as xs:anyAtomicType* external;

(:~ 
 : Constructs and returns a new map. The <i>map</i> is formed by combining the contents of the supplied <code>$maps</code>. The maps are combined as follows: <ol> <li>There is one entry in the new map for each distinct key present in the union of the input maps.</li> <li>The <code>$options</code> argument defines how duplicate keys are handled. Currently, a single option <code>duplicates</code> exists, and its allowed values are <code>use-first</code>, <code>use-last</code>, <code>combine</code> and <code>reject</code> (default: <code>use-first</code>).</li> </ol>
 :
 : @param $maps value of type map(*)*
 : @return value of type map(*)
 :)
declare function map:merge($maps as map(*)*) as map(*) external;

(:~ 
 : Constructs and returns a new map. The <i>map</i> is formed by combining the contents of the supplied <code>$maps</code>. The maps are combined as follows: <ol> <li>There is one entry in the new map for each distinct key present in the union of the input maps.</li> <li>The <code>$options</code> argument defines how duplicate keys are handled. Currently, a single option <code>duplicates</code> exists, and its allowed values are <code>use-first</code>, <code>use-last</code>, <code>combine</code> and <code>reject</code> (default: <code>use-first</code>).</li> </ol>
 :
 : @param $maps value of type map(*)*
 : @param $options value of type map(*)
 : @return value of type map(*)
 :)
declare function map:merge($maps as map(*)*, $options as map(*)) as map(*) external;

(:~ 
 : Creates a new <i>map</i>, containing the entries of the supplied <code>$map</code> and a new entry composed by <code>$key</code> and <code>$value</code>. The semantics of this function are equivalent to <code>map:merge((map { $key, $value }, $map))</code>
 :
 : @param $map value of type map(*)
 : @param $key value of type xs:anyAtomicType
 : @param $value value of type item()*
 : @return value of type map(*)
 :)
declare function map:put($map as map(*), $key as xs:anyAtomicType, $value as item()*) as map(*) external;

(:~ 
 : Constructs a new map by removing entries from an existing map. The entries in the new map correspond to the entries of <code>$map</code>, excluding entries supplied via <code>$keys</code>. <p>No failure occurs if the input map contains no entry with the supplied keys; the input map is returned unchanged. </p>
 :
 : @param $map value of type map(*)
 : @param $keys value of type xs:anyAtomicType*
 : @return value of type map(*)
 :)
declare function map:remove($map as map(*), $keys as xs:anyAtomicType*) as map(*) external;

(:~ 
 : Returns a the number of entries in the supplied map. The function takes the supplied <code>$map</code> and returns the number of entries that are present in the map.
 :
 : @param $map value of type map(*)
 : @return value of type xs:integer
 :)
declare function map:size($map as map(*)) as xs:integer external;
