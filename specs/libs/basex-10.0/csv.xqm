(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains a single function to parse CSV input. <a href="https://en.wikipedia.org/wiki/Comma-separated_values">CSV</a> (comma-separated values) is a popular representation for tabular data, exported e. g. from Excel.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/CSV_Module
 :)
module namespace csv = "http://basex.org/modules/csv";

(:~ 
 : Fetches the CSV document referred to by the given <code>$href</code> and converts it to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param  csv:doc($href value of type xs:string?
 : @return value of type item()? 
 : @error csv:parse the specified input cannot be parsed as CSV document.
 : @error csv:options the specified options are conflicting.
 :)
declare function  csv:doc($href as xs:string?) as item()?  external;

(:~ 
 : Fetches the CSV document referred to by the given <code>$href</code> and converts it to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param  csv:doc($href value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type item()? 
 : @error csv:parse the specified input cannot be parsed as CSV document.
 : @error csv:options the specified options are conflicting.
 :)
declare function  csv:doc($href as xs:string?, $options as map(*)?) as item()?  external;

(:~ 
 : Converts the CSV <code>$value</code> to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param  csv:parse($value value of type xs:string?
 : @return value of type item()? 
 : @error csv:parse the specified input cannot be parsed as CSV document.
 :)
declare function  csv:parse($value as xs:string?) as item()?  external;

(:~ 
 : Converts the CSV <code>$value</code> to an XQuery value. The <code>$options</code> argument can be used to control the way the input is converted.
 :
 : @param  csv:parse($value value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type item()? 
 : @error csv:parse the specified input cannot be parsed as CSV document.
 :)
declare function  csv:parse($value as xs:string?, $options as map(*)?) as item()?  external;

(:~ 
 : Serializes the specified <code>$input</code> as CSV, using the specified <code>$options</code>, and returns the result as string. <p>Values can also be serialized as CSV with the standard <a href="https://docs.basex.org/wiki/Serialization">Serialization</a> feature of XQuery: </p> <ul><li>The parameter <code>method</code> needs to be set to <code>csv</code>, and</li><li>the options presented in this article need to be assigned to the <code>csv</code> parameter.</li></ul>
 :
 : @param  csv:serialize($input value of type item()?
 : @return value of type xs:string 
 : @error csv:serialize the input cannot be serialized.
 :)
declare function  csv:serialize($input as item()?) as xs:string  external;

(:~ 
 : Serializes the specified <code>$input</code> as CSV, using the specified <code>$options</code>, and returns the result as string. <p>Values can also be serialized as CSV with the standard <a href="https://docs.basex.org/wiki/Serialization">Serialization</a> feature of XQuery: </p> <ul><li>The parameter <code>method</code> needs to be set to <code>csv</code>, and</li><li>the options presented in this article need to be assigned to the <code>csv</code> parameter.</li></ul>
 :
 : @param  csv:serialize($input value of type item()?
 : @param $options value of type map(*)?
 : @return value of type xs:string 
 : @error csv:serialize the input cannot be serialized.
 :)
declare function  csv:serialize($input as item()?, $options as map(*)?) as xs:string  external;
