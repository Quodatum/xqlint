(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains various functions to test and profile code, and to dump information to standard output.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Profiling_Module
 :)
module namespace prof = "http://basex.org/modules/prof";

(:~ 
 : Measures the execution time and memory consumption required for evaluating the specified <code>$input</code> and returns a map with the results. The following <code>$options</code> are available: <ul><li><code>time</code>: Include execution time in result as <code>xs:decimal</code> (unit: milliseconds; default: true).</li><li><code>memory</code>: Include memory consumption in result as <code>xs:integer</code> (unit: bytes; default: false).</li><li><code>value</code>: Include value in result (default: true).</li></ul> <p>Helpful notes: </p> <ul><li>If you are not interested in some of the returned results, you should disable them to save time and memory.</li><li>Profiling might change the execution behavior of your code: An expression that might be executed iteratively will be cached by the profiling function.</li><li>If a value has a compact internal representation, memory consumption will be very low, even if the serialized result may consume much more memory.</li><li>Please note that memory profiling is only approximative, so it can be quite misleading. If the memory option is enabled, main-memory will be garbage-collected before and after evaluation to improve the quality of the measurement.</li></ul>
 :
 : @param  prof:track($input value of type item()*
 : @return value of type item()* 
 :)
declare function  prof:track($input as item()*) as item()*  external;

(:~ 
 : Measures the execution time and memory consumption required for evaluating the specified <code>$input</code> and returns a map with the results. The following <code>$options</code> are available: <ul><li><code>time</code>: Include execution time in result as <code>xs:decimal</code> (unit: milliseconds; default: true).</li><li><code>memory</code>: Include memory consumption in result as <code>xs:integer</code> (unit: bytes; default: false).</li><li><code>value</code>: Include value in result (default: true).</li></ul> <p>Helpful notes: </p> <ul><li>If you are not interested in some of the returned results, you should disable them to save time and memory.</li><li>Profiling might change the execution behavior of your code: An expression that might be executed iteratively will be cached by the profiling function.</li><li>If a value has a compact internal representation, memory consumption will be very low, even if the serialized result may consume much more memory.</li><li>Please note that memory profiling is only approximative, so it can be quite misleading. If the memory option is enabled, main-memory will be garbage-collected before and after evaluation to improve the quality of the measurement.</li></ul>
 :
 : @param  prof:track($input value of type item()*
 : @param $options value of type map(*)?
 : @return value of type item()* 
 :)
declare function  prof:track($input as item()*, $options as map(*)?) as item()*  external;

(:~ 
 : Measures the time needed to evaluate <code>$input</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <code><a href="https://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a></code> for further notes.
 :
 : @param  prof:time($input value of type item()
 : @return value of type item()* 
 :)
declare function  prof:time($input as item()) as item()*  external;

(:~ 
 : Measures the time needed to evaluate <code>$input</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <code><a href="https://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a></code> for further notes.
 :
 : @param  prof:time($input value of type item()
 : @param $label value of type xs:string?
 : @return value of type item()* 
 :)
declare function  prof:time($input as item(), $label as xs:string?) as item()*  external;

(:~ 
 : Measures the memory allocated by evaluating <code>$input</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <code><a href="https://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a></code> for further notes.
 :
 : @param  prof:memory($input value of type item()
 : @return value of type item()* 
 :)
declare function  prof:memory($input as item()) as item()*  external;

(:~ 
 : Measures the memory allocated by evaluating <code>$input</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <code><a href="https://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a></code> for further notes.
 :
 : @param  prof:memory($input value of type item()
 : @param $label value of type xs:string?
 : @return value of type item()* 
 :)
declare function  prof:memory($input as item(), $label as xs:string?) as item()*  external;

(:~ 
 : Returns the number of milliseconds passed since 1970/01/01 UTC. The granularity of the value depends on the underlying operating system and may be larger. For example, many operating systems measure time in units of tens of milliseconds.
 :
 : @param  prof:current-ms( value of type 
 : @return value of type xs:integer 
 :)
declare function  prof:current-ms() as xs:integer  external;

(:~ 
 : Returns the current value of the most precise available system timer in nanoseconds.
 :
 : @param  prof:current-ns( value of type 
 : @return value of type xs:integer 
 :)
declare function  prof:current-ns() as xs:integer  external;

(:~ 
 : Dumps a serialized representation of <code>$input</code> to <code>STDERR</code>, optionally prefixed with <code>$label</code>, and returns an empty sequence. If the GUI is used, the dumped result is shown in the <a href="https://docs.basex.org/wiki/Graphical_User_Interface#Visualizations">Info View</a>.
 :
 : @param  prof:dump($input value of type item()*
 : @return value of type empty-sequence() 
 :)
declare function  prof:dump($input as item()*) as empty-sequence()  external;

(:~ 
 : Dumps a serialized representation of <code>$input</code> to <code>STDERR</code>, optionally prefixed with <code>$label</code>, and returns an empty sequence. If the GUI is used, the dumped result is shown in the <a href="https://docs.basex.org/wiki/Graphical_User_Interface#Visualizations">Info View</a>.
 :
 : @param  prof:dump($input value of type item()*
 : @param $label value of type xs:string?
 : @return value of type empty-sequence() 
 :)
declare function  prof:dump($input as item()*, $label as xs:string?) as empty-sequence()  external;

(:~ 
 : Prints a list of all current local and global variable assignments to standard error or, if the GUI is used, to the Info View.<br/>As every query is optimized before being evaluated, not all of the original variables may be visible in the output. Moreover, many variables of function calls will disappear because functions are inlined. Function inlining can be turned off by setting <code><a href="https://docs.basex.org/wiki/Options#INLINELIMIT">INLINELIMIT</a></code> to <code>0</code>.
 :
 : @param  prof:variables( value of type 
 : @return value of type empty-sequence() 
 :)
declare function  prof:variables() as empty-sequence()  external;

(:~ 
 : Similar to <code>fn:trace($expr, $msg)</code>, but instead of a user-defined message, it emits the compile-time type and estimated result size of its argument.
 :
 : @param  prof:type($expr value of type item()*
 : @return value of type item()* 
 :)
declare function  prof:type($expr as item()*) as item()*  external;

(:~ 
 : Enforces Java garbage collection. If no <code>$count</code> is supplied, garbage will be collected once. Please note that this function should only be used for debugging purposes; in productive code, it is best to trust the garbage collecting strategies of Java.
 :
 : @param  prof:gc( value of type 
 : @return value of type empty-sequence() 
 :)
declare function  prof:gc() as empty-sequence()  external;

(:~ 
 : Enforces Java garbage collection. If no <code>$count</code> is supplied, garbage will be collected once. Please note that this function should only be used for debugging purposes; in productive code, it is best to trust the garbage collecting strategies of Java.
 :
 : @param  prof:gc($count value of type xs:integer
 : @return value of type empty-sequence() 
 :)
declare function  prof:gc($count as xs:integer) as empty-sequence()  external;

(:~ 
 : Returns the value of the specified runtime <code>$option</code>. The following options are available: <ul><li><code>max</code>: Maximum memory that the Java virtual machine will attempt to use.</li><li><code>total</code>: Total memory in the Java virtual machine (varies over time).</li><li><code>used</code>: Currently used memory (varies over time, will shrink after garbage collection).</li><li><code>processors</code>: number of processors available to the Java virtual machine.</li></ul>
 :
 : @param  prof:runtime($option value of type xs:string
 : @return value of type xs:integer 
 :)
declare function  prof:runtime($option as xs:string) as xs:integer  external;

(:~ 
 : Absorbs the specified <code>$input</code> and returns an empty sequence. This function is helpful if some (often nondeterministic or side-effecting) code needs to be evaluated and if the resulting value is not required.
 :
 : @param  prof:void($input value of type item()*
 : @return value of type empty-sequence() 
 :)
declare function  prof:void($input as item()*) as empty-sequence()  external;

(:~ 
 : Sleeps for the specified number of milliseconds.
 :
 : @param  prof:sleep($ms value of type xs:integer
 : @return value of type empty-sequence() 
 :)
declare function  prof:sleep($ms as xs:integer) as empty-sequence()  external;

(:~ 
 : Returns a human-readable representation of the specified <code>$number</code>.
 :
 : @param  prof:human($number value of type xs:integer
 : @return value of type xs:string 
 :)
declare function  prof:human($number as xs:integer) as xs:string  external;
