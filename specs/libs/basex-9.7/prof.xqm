(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains various functions to test and profile code, and to dump information to standard output.
 :
 : @author BaseX Team
 : @see /wiki/Profiling_Module
 :)
module namespace prof = "http://basex.org/modules/prof";

(:~ 
 : Measures the execution time and memory consumption required for evaluating the specified <code>$expression</code> and returns a map with the results. The following <code>$options</code> are available: <ul> <li> <code>memory</code>: Include memory consumption in result (unit: bytes; default: true). </li> <li> <code>time</code>: Include execution time in result (unit: milliseconds; default: true). </li> <li> <code>value</code>: Include value in result (default: true). </li> </ul> <p>Helpful notes: </p> <ul> <li> If you are not interested in some of the returned results, you should disable them to save time and memory. </li> <li> Profiling might change the execution behavior of your code: An expression that might be executed iteratively will be cached by the profiling function. </li> <li> If a value has a compact internal representation, memory consumption will be very low, even if the serialized result may consume much more memory. </li> <li> Please note that memory profiling is only approximative, so it can be quite misleading. If the memory option is enabled, main-memory will be garbage-collected before and after evaluation to improve the quality of the measurement. </li> </ul>
 :
 : @param $expression value of type item()
 : @return value of type item()*
 :)
declare function prof:track($expression as item()) as item()* external;

(:~ 
 : Measures the execution time and memory consumption required for evaluating the specified <code>$expression</code> and returns a map with the results. The following <code>$options</code> are available: <ul> <li> <code>memory</code>: Include memory consumption in result (unit: bytes; default: true). </li> <li> <code>time</code>: Include execution time in result (unit: milliseconds; default: true). </li> <li> <code>value</code>: Include value in result (default: true). </li> </ul> <p>Helpful notes: </p> <ul> <li> If you are not interested in some of the returned results, you should disable them to save time and memory. </li> <li> Profiling might change the execution behavior of your code: An expression that might be executed iteratively will be cached by the profiling function. </li> <li> If a value has a compact internal representation, memory consumption will be very low, even if the serialized result may consume much more memory. </li> <li> Please note that memory profiling is only approximative, so it can be quite misleading. If the memory option is enabled, main-memory will be garbage-collected before and after evaluation to improve the quality of the measurement. </li> </ul>
 :
 : @param $expression value of type item()
 : @param $options value of type map(*)?
 : @return value of type item()*
 :)
declare function prof:track($expression as item(), $options as map(*)?) as item()* external;

(:~ 
 : Measures the time needed to evaluate <code>$expr</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <a href="http://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a> for further notes.
 :
 : @param $expr value of type item()
 : @return value of type item()*
 :)
declare function prof:time($expr as item()) as item()* external;

(:~ 
 : Measures the time needed to evaluate <code>$expr</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <a href="http://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a> for further notes.
 :
 : @param $expr value of type item()
 : @param $label value of type xs:string
 : @return value of type item()*
 :)
declare function prof:time($expr as item(), $label as xs:string) as item()* external;

(:~ 
 : Measures the memory allocated by evaluating <code>$expr</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <a href="http://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a> for further notes.
 :
 : @param $expr value of type item()
 : @return value of type item()*
 :)
declare function prof:memory($expr as item()) as item()* external;

(:~ 
 : Measures the memory allocated by evaluating <code>$expr</code> and outputs a string to standard error or, if the GUI is used, to the Info View. An optional <code>$label</code> may be specified to tag the profiling result. See <a href="http://docs.basex.org/wiki/Profiling_Module#prof:track">prof:track</a> for further notes.
 :
 : @param $expr value of type item()
 : @param $label value of type xs:string
 : @return value of type item()*
 :)
declare function prof:memory($expr as item(), $label as xs:string) as item()* external;

(:~ 
 : Returns the number of milliseconds passed since 1970/01/01 UTC. The granularity of the value depends on the underlying operating system and may be larger. For example, many operating systems measure time in units of tens of milliseconds.
 :
 : @return value of type xs:integer
 :)
declare function prof:current-ms() as xs:integer external;

(:~ 
 : Returns the current value of the most precise available system timer in nanoseconds.
 :
 : @return value of type xs:integer
 :)
declare function prof:current-ns() as xs:integer external;

(:~ 
 : Dumps a serialized representation of <code>$expr</code> to <code>STDERR</code>, optionally prefixed with <code>$label</code>, and returns an empty sequence. If the GUI is used, the dumped result is shown in the <a href="http://docs.basex.org/wiki/Graphical_User_Interface#Visualizations">Info View</a>.
 :
 : @param $expr value of type item()
 :)
declare function prof:dump($expr as item()) as empty-sequence() external;

(:~ 
 : Dumps a serialized representation of <code>$expr</code> to <code>STDERR</code>, optionally prefixed with <code>$label</code>, and returns an empty sequence. If the GUI is used, the dumped result is shown in the <a href="http://docs.basex.org/wiki/Graphical_User_Interface#Visualizations">Info View</a>.
 :
 : @param $expr value of type item()
 : @param $label value of type xs:string
 :)
declare function prof:dump($expr as item(), $label as xs:string) as empty-sequence() external;

(:~ 
 : Prints a list of all current local and global variable assignments to standard error or, if the GUI is used, to the Info View.<br/>As every query is optimized before being evaluated, not all of the original variables may be visible in the output. Moreover, many variables of function calls will disappear because functions are inlined. Function inlining can be turned off by setting the <a href="http://docs.basex.org/wiki/Options#INLINELIMIT">INLINELIMIT</a> option to <code>0</code>.
 :)
declare function prof:variables() as empty-sequence() external;

(:~ 
 : Similar to <code>fn:trace($expr, $msg)</code>, but instead of a user-defined message, it emits the compile-time type and estimated result size of its argument.
 :
 : @param $expr value of type item()*
 : @return value of type item()*
 :)
declare function prof:type($expr as item()*) as item()* external;

(:~ 
 : Swallows all items of the specified <code>$value</code> and returns an empty sequence. This function is helpful if some code needs to be evaluated and if the actual result is irrelevant.
 :
 : @param $value value of type item()*
 :)
declare function prof:void($value as item()*) as empty-sequence() external;

(:~ 
 : Sleeps for the specified number of milliseconds.
 :
 : @param $ms value of type xs:integer
 :)
declare function prof:sleep($ms as xs:integer) as empty-sequence() external;

(:~ 
 : Returns a human-readable representation of the specified <code>$number</code>.
 :
 : @param $number value of type xs:integer
 : @return value of type xs:string
 :)
declare function prof:human($number as xs:integer) as xs:string external;
