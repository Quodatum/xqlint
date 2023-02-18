(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for string computations.
 :
 : @author BaseX Team
 : @see /wiki/Strings_Module
 :)
module namespace strings = "http://basex.org/modules/strings";

(:~ 
 : Computes the <a href="https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance">Damerau-Levenshtein Distance</a> for two strings and returns a double value (<code>0.0</code> - <code>1.0</code>). The returned value is computed as follows:<br/> <ul> <li> <code>1.0</code> – distance / max(length of strings) </li> <li> <code>1.0</code> is returned if the strings are equal; <code>0.0</code> is returned if the strings are too different. </li> </ul>
 :
 : @param $string1 value of type xs:string
 : @param $string2 value of type xs:string
 : @return value of type xs:double
 :)
declare function strings:levenshtein($string1 as xs:string, $string2 as xs:string) as xs:double external;

(:~ 
 : Computes the <a href="https://en.wikipedia.org/wiki/Soundex">Soundex</a> value for the specified string. The algorithm can be used to find and index English words with similar pronouncation.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 :)
declare function strings:soundex($string as xs:string) as xs:string external;

(:~ 
 : Computes the <a href="https://de.wikipedia.org/wiki/K%C3%B6lner_Phonetik">Kölner Phonetik</a> value for the specified string. Similar to Soundex, the algorithm is used to find similarly pronounced words, but for the German language. As the first returned digit can be <code>0</code>, the value is returned as string.
 :
 : @param $string value of type xs:string
 : @return value of type xs:string
 :)
declare function strings:cologne-phonetic($string as xs:string) as xs:string external;
