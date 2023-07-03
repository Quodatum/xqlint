(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> adds some useful higher-order functions, additional to the <a href="https://docs.basex.org/wiki/Higher-Order_Functions">Higher-Order Functions</a> provided by the official specification.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Higher-Order_Functions_Module
 :)
module namespace hof = "http://basex.org/modules/hof";

(:~ 
 : Works the same as <a href="https://docs.basex.org/wiki/Higher-Order_Functions#fn:fold-left">fn:fold-left</a>, but does not need a seed, because the sequence must be non-empty.
 :
 : @param  hof:fold-left1($input value of type item()+
 : @param $action value of type function(item()*
 : @param item() value of type 
 : @return value of type item()* 
 :)
declare function  hof:fold-left1($input as item()+, $action as function(item()*, item()) as item()*) as item()*  external;

(:~ 
 : Applies the predicate function <code>$predicate</code> to <code>$zero</code>. If the result is <code>false</code>, <code>$action</code> is invoked with the start value – or, subsequently, with the result of this function – until the predicate function returns <code>true()</code>.
 :
 : @param  hof:until($predicate value of type function(item()*
 : @return value of type item()* 
 :)
declare function  hof:until($predicate as function(item()*) as xs:boolean, $action as function(item()*) as item()*, $zero as item()*) as item()*  external;

(:~ 
 : This function is similar to <a href="https://docs.basex.org/wiki/Higher-Order_Functions#fn:fold-left">fn:fold-left</a>, but it returns a list of successive reduced values from the left. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:scan-left</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">,</span> <span class="nv">$</span><span class="n">acc</span><span class="p">,</span> <span class="nv">$</span><span class="n">action</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span><span class="p">(</span><span class="nf">empty</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">))</span> <span class="k">then</span> <span class="nv">$</span><span class="n">acc</span> <span class="k">else</span> <span class="p">(</span> <span class="nv">$</span><span class="n">acc</span><span class="p">,</span> <span class="nf">hof:scan-left</span><span class="p">(</span><span class="nf">tail</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">),</span> <span class="nv">$</span><span class="n">action</span><span class="p">(</span><span class="nv">$</span><span class="n">acc</span><span class="p">,</span> <span class="nf">head</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">)),</span> <span class="nv">$</span><span class="n">action</span><span class="p">)</span> <span class="p">)</span> <span class="p">};</span> </pre></div>
 :
 : @param  hof:scan-left($input value of type item()*
 : @param $zero value of type item()*
 : @param $action value of type function(item()*
 : @param item() value of type 
 : @return value of type item()* 
 :)
declare function  hof:scan-left($input as item()*, $zero as item()*, $action as function(item()*, item()) as item()*) as item()*  external;

(:~ 
 : The function returns items of <code>$input</code> as long as the <code>$predicate</code> is satisfied. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:take-while</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">,</span> <span class="nv">$</span><span class="n">predicate</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span><span class="p">(</span><span class="nf">empty</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">)</span> <span class="ow">or</span> <span class="nf">not</span><span class="p">(</span><span class="nv">$</span><span class="n">predicate</span><span class="p">(</span><span class="err">head(</span><span class="nv">$</span><span class="n">input</span><span class="p">))))</span> <span class="k">then</span> <span class="p">()</span> <span class="k">else</span> <span class="p">(</span> <span class="nf">head</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">),</span> <span class="nf">hof:take-while</span><span class="p">(</span><span class="nf">tail</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">),</span> <span class="nv">$</span><span class="n">predicate</span><span class="p">)</span> <span class="p">)</span> <span class="p">};</span> </pre></div>
 :
 : @param  hof:take-while($input value of type item()*
 : @param $predicate value of type function(item()
 : @return value of type item()* 
 :)
declare function  hof:take-while($input as item()*, $predicate as function(item()) as xs:boolean) as item()*  external;

(:~ 
 : The function skips all items of <code>$input</code> until the <code>$predicate</code> is not satisfied anymore. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:drop-while</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">,</span> <span class="nv">$</span><span class="n">predicate</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span><span class="p">(</span><span class="nv">$</span><span class="n">predicate</span><span class="p">(</span><span class="err">head(</span><span class="nv">$</span><span class="n">input</span><span class="p">)))</span> <span class="k">then</span> <span class="p">(</span> <span class="nf">hof:drop-while</span><span class="p">(</span><span class="nf">tail</span><span class="p">(</span><span class="nv">$</span><span class="n">input</span><span class="p">),</span> <span class="nv">$</span><span class="n">predicate</span><span class="p">)</span> <span class="p">)</span> <span class="k">else</span> <span class="p">(</span> <span class="nv">$</span><span class="n">input</span> <span class="p">)</span> <span class="p">};</span> </pre></div>
 :
 : @param  hof:drop-while($input value of type item()*
 : @param $predicate value of type function(item()*
 : @return value of type item()* 
 :)
declare function  hof:drop-while($input as item()*, $predicate as function(item()*) as xs:boolean) as item()*  external;

(:~ 
 : Returns the <code>$k</code> items in <code>$input</code> that are greatest when sorted by the result of <code>$key</code> applied to the item. The function is a much more efficient implementation of the following scheme: <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="p">(</span><span class="k">for</span> <span class="nv">$</span><span class="n">item</span> <span class="ow">in</span> <span class="nv">$</span><span class="n">input</span> <span class="k">order by</span> <span class="nv">$</span><span class="n">key</span><span class="p">(</span><span class="nv">$</span><span class="n">item</span><span class="p">)</span> <span class="k">descending</span> <span class="k">return</span> <span class="nv">$</span><span class="n">item</span> <span class="p">)[</span><span class="nf">position</span><span class="p">()</span> <span class="o">&lt;=</span> <span class="nv">$</span><span class="n">k</span><span class="p">]</span> </pre></div>
 :
 : @param  hof:top-k-by($input value of type item()*
 : @param $key value of type function(item()
 : @return value of type item()* 
 :)
declare function  hof:top-k-by($input as item()*, $key as function(item()) as item(), $k as xs:integer) as item()*  external;

(:~ 
 : Returns the <code>$k</code> items in <code>$input</code> that are greatest when sorted in the order of the <i>less-than</i> predicate <code>$comparator</code>. The function is a general version of <code><a href="https://docs.basex.org/wiki/Higher-Order_Functions_Module#hof:top-k-by">hof:top-k-by</a></code>.
 :
 : @param  hof:top-k-with($input value of type item()*
 : @param $comparator value of type function(item()
 : @param item() value of type 
 : @return value of type item()* 
 :)
declare function  hof:top-k-with($input as item()*, $comparator as function(item(), item()) as xs:boolean, $k as xs:integer) as item()*  external;

(:~ 
 : Returns its argument unchanged. This function isn’t useful on its own, but can be used as an argument to other higher-order functions.
 :
 : @param  hof:id($input value of type item()*
 : @return value of type item()* 
 :)
declare function  hof:id($input as item()*) as item()*  external;

(:~ 
 : Returns its first argument unchanged and ignores the second. This function isn’t useful on its own, but can be used as argument to other higher-order functions, e.g., when a function combining two values is expected and one only wants to retain the left one.
 :
 : @param  hof:const($input value of type item()*
 : @param $ignore value of type item()*
 : @return value of type item()* 
 :)
declare function  hof:const($input as item()*, $ignore as item()*) as item()*  external;
