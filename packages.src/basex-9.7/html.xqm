(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions for converting HTML to XML. Conversion will only take place if TagSoup is included in the classpath (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Parsers#HTML_Parser">HTML Parsing</a> for more details).
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/HTML_Module
 :)
module namespace html = "http://basex.org/modules/html";

(:~ 
 : Returns the name of the applied HTML parser (currently: <code>TagSoup</code>). If an <i>empty string</i> is returned, TagSoup was not found in the classpath, and the input will be treated as well-formed XML.<br/>
 :
 : @return value of type xs:string
 :)
declare function html:parser() as xs:string external;

(:~ 
 : Converts the HTML document specified by <code>$input</code> to XML and returns a document node:<br/> <ul> <li>The input may either be a string or a binary item (xs:hexBinary, xs:base64Binary).</li> <li>If the input is passed on in its binary representation, the HTML parser will try to automatically choose the correct encoding.</li> </ul> <p>The <code>$options</code> argument can be used to set <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>. </p>
 :
 : @param $input value of type xs:anyAtomicType
 : @return value of type document-node()
 : @error html:parse the input cannot be converted to XML.
 :)
declare function html:parse($input as xs:anyAtomicType) as document-node() external;

(:~ 
 : Converts the HTML document specified by <code>$input</code> to XML and returns a document node:<br/> <ul> <li>The input may either be a string or a binary item (xs:hexBinary, xs:base64Binary).</li> <li>If the input is passed on in its binary representation, the HTML parser will try to automatically choose the correct encoding.</li> </ul> <p>The <code>$options</code> argument can be used to set <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>. </p>
 :
 : @param $input value of type xs:anyAtomicType
 : @param $options value of type map(*)?
 : @return value of type document-node()
 : @error html:parse the input cannot be converted to XML.
 :)
declare function html:parse($input as xs:anyAtomicType, $options as map(*)?) as document-node() external;

(:~ 
 : Fetches the HTML document referred to by the given <code>$uri</code>, converts it to XML and returns a document node. The <code>$options</code> argument can be used to set <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>.
 :
 : @param $uri value of type xs:string?
 : @return value of type document-node()?
 : @error html:parse the input cannot be converted to XML.
 :)
declare function html:doc($uri as xs:string?) as document-node()? external;

(:~ 
 : Fetches the HTML document referred to by the given <code>$uri</code>, converts it to XML and returns a document node. The <code>$options</code> argument can be used to set <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231029/https://docs.basex.org/wiki/Parsers#Options">TagSoup Options</a>.
 :
 : @param $uri value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type document-node()?
 : @error html:parse the input cannot be converted to XML.
 :)
declare function html:doc($uri as xs:string?, $options as map(*)?) as document-node()? external;
