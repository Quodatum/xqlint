(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231030/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains various utility and helper functions.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Utility_Module
 :)
module namespace util = "http://basex.org/modules/util";

(:~ 
 : Alternative writing for the if/then/else expression: <ul> <li>If the <i>effective boolean value</i> of <code>$condition</code> is true, the <code>$then</code> branch will be evaluated.</li> <li>Otherwise, <code>$else</code> will be evaluated. If no third argument is supplied, an empty sequence will be returned.</li> </ul>
 :
 : @param $condition value of type item()*
 : @param $then value of type item()*
 : @return value of type item()*
 :)
declare function util:if($condition as item()*, $then as item()*) as item()* external;

(:~ 
 : Alternative writing for the if/then/else expression: <ul> <li>If the <i>effective boolean value</i> of <code>$condition</code> is true, the <code>$then</code> branch will be evaluated.</li> <li>Otherwise, <code>$else</code> will be evaluated. If no third argument is supplied, an empty sequence will be returned.</li> </ul>
 :
 : @param $condition value of type item()*
 : @param $then value of type item()*
 : @param $else value of type item()*
 : @return value of type item()*
 :)
declare function util:if($condition as item()*, $then as item()*, $else as item()*) as item()* external;

(:~ 
 : Returns <code>$items</code> if it is a non-empty sequence. Otherwise, returns <code>$default</code>. Equivalent to the following expressions: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">if</span> <span class="p">(</span> <span class="nf">exists</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">items</span> <span class="p">))</span> <span class="k">then</span> <span class="nv">$</span> <span class="n">items</span> <span class="k">else</span> <span class="nv">$</span> <span class="n">default</span> <span class="p">,</span> <span class="c">(: Elvis operator :)</span> <span class="nv">$</span> <span class="n">items</span> <span class="p">?:</span> <span class="nv">$</span> <span class="n">default</span> </pre> </div>
 :
 : @param $items value of type item()*
 : @param $default value of type item()*
 : @return value of type item()*
 :)
declare function util:or($items as item()*, $default as item()*) as item()* external;

(:~ 
 : Checks if the specified <code>$sequence</code> has at least <code>$min</code> and, optionally, at most <code>$max</code> items. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">let</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">:=</span> <span class="nf">count</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">)</span> <span class="k">return</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">&gt;=</span> <span class="nv">$</span> <span class="n">min</span> <span class="ow">and</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">&lt;=</span> <span class="nv">$</span> <span class="n">max</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @param $min value of type xs:integer
 : @return value of type xs:boolean
 :)
declare function util:count-within($sequence as item()*, $min as xs:integer) as xs:boolean external;

(:~ 
 : Checks if the specified <code>$sequence</code> has at least <code>$min</code> and, optionally, at most <code>$max</code> items. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">let</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">:=</span> <span class="nf">count</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">)</span> <span class="k">return</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">&gt;=</span> <span class="nv">$</span> <span class="n">min</span> <span class="ow">and</span> <span class="nv">$</span> <span class="n">count</span> <span class="o">&lt;=</span> <span class="nv">$</span> <span class="n">max</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @param $min value of type xs:integer
 : @param $max value of type xs:integer
 : @return value of type xs:boolean
 :)
declare function util:count-within($sequence as item()*, $min as xs:integer, $max as xs:integer) as xs:boolean external;

(:~ 
 : Returns the item from <code>$sequence</code> at the specified <code>$position</code>. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">[</span> <span class="nv">$</span> <span class="n">position</span> <span class="p">]</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @param $position value of type xs:double
 : @return value of type item()?
 :)
declare function util:item($sequence as item()*, $position as xs:double) as item()? external;

(:~ 
 : Returns items from <code>$sequence</code>, starting at position <code>$first</code> and ending at <code>$last</code>. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">subsequence</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">first</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">last</span> <span class="o">-</span> <span class="nv">$</span> <span class="n">first</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">)</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @param $first value of type xs:double
 : @param $last value of type xs:double
 : @return value of type item()*
 :)
declare function util:range($sequence as item()*, $first as xs:double, $last as xs:double) as item()* external;

(:~ 
 : Returns last item of a <code>$sequence</code>. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">[</span> <span class="nf">last</span> <span class="p">()]</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @return value of type item()?
 :)
declare function util:last($sequence as item()*) as item()? external;

(:~ 
 : Returns all items of a <code>$sequence</code> except for the last one. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">sequence</span> <span class="p">[</span> <span class="nf">position</span> <span class="p">()</span> <span class="o">&lt;</span> <span class="nf">last</span> <span class="p">()]</span> </pre> </div>
 :
 : @param $sequence value of type item()*
 : @return value of type item()*
 :)
declare function util:init($sequence as item()*) as item()* external;

(:~ 
 : Returns nodes in <i>distinct document order</i>: duplicate nodes will be removed, and the remaining nodes will be returned in <a href="https://web.archive.org/web/20220623231030/https://www.w3.org/TR/xquery-31/#dt-document-order">document order</a>. As results of path expressions are brought distinct document order before they are returned, the function is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">nodes</span> <span class="p">/</span> <span class="k">self</span> <span class="p">::</span> <span class="nf">node</span> <span class="p">()</span> </pre> </div>
 :
 : @param $nodes value of type node()*
 : @return value of type node()*
 :)
declare function util:ddo($nodes as node()*) as node()* external;

(:~ 
 : Returns the document nodes of the specified <code>$nodes</code>. The path expression <code>/abc</code> is internally represented as <code>util:root(.)/abc&lt;/code. Equivalent to: </code> <div class="mw-highlight mw-content-ltr" dir="ltr"> <code/> <pre> <code> <span/> <span class="nv">$</span> <span class="n">nodes</span> <span class="o">!</span> <span class="p">/</span> </code> </pre> <code/> </div> <code> </code>
 :
 : @param $nodes value of type node()*
 : @return value of type document-node()*
 :)
declare function util:root($nodes as node()*) as document-node()* external;

(:~ 
 : Removes namespaces with the specified <code>$prefixes</code> from the supplied <code>$node</code>. An empty string can be supplied to remove the default namespace. If no prefixes are specified, all namespaces will be removed.
 :
 : @param $node value of type node()
 : @return value of type node()
 :)
declare function util:strip-namespaces($node as node()) as node() external;

(:~ 
 : Removes namespaces with the specified <code>$prefixes</code> from the supplied <code>$node</code>. An empty string can be supplied to remove the default namespace. If no prefixes are specified, all namespaces will be removed.
 :
 : @param $node value of type node()
 : @param $prefixes value of type xs:string*
 : @return value of type node()
 :)
declare function util:strip-namespaces($node as node(), $prefixes as xs:string*) as node() external;

(:~ 
 : Returns each member of an <code>$array</code> as a new array. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">for</span> <span class="nv">$</span> <span class="n">a</span> <span class="ow">in</span> <span class="mi">1</span> <span class="k">to</span> <span class="nf">array:size</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">array</span> <span class="p">)</span> <span class="k">return</span> <span class="p">[</span> <span class="nv">$</span> <span class="n">array</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">a</span> <span class="p">)</span> <span class="p">]</span> </pre> </div>
 :
 : @param $array value of type array(*)
 : @return value of type array(*)*
 :)
declare function util:array-members($array as array(*)) as array(*)* external;

(:~ 
 : Returns all members of an <code>$array</code> as a sequence. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">array</span> <span class="p">?</span> <span class="o">*</span> </pre> </div>
 :
 : @param $array value of type array(*)
 : @return value of type item()*
 :)
declare function util:array-values($array as array(*)) as item()* external;

(:~ 
 : Returns each entry of a <code>$map</code> as a new map, each with a <code>key</code> and <code>value</code> entry. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">map:for-each</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">map</span> <span class="p">,</span> <span class="nf">function</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">key</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">value</span> <span class="p">)</span> <span class="p">{</span> <span class="k">map</span> <span class="p">{</span> <span class="s2">"key"</span> <span class="p">:</span> <span class="nv">$</span> <span class="n">key</span> <span class="p">,</span> <span class="s2">"value"</span> <span class="p">:</span> <span class="nv">$</span> <span class="n">value</span> <span class="p">}</span> <span class="p">})</span> </pre> </div>
 :
 : @param $map value of type map(*)
 : @return value of type map(xs:string, item()*)*
 :)
declare function util:map-entries($map as map(*)) as map(xs:string, item()*)* external;

(:~ 
 : Returns all values of a <code>$map</code> as a sequence. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nv">$</span> <span class="n">map</span> <span class="p">?</span> <span class="o">*</span> </pre> </div>
 :
 : @param $map value of type map(*)
 : @return value of type item()*
 :)
declare function util:map-values($map as map(*)) as item()* external;

(:~ 
 : Evaluates <code>$input</code> and returns the result <code>$count</code> times. Unless <code>$multiple</code> is enabled, the input expression is only evaluated once. Equivalent expressions: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">util:replicate</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">input</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">count</span> <span class="p">,</span> <span class="nf">true</span> <span class="p">()),</span> <span class="p">(</span> <span class="mi">1</span> <span class="k">to</span> <span class="nv">$</span> <span class="n">count</span> <span class="p">)</span> <span class="o">!</span> <span class="nv">$</span> <span class="n">input</span> </pre> </div>
 :
 : @param $input value of type item()*
 : @param $count value of type xs:integer
 : @return value of type item()*
 : @error util:negative The specified number is negative.
 :)
declare function util:replicate($input as item()*, $count as xs:integer) as item()* external;

(:~ 
 : Evaluates <code>$input</code> and returns the result <code>$count</code> times. Unless <code>$multiple</code> is enabled, the input expression is only evaluated once. Equivalent expressions: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">util:replicate</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">input</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">count</span> <span class="p">,</span> <span class="nf">true</span> <span class="p">()),</span> <span class="p">(</span> <span class="mi">1</span> <span class="k">to</span> <span class="nv">$</span> <span class="n">count</span> <span class="p">)</span> <span class="o">!</span> <span class="nv">$</span> <span class="n">input</span> </pre> </div>
 :
 : @param $input value of type item()*
 : @param $count value of type xs:integer
 : @param $multiple value of type xs:boolean
 : @return value of type item()*
 : @error util:negative The specified number is negative.
 :)
declare function util:replicate($input as item()*, $count as xs:integer, $multiple as xs:boolean) as item()* external;

(:~ 
 : Inserts the defined <code>$separator</code> between the <code>$items</code> of a sequence and returns the resulting sequence. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nf">head</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">items</span> <span class="p">),</span> <span class="k">for</span> <span class="nv">$</span> <span class="n">item</span> <span class="ow">in</span> <span class="nf">tail</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">items</span> <span class="p">)</span> <span class="k">return</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">separator</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">item</span> <span class="p">)</span> </pre> </div>
 :
 : @param $items value of type item()*
 : @param $separator value of type item()*
 : @return value of type item()*
 :)
declare function util:intersperse($items as item()*, $separator as item()*) as item()* external;

(:~ 
 : Returns duplicate values in a <code>$sequence</code>. See <a href="https://web.archive.org/web/20220623231030/https://www.w3.org/TR/xpath-functions-31/#func-distinct-values">fn:distinct-values</a> for the applied equality rules and the usage of the <code>$collation</code> argument.
 :
 : @param $sequence value of type item()*
 : @return value of type xs:anyAtomicType*
 :)
declare function util:duplicates($sequence as item()*) as xs:anyAtomicType* external;

(:~ 
 : Returns duplicate values in a <code>$sequence</code>. See <a href="https://web.archive.org/web/20220623231030/https://www.w3.org/TR/xpath-functions-31/#func-distinct-values">fn:distinct-values</a> for the applied equality rules and the usage of the <code>$collation</code> argument.
 :
 : @param $sequence value of type item()*
 : @param $collation value of type xs:string
 : @return value of type xs:anyAtomicType*
 :)
declare function util:duplicates($sequence as item()*, $collation as xs:string) as xs:anyAtomicType* external;

(:~ 
 : Returns all characters of a <code>$string</code> as a sequence. Equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="k">for</span> <span class="nv">$</span> <span class="n">cp</span> <span class="ow">in</span> <span class="nf">string-to-codepoints</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">string</span> <span class="p">)</span> <span class="k">return</span> <span class="nf">codepoints-to-string</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">cp</span> <span class="p">)</span> </pre> </div>
 :
 : @param $string value of type xs:string
 : @return value of type xs:string*
 :)
declare function util:chars($string as xs:string) as xs:string* external;
