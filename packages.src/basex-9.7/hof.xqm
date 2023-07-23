(:~ 
 : 
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Higher-Order_Functions_Module
 :)
module namespace hof = "http://basex.org/modules/hof";

(:~ 
 : Works the same as <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623234042/https://docs.basex.org/wiki/Higher-Order_Functions#fn:fold-left">fn:fold-left</a>, but does not need a seed, because the sequence must be non-empty.
 :
 : @param $seq value of type item()+
 : @param $f value of type function(item()*
 : @param item() value of type 
 : @return value of type item()*
 :)
declare function hof:fold-left1($seq as item()+, $f as function(item()*, item()) as item()*) as item()* external;

(:~ 
 : Applies the predicate function <code>$pred</code> to <code>$start</code>. If the result is <code>false</code>, <code>$f</code> is invoked with the start value – or, subsequently, with the result of this function – until the predicate function returns <code>true()</code>.
 :
 : @param $pred value of type function(item()*
 : @return value of type item()*
 :)
declare function hof:until($pred as function(item()*) as xs:boolean, $f as function(item()*) as item()*, $start as item()*) as item()* external;

(:~ 
 : This function is similar to <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623234042/https://docs.basex.org/wiki/Higher-Order_Functions#fn:fold-left">fn:fold-left</a>, but it returns a list of successive reduced values from the left. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:scan-left</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">acc</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">f</span> <span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span> <span class="nf">empty</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">))</span> <span class="k">then</span> <span class="nv">$</span> <span class="n">acc</span> <span class="k">else</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">acc</span> <span class="p">,</span> <span class="nf">hof:scan-left</span> <span class="p">(</span> <span class="nf">tail</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">),</span> <span class="nv">$</span> <span class="n">f</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">acc</span> <span class="p">,</span> <span class="nf">head</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">)),</span> <span class="nv">$</span> <span class="n">f</span> <span class="p">)</span> <span class="p">)</span> <span class="p">};</span> </pre> </div>
 :
 : @param $seq value of type item()*
 : @param $start value of type item()*
 : @param $f value of type function(item()*
 : @param item() value of type 
 : @return value of type item()*
 :)
declare function hof:scan-left($seq as item()*, $start as item()*, $f as function(item()*, item()) as item()*) as item()* external;

(:~ 
 : The function returns items of <code>$seq</code> as long as the predicate <code>$pred</code> is satisfied. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:take-while</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span> <span class="nf">empty</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">)</span> <span class="ow">or</span> <span class="nf">not</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">(</span> <span class="err">head(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">))))</span> <span class="k">then</span> <span class="p">()</span> <span class="k">else</span> <span class="p">(</span> <span class="nf">head</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">),</span> <span class="nf">hof:take-while</span> <span class="p">(</span> <span class="nf">tail</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">),</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">)</span> <span class="p">)</span> <span class="p">};</span> </pre> </div>
 :
 : @param $seq value of type item()*
 : @param $pred value of type function(item()
 : @return value of type item()*
 :)
declare function hof:take-while($seq as item()*, $pred as function(item()) as xs:boolean) as item()* external;

(:~ 
 : The function skips all items of <code>$seq</code> until the predicate <code>$pred</code> is not satisfied anymore. It is equivalent to: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="kd">declare</span> <span class="kd">function</span> <span class="nf">hof:drop-while</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">,</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">(</span> <span class="err">head(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">)))</span> <span class="k">then</span> <span class="p">(</span> <span class="nf">hof:drop-while</span> <span class="p">(</span> <span class="nf">tail</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">),</span> <span class="nv">$</span> <span class="n">pred</span> <span class="p">)</span> <span class="p">)</span> <span class="k">else</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">seq</span> <span class="p">)</span> <span class="p">};</span> </pre> </div>
 :
 : @param $seq value of type item()*
 : @param $pred value of type function(item()
 : @return value of type item()*
 :)
declare function hof:drop-while($seq as item()*, $pred as function(item()) as xs:boolean) as item()* external;

(:~ 
 : Returns the <code>$k</code> items in <code>$seq</code> that are greatest when sorted by the result of <code>$f</code> applied to the item. The function is a much more efficient implementation of the following scheme: <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="p">(</span> <span class="k">for</span> <span class="nv">$</span> <span class="n">x</span> <span class="ow">in</span> <span class="nv">$</span> <span class="n">seq</span> <span class="k">order by</span> <span class="nv">$</span> <span class="n">sort-key</span> <span class="p">(</span> <span class="nv">$</span> <span class="n">x</span> <span class="p">)</span> <span class="k">descending</span> <span class="k">return</span> <span class="nv">$</span> <span class="n">x</span> <span class="p">)[</span> <span class="nf">position</span> <span class="p">()</span> <span class="o">&lt;=</span> <span class="nv">$</span> <span class="n">k</span> <span class="p">]</span> </pre> </div>
 :
 : @param $seq value of type item()*
 : @param $sort-key value of type function(item()
 : @return value of type item()*
 :)
declare function hof:top-k-by($seq as item()*, $sort-key as function(item()) as item(), $k as xs:integer) as item()* external;

(:~ 
 : Returns the <code>$k</code> items in <code>$seq</code> that are greatest when sorted in the order of the <i>less-than</i> predicate <code>$lt</code>. The function is a general version of <code>hof:top-k-by($seq, $sort-key, $k)</code>.
 :
 : @param $seq value of type item()*
 : @param $lt value of type function(item()
 : @param item() value of type 
 : @return value of type item()*
 :)
declare function hof:top-k-with($seq as item()*, $lt as function(item(), item()) as xs:boolean, $k as xs:integer) as item()* external;

(:~ 
 : Returns its argument unchanged. This function isn’t useful on its own, but can be used as argument to other higher-order functions.
 :
 : @param $expr value of type item()*
 : @return value of type item()*
 :)
declare function hof:id($expr as item()*) as item()* external;

(:~ 
 : Returns its first argument unchanged and ignores the second. This function isn’t useful on its own, but can be used as argument to other higher-order functions, e.g. when a function combining two values is expected and one only wants to retain the left one.
 :
 : @param $expr value of type item()*
 : @param $ignored value of type item()*
 : @return value of type item()*
 :)
declare function hof:const($expr as item()*, $ignored as item()*) as item()* external;
