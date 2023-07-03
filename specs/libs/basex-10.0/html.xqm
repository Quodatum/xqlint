(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions for converting HTML to XML. Conversion will only take place if TagSoup is included in the classpath (see <a href="https://docs.basex.org/wiki/Parsers#HTML_Parser">HTML Parsing</a> for more details).
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/HTML_Module
 :)
module namespace html = "http://basex.org/modules/html";

(:~ 
 : Fetches the HTML document referred to by the given <code>$href</code>, converts it to XML and returns a document node. The <code>$options</code> argument can be used to set <a href="https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>.
 :
 : @param  html:doc($href value of type xs:string?
 : @return value of type document-node()? 
 : @error html:parse the input cannot be converted to XML.
 :)
declare function  html:doc($href as xs:string?) as document-node()?  external;

(:~ 
 : Fetches the HTML document referred to by the given <code>$href</code>, converts it to XML and returns a document node. The <code>$options</code> argument can be used to set <a href="https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>.
 :
 : @param  html:doc($href value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type document-node()? 
 : @error html:parse the input cannot be converted to XML.
 :)
declare function  html:doc($href as xs:string?, $options as map(*)?) as document-node()?  external;

(:~ 
 : Converts the HTML document specified by <code>$value</code> to XML and returns a document node:<br/> <ul><li>The input may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.</li><li>If the input is passed on in its binary representation, the HTML parser will try to choose the correct encoding automatically.</li></ul> <p>The <code>$options</code> argument can be used to set <a href="https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>. </p>
 :
 : @param  html:parse($value value of type xs:anyAtomicType
 : @return value of type document-node() 
 : @error html:parse the input cannot be converted to XML.
 :)
declare function  html:parse($value as xs:anyAtomicType) as document-node()  external;

(:~ 
 : Converts the HTML document specified by <code>$value</code> to XML and returns a document node:<br/> <ul><li>The input may be of type <code>xs:string</code>, <code>xs:base64Binary</code>, or <code>xs:hexBinary</code>.</li><li>If the input is passed on in its binary representation, the HTML parser will try to choose the correct encoding automatically.</li></ul> <p>The <code>$options</code> argument can be used to set <a href="https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>. </p>
 :
 : @param  html:parse($value value of type xs:anyAtomicType
 : @param $options value of type map(*)?
 : @return value of type document-node() 
 : @error html:parse the input cannot be converted to XML.
 :)
declare function  html:parse($value as xs:anyAtomicType, $options as map(*)?) as document-node()  external;

(:~ 
 : Returns the name of the applied HTML parser (currently: <code>TagSoup</code>). If an <i>empty string</i> is returned, TagSoup was not found in the classpath, and the input will be treated as well-formed XML.<br/>
 :
 : @param  html:parser( value of type 
 : @return value of type xs:string 
 :)
declare function  html:parser() as xs:string  external;
