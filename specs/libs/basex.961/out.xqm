(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for simplifying formatted data output.
 :
 : @author BaseX Team
 : @see /wiki/Output_Module
 :)
module namespace out = "http://basex.org/modules/out";

(:~ 
 : Returns a single carriage return character (<code>&amp;#13;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function out:cr() as xs:string external;

(:~ 
 : Returns a single newline character (<code>&amp;#10;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function out:nl() as xs:string external;

(:~ 
 : Returns a single tabulator character (<code>&amp;#9;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function out:tab() as xs:string external;

(:~ 
 : Returns a formatted string. The remaining arguments specified by <code>$items</code> are applied to the <code>$format</code> string, according to <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html#syntax">Java’s printf syntax</a>.
 :
 : @param $format value of type xs:string
 : @param $items value of type item(
 : @return value of type xs:string
 : @error out:format The specified format is not valid.
 :)
declare function out:format($format as xs:string, $items as item() ...) as xs:string external;
