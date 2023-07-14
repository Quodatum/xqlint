(:~ 
 : <font color="orangered">Updated with Version 10:</font> Renamed from <i>Strings Module</i> to <i>String Module</i>. The namespace URI has been updated as well.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/String_Module
 :)
module namespace string = "http://basex.org/modules/string";

(:~ 
 : Computes the <a href="https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance">Damerau-Levenshtein Distance</a> for two strings and returns a double value (<code>0.0</code> - <code>1.0</code>). The returned value is computed as follows:<br/> <ul> <li> <code>1.0</code> – distance / max(length of strings)</li> <li> <code>1.0</code> is returned if the strings are equal; <code>0.0</code> is returned if the strings are too different.</li> </ul>
 :
 : @param $string1 value of type xs:string
 : @param $string2 value of type xs:string
 : @return value of type xs:double
 :)
declare function string:levenshtein($string1 as xs:string, $string2 as xs:string) as xs:double external;

(:~ 
 : Computes the <a href="https://en.wikipedia.org/wiki/Soundex">Soundex</a> value for the specified string. The algorithm can be used to find and index English words with similar pronouncation.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 :)
declare function string:soundex($string as xs:string) as xs:string external;

(:~ 
 : Computes the <a href="https://de.wikipedia.org/wiki/K%C3%B6lner_Phonetik">Kölner Phonetik</a> value for the specified string. Similar to Soundex, the algorithm is used to find similarly pronounced words, but for the German language. As the first returned digit can be <code>0</code>, the value is returned as string.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 :)
declare function string:cologne-phonetic($string as xs:string) as xs:string external;

(:~ 
 : Returns a formatted string. The remaining arguments specified by <code>$items</code> are applied to the <code>$format</code> string, according to <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html#syntax">Java’s printf syntax</a>.
 :
 : @param $format value of type xs:string
 : @param $items value of type item(
 : @return value of type xs:string
 : @error string:format The specified format is not valid.
 :)
declare function string:format($format as xs:string, $items as item()) as xs:string external;

(:~ 
 : Returns a single carriage return character (<code>&amp;#13;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function string:cr() as xs:string external;

(:~ 
 : Returns a single newline character (<code>&amp;#10;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function string:nl() as xs:string external;

(:~ 
 : Returns a single tabulator character (<code>&amp;#9;</code>).
 :
 : @param  value of type xs:string
 : @return value of type xs:string
 :)
declare function string:tab() as xs:string external;
