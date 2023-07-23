(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to handle ZIP archives. The contents of ZIP files can be extracted and listed, and new archives can be created. The module is based on the <a href="http://expath.org/spec/zip">EXPath ZIP Module</a>. Please note that the ZIP module is not being actively maintained but is still distributed for compatibility with older applications. We recommend you use the <a href="http://docs.basex.org/wiki/Archive_Module">Archive Module</a> wherever possible.
 :
 : @author BaseX Team
 : @see /wiki/ZIP_Module
 :)
module namespace zip = "http://expath.org/ns/zip";
declare namespace experr = "http://expath.org/ns/error";

(:~ 
 : Extracts the binary file at <code>$path</code> within the ZIP file located at <code>$uri</code> and returns it as an <code>xs:base64Binary</code> item.
 :
 : @param $uri value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:base64Binary
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:binary-entry($uri as xs:string, $path as xs:string) as xs:base64Binary external;

(:~ 
 : Extracts the text file at <code>$path</code> within the ZIP file located at <code>$uri</code> and returns it as an <code>xs:string</code> item.<br/>An optional encoding can be specified via <code>$encoding</code>.
 :
 : @param $uri value of type xs:string
 : @param $path value of type xs:string
 : @return value of type xs:string
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:text-entry($uri as xs:string, $path as xs:string) as xs:string external;

(:~ 
 : Extracts the text file at <code>$path</code> within the ZIP file located at <code>$uri</code> and returns it as an <code>xs:string</code> item.<br/>An optional encoding can be specified via <code>$encoding</code>.
 :
 : @param $uri value of type xs:string
 : @param $path value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:text-entry($uri as xs:string, $path as xs:string, $encoding as xs:string) as xs:string external;

(:~ 
 : Extracts the XML file at <code>$path</code> within the ZIP file located at <code>$uri</code> and returns it as a document node.
 :
 : @param $uri value of type xs:string
 : @param $path value of type xs:string
 : @return value of type document-node()
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:xml-entry($uri as xs:string, $path as xs:string) as document-node() external;

(:~ 
 : Extracts the HTML file at <code>$path</code> within the ZIP file located at <code>$uri</code> and returns it as a document node. The file is converted to XML first if <a href="http://docs.basex.org/wiki/Parsers#HTML_Parser">Tagsoup</a> is found in the classpath.
 :
 : @param $uri value of type xs:string
 : @param $path value of type xs:string
 : @return value of type document-node()
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:html-entry($uri as xs:string, $path as xs:string) as document-node() external;

(:~ 
 : Generates an <a href="http://expath.org/spec/zip#spec-file-handling-elements-sect">ZIP XML Representation</a> of the hierarchical structure of the ZIP file located at <code>$uri</code> and returns it as an element node. The file contents are not returned by this function.
 :
 : @param $uri value of type xs:string
 : @return value of type element(zip:file)
 : @error experr:ZIP0001 the specified path does not exist.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:entries($uri as xs:string) as element(zip:file) external;

(:~ 
 : Creates a new ZIP archive with the characteristics described by <code>$zip</code>, the <a href="http://expath.org/spec/zip#spec-file-handling-elements-sect">ZIP XML Representation</a>.
 :
 : @param $zip value of type element(zip:file)
 : @error experr:ZIP0001 an addressed file does not exist.
 : @error experr:ZIP0002 entries in the ZIP archive description are unknown, missing, or invalid.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:zip-file($zip as element(zip:file)) as empty-sequence() external;

(:~ 
 : Updates an existing ZIP archive or creates a modifed copy, based on the characteristics described by <code>$zip</code>, the <a href="http://expath.org/spec/zip#spec-file-handling-elements-sect">ZIP XML Representation</a>. The <code>$output</code> argument is the URI where the modified ZIP file is copied to.
 :
 : @param $zip value of type element(zip:file)
 : @param $output value of type xs:string
 : @error experr:ZIP0001 an addressed file does not exist.
 : @error experr:ZIP0002 entries in the ZIP archive description are unknown, missing, or invalid.
 : @error experr:ZIP0003 the operation fails for some other reason.
 :)
declare function zip:update-entries($zip as element(zip:file), $output as xs:string) as empty-sequence() external;
