(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220704162159/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions and variables to perform XSL transformations.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module
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
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI,</li> <li> <code>xs:string</code>, containing the document in its string representation, or</li> <li> <code>node()</code>, containing the document itself.</li> </ul> <p> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220704162159/https://docs.basex.org/wiki/Catalog_Resolver">XML Catalog files</a> will be considered when resolving URIs. Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available: </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption)</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item()) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI,</li> <li> <code>xs:string</code>, containing the document in its string representation, or</li> <li> <code>node()</code>, containing the document itself.</li> </ul> <p> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220704162159/https://docs.basex.org/wiki/Catalog_Resolver">XML Catalog files</a> will be considered when resolving URIs. Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available: </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption)</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item(), $params as map(*)?) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as node. <code>$input</code> and <code>$stylesheet</code> can be specified as<br/> <ul> <li> <code>xs:string</code>, containing the stylesheet URI,</li> <li> <code>xs:string</code>, containing the document in its string representation, or</li> <li> <code>node()</code>, containing the document itself.</li> </ul> <p> <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220704162159/https://docs.basex.org/wiki/Catalog_Resolver">XML Catalog files</a> will be considered when resolving URIs. Variables can be bound to a stylesheet via <code>$args</code> (only strings are supported when using XSLT 3.0 and Saxon). The following <code>$options</code> are available: </p> <ul> <li> <code>cache</code>: cache XSLT transformer (speeds up repeated transformations, but increases memory consumption)</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $args value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type node()
 :)
declare function xslt:transform($input as item(), $stylesheet as item(), $args as map(*)?, $options as map(*)?) as node() external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item()) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item(), $params as map(*)?) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns the result as string. The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-text($input as item(), $stylesheet as item(), $params as map(*)?, $options as map(*)?) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns a map with the following keys: <ul> <li> <code>result</code>: The transformation result: One or more document nodes, or (if the result cannot be converted to XML) an item of type <code>xs:untypedAtomic</code>.</li> <li> <code>messages</code>: Informational output generated by <code>xsl:message</code> elements: A sequence of arrays. The arrays consist of XML elements, or (for those messages that cannot be converted to XML) items of type <code>xs:untypedAtomic</code>.</li> </ul> <p>The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>For the moment, messages can only be returned with recent versions of Saxon. </p> <ul> <li> <code>error</code> (optional): An error string, which would be raised as an error by the other functions of this module.</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @return value of type xs:string
 :)
declare function xslt:transform-report($input as item(), $stylesheet as item()) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns a map with the following keys: <ul> <li> <code>result</code>: The transformation result: One or more document nodes, or (if the result cannot be converted to XML) an item of type <code>xs:untypedAtomic</code>.</li> <li> <code>messages</code>: Informational output generated by <code>xsl:message</code> elements: A sequence of arrays. The arrays consist of XML elements, or (for those messages that cannot be converted to XML) items of type <code>xs:untypedAtomic</code>.</li> </ul> <p>The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>For the moment, messages can only be returned with recent versions of Saxon. </p> <ul> <li> <code>error</code> (optional): An error string, which would be raised as an error by the other functions of this module.</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-report($input as item(), $stylesheet as item(), $params as map(*)?) as xs:string external;

(:~ 
 : Transforms the document specified by <code>$input</code>, using the XSLT template specified by <code>$stylesheet</code>, and returns a map with the following keys: <ul> <li> <code>result</code>: The transformation result: One or more document nodes, or (if the result cannot be converted to XML) an item of type <code>xs:untypedAtomic</code>.</li> <li> <code>messages</code>: Informational output generated by <code>xsl:message</code> elements: A sequence of arrays. The arrays consist of XML elements, or (for those messages that cannot be converted to XML) items of type <code>xs:untypedAtomic</code>.</li> </ul> <p>The semantics of <code>$params</code> and <code>$options</code> is the same as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/XSLT_Module#xslt:transform">xslt:transform</a>.<br/>For the moment, messages can only be returned with recent versions of Saxon. </p> <ul> <li> <code>error</code> (optional): An error string, which would be raised as an error by the other functions of this module.</li> </ul>
 :
 : @param $input value of type item()
 : @param $stylesheet value of type item()
 : @param $params value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 :)
declare function xslt:transform-report($input as item(), $stylesheet as item(), $params as map(*)?, $options as map(*)?) as xs:string external;
