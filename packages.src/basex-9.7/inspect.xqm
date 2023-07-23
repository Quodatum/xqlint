(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231026/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for extracting internal information about modules and functions and generating documentation.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Inspection_Module
 :)
module namespace inspect = "http://basex.org/modules/inspect";
declare namespace xqdoc = "http://www.xqdoc.org/1.0";

(:~ 
 : Returns function items for all user-defined functions (both public and private) that are known in the current query context. If a <code>$uri</code> is specified, the specified resource will be retrieved as string and compiled, and its functions will be added to the query context and returned to the user. A relative URI will be resolved against the static base URI of the query.
 :
 : @return value of type function(*)*
 : @error inspect:parse Error while parsing a module.
 :)
declare function inspect:functions() as function(*)* external;

(:~ 
 : Returns function items for all user-defined functions (both public and private) that are known in the current query context. If a <code>$uri</code> is specified, the specified resource will be retrieved as string and compiled, and its functions will be added to the query context and returned to the user. A relative URI will be resolved against the static base URI of the query.
 :
 : @param $uri value of type xs:string
 : @return value of type function(*)*
 : @error inspect:parse Error while parsing a module.
 :)
declare function inspect:functions($uri as xs:string) as function(*)* external;

(:~ 
 : Returns the annotations of the specified <code>$function</code> in a map.
 :
 : @param $function value of type function(*)?
 : @return value of type map(xs:QName, xs:anyAtomicType*)
 :)
declare function inspect:function-annotations($function as function(*)?) as map(xs:QName, xs:anyAtomicType*) external;

(:~ 
 : Returns a component of the <a href="https://web.archive.org/web/20220623231026/https://www.w3.org/TR/xquery-31/#dt-static-context">static context</a> of a <code>$function</code> with the specified <code>$name</code>. If no function is supplied, the current static context is considered.<br/>The following components can be requested: <ul> <li> <code>base-uri</code>: Static base URI.</li> <li> <code>namespaces</code>: Prefix/URI map with all statically known namespaces.</li> <li> <code>element-namespace</code>: Default element/type namespace URI, or an empty sequence if it is absent.</li> <li> <code>function-namespace</code>: Default function namespace URI, or an empty sequence if it is absent.</li> <li> <code>collation</code>: URI of the default collation.</li> <li> <code>ordering</code>: Ordering mode (<code>ordered</code>/<code>unordered</code>)</li> <li> <code>construction</code>: Construction mode (<code>preserve</code>/<code>strip</code>)</li> <li> <code>default-order-empty</code>: Default order for empty sequences (<code>greatest</code>/<code>least</code>)</li> <li> <code>boundary-space</code>: Boundary-space policy (<code>preserve</code>/<code>strip</code>)</li> <li> <code>copy-namespaces</code>: Copy-namespaces mode (<code>inherit</code>/<code>no-inherit</code>, <code>preserve</code>/<code>no-preserve</code>)</li> <li> <code>decimal-formats</code>: Nested map with all statically known decimal formats</li> </ul>
 :
 : @param $function value of type function(*)?
 : @param $name value of type xs:string
 : @return value of type item()*
 : @error inspect:unknown The specified component does not exist.
 :)
declare function inspect:static-context($function as function(*)?, $name as xs:string) as item()* external;

(:~ 
 : Returns a string representation of the type of a <code>$value</code>: <ul> <li>The string includes the occurrence indicator.</li> <li>The type of functions and nodes may be stricter than the returned type.</li> <li>For type checking, the standard expressions <code>typeswitch</code> and <code>instance of</code> should be used instead.</li> </ul> <p>The following <code>$options</code> are available: </p> <ul> <li> <code>item</code>: If enabled, only the item type is returned and the occurrence indicator is omitted. The default is <code>false()</code>.</li> <li> <code>mode</code>: If <code>value</code> is specified, the assigned type of the result value is returned. With <code>expression</code> the type of the input expression is returned (please note that the original expression may already have been rewritten at compile-time). With <code>computed</code>, the exact value is computed at runtime, based on the expression and the result value. The default is <code>computed</code>.</li> </ul>
 :
 : @param $value value of type item()*
 : @return value of type xs:string
 :)
declare function inspect:type($value as item()*) as xs:string external;

(:~ 
 : Returns a string representation of the type of a <code>$value</code>: <ul> <li>The string includes the occurrence indicator.</li> <li>The type of functions and nodes may be stricter than the returned type.</li> <li>For type checking, the standard expressions <code>typeswitch</code> and <code>instance of</code> should be used instead.</li> </ul> <p>The following <code>$options</code> are available: </p> <ul> <li> <code>item</code>: If enabled, only the item type is returned and the occurrence indicator is omitted. The default is <code>false()</code>.</li> <li> <code>mode</code>: If <code>value</code> is specified, the assigned type of the result value is returned. With <code>expression</code> the type of the input expression is returned (please note that the original expression may already have been rewritten at compile-time). With <code>computed</code>, the exact value is computed at runtime, based on the expression and the result value. The default is <code>computed</code>.</li> </ul>
 :
 : @param $value value of type item()*
 : @param $options value of type map(*)
 : @return value of type xs:string
 :)
declare function inspect:type($value as item()*, $options as map(*)) as xs:string external;

(:~ 
 : Inspects the specified <code>$function</code> and returns an element that describes its structure. The output of this function is similar to eXist-db’s <a href="https://web.archive.org/web/20220623231026/https://exist-db.org/exist/apps/fundocs/view.html?uri=http://exist-db.org/xquery/inspection&amp;location=java:org.exist.xquery.functions.inspect.InspectionModule">inspect:inspect-function</a> function.
 :
 : @param $function value of type function(*)
 : @return value of type element(function)
 :)
declare function inspect:function($function as function(*)) as element(function) external;

(:~ 
 : Generates an element that describes all variables and functions in the current query context.
 :
 : @return value of type element(context)
 :)
declare function inspect:context() as element(context) external;

(:~ 
 : Retrieves the resource located at the specified <code>$uri</code>, parses it as XQuery module, and generates an element that describes the module's structure. A relative URI will be resolved against the static base URI of the query.
 :
 : @param $uri value of type xs:string
 : @return value of type element(module)
 : @error inspect:parse Error while parsing a module.
 :)
declare function inspect:module($uri as xs:string) as element(module) external;

(:~ 
 : Retrieves the resource located at the specified <code>$uri</code>, parses it as XQuery module, and generates an xqDoc element. A relative URI will be resolved against the static base URI of the query.<br/> <a href="https://web.archive.org/web/20220623231026/http://xqdoc.org/">xqDoc</a> provides a simple vendor-neutral solution for generating documentation from XQuery modules. The documentation conventions have been inspired by the JavaDoc standard. Documentation comments begin with <code>(:~</code> and end with <code>:)</code>, and tags start with <code>@</code>. xqDoc comments can be specified for main and library modules and variable and function declarations.<br/> <p>We have slightly extended the xqDoc conventions to do justice to more recent versions of XQuery (Schema: <a href="https://web.archive.org/web/20220623231026/https://files.basex.org/etc/xqdoc-1.1.30052013.xsd">xqdoc-1.1.30052013.xsd</a>):<br/> </p> <ul> <li>an <code>&lt;xqdoc:annotations/&gt;</code> node is added to each variable or function that uses annotations. The xqdoc:annotation child nodes may have additional <code>xqdoc:literal</code> elements with <code>type</code> attributes (xs:string, xs:integer, xs:decimal, xs:double) and values.</li> <li>a single <code>&lt;xqdoc:namespaces/&gt;</code> node is added to the root element, which summarizes all prefixes and namespace URIs used or declared in the module.</li> <li>name and type elements are added to variables.</li> </ul>
 :
 : @param $uri value of type xs:string
 : @return value of type element(xqdoc:xqdoc)
 : @error inspect:parse Error while parsing a module.
 :)
declare function inspect:xqdoc($uri as xs:string) as element(xqdoc:xqdoc) external;
