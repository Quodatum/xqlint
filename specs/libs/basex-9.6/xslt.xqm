(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions and variables to perform XSL transformations. By default, this module uses Java’s XSLT 1.0 Xalan implementation to transform documents. XSLT 3.0 will be enabled if Version 9.x of the <a href="http://www.saxonica.com/">Saxon XSLT Processor</a> (<code>saxon9he.jar</code>, <code>saxon9pe.jar</code>, <code>saxon9ee.jar</code>) is found in the classpath (see <a href="http://docs.basex.org/wiki/Startup#Distributions">Distributions</a> for more details. A custom transformer can be specified by overwriting the system property <code>javax.xml.transform.TransformerFactory</code>, as shown in the following Java example:
 :
 : @author BaseX Team
 : @see /wiki/XSLT_Module
 :)
module namespace xslt = "http://basex.org/modules/xslt";

(:~ 
 : Returns the name of the applied XSLT processor, or the path to a custom implementation (currently: "Java", "Saxon EE", "Saxon PE", or "Saxon HE").<br/>
 :
 : @return value of type xs:string
 :)
declare function xslt:processor() as xs:string external;

(:~ 
 : Returns the supported XSLT version (currently: "1.0" or "3.0"). "Unknown" is returned if a custom implementation was chosen.<br/>
 :
 : @return value of type xs:string
 :)
declare function xslt:version() as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI, </li> <li> <code>xs:string</code>, containing the document in its string representation, or </li> <li> <code>node()</code>, containing the document itself. </li> </ul> <p>Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available (currently, it is just a single one): </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption) </li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item()) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI, </li> <li> <code>xs:string</code>, containing the document in its string representation, or </li> <li> <code>node()</code>, containing the document itself. </li> </ul> <p>Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available (currently, it is just a single one): </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption) </li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item(), $params as map(*)?) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI, </li> <li> <code>xs:string</code>, containing the document in its string representation, or </li> <li> <code>node()</code>, containing the document itself. </li> </ul> <p>Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available (currently, it is just a single one): </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption) </li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $args value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item(), $args as map(*)?, $options as map(*)?) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item()) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item(), $params as map(*)?) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item(), $params as map(*)?, $options as map(*)?) as xs:string external;
