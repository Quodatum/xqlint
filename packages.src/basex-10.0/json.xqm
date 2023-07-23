(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to parse and serialize JSON data <a href="https://www.json.org/">JSON (JavaScript Object Notation)</a> is a popular data exchange format for applications written in JavaScript. As there are notable differences between JSON and XML, or XQuery data types, no mapping exists that guarantees a lossless, bidirectional conversion between JSON and XML. For this reason, we offer various mappings, all of which are suited to different use cases.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/JSON_Module
 :)
module namespace json = "http://basex.org/modules/json";

(:~ 
 : Fetches the JSON document referred to by the given <code>$uri</code> and converts it to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param $uri value of type xs:string
 : @return value of type item()?
 : @error json:parse the specified input cannot be parsed as JSON document.
 : @error json:options the specified options are conflicting.
 :)
declare function json:doc($uri as xs:string) as item()? external;

(:~ 
 : Fetches the JSON document referred to by the given <code>$uri</code> and converts it to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param $uri value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type item()?
 : @error json:parse the specified input cannot be parsed as JSON document.
 : @error json:options the specified options are conflicting.
 :)
declare function json:doc($uri as xs:string, $options as map(*)?) as item()? external;

(:~ 
 : Converts the JSON <code>$string</code> to an XQuery value. If the input can be successfully parsed, it can be serialized back to the original JSON representation. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param $string value of type xs:string?
 : @return value of type item()?
 : @error json:parse the specified input cannot be parsed as JSON document.
 : @error json:options the specified options are conflicting.
 :)
declare function json:parse($string as xs:string?) as item()? external;

(:~ 
 : Converts the JSON <code>$string</code> to an XQuery value. If the input can be successfully parsed, it can be serialized back to the original JSON representation. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param $string value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type item()?
 : @error json:parse the specified input cannot be parsed as JSON document.
 : @error json:options the specified options are conflicting.
 :)
declare function json:parse($string as xs:string?, $options as map(*)?) as item()? external;

(:~ 
 : Serializes the specified <code>$input</code> as JSON, using the specified <code>$options</code>, and returns the result as string: <ul> <li>The input is expected to conform to the results that are created by <code> <a href="https://docs.basex.org/wiki/JSON_Module#json:parse">json:parse</a> </code>.</li> <li>Non-conforming items will be serialized as specified in the <a href="https://docs.basex.org/wiki/XQuery_3.1#JSON_Serialization">json output method</a> of the official recommendation.</li> </ul> <p>Values can also be serialized as JSON with the standard <a href="https://docs.basex.org/wiki/Serialization">Serialization</a> feature of XQuery: </p> <ul> <li>The parameter <code>method</code> needs to be set to <code>json</code>, and</li> <li>the options presented in this article need to be assigned to the <code>json</code> parameter.</li> </ul>
 :
 : @param $input value of type item()?
 : @return value of type xs:string
 : @error json:serialize the specified node cannot be serialized as JSON document.
 :)
declare function json:serialize($input as item()?) as xs:string external;

(:~ 
 : Serializes the specified <code>$input</code> as JSON, using the specified <code>$options</code>, and returns the result as string: <ul> <li>The input is expected to conform to the results that are created by <code> <a href="https://docs.basex.org/wiki/JSON_Module#json:parse">json:parse</a> </code>.</li> <li>Non-conforming items will be serialized as specified in the <a href="https://docs.basex.org/wiki/XQuery_3.1#JSON_Serialization">json output method</a> of the official recommendation.</li> </ul> <p>Values can also be serialized as JSON with the standard <a href="https://docs.basex.org/wiki/Serialization">Serialization</a> feature of XQuery: </p> <ul> <li>The parameter <code>method</code> needs to be set to <code>json</code>, and</li> <li>the options presented in this article need to be assigned to the <code>json</code> parameter.</li> </ul>
 :
 : @param $input value of type item()?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 : @error json:serialize the specified node cannot be serialized as JSON document.
 :)
declare function json:serialize($input as item()?, $options as map(*)?) as xs:string external;
