(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions related to file system operations, such as listing, reading, or writing files.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/File_Module
 :)
module namespace file = "http://expath.org/ns/file";
declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

(:~ 
 : Lists all files and directories found in the specified <code>$dir</code>. The returned paths are relative to the provided path.<br/>If <code>$recursive</code> is set to true, subdirectories will be traversed.<br/>The optional parameter <code>$pattern</code> defines a file name pattern in the <a href="https://docs.basex.org/wiki/Commands#Glob_Syntax">Glob Syntax</a>. If present, only those files and directories are returned that correspond to the pattern. Several patterns can be separated with a comma (<code>,</code>).<br/>
 :
 : @param  file:list($dir value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:list($dir as xs:string) as xs:string*  external;

(:~ 
 : Lists all files and directories found in the specified <code>$dir</code>. The returned paths are relative to the provided path.<br/>If <code>$recursive</code> is set to true, subdirectories will be traversed.<br/>The optional parameter <code>$pattern</code> defines a file name pattern in the <a href="https://docs.basex.org/wiki/Commands#Glob_Syntax">Glob Syntax</a>. If present, only those files and directories are returned that correspond to the pattern. Several patterns can be separated with a comma (<code>,</code>).<br/>
 :
 : @param  file:list($dir value of type xs:string
 : @param $recursive value of type xs:boolean?
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:list($dir as xs:string, $recursive as xs:boolean?) as xs:string*  external;

(:~ 
 : Lists all files and directories found in the specified <code>$dir</code>. The returned paths are relative to the provided path.<br/>If <code>$recursive</code> is set to true, subdirectories will be traversed.<br/>The optional parameter <code>$pattern</code> defines a file name pattern in the <a href="https://docs.basex.org/wiki/Commands#Glob_Syntax">Glob Syntax</a>. If present, only those files and directories are returned that correspond to the pattern. Several patterns can be separated with a comma (<code>,</code>).<br/>
 :
 : @param  file:list($dir value of type xs:string
 : @param $recursive value of type xs:boolean?
 : @param $pattern value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:list($dir as xs:string, $recursive as xs:boolean?, $pattern as xs:string) as xs:string*  external;

(:~ 
 : Returns the full paths to all files and directories found in the specified <code>$dir</code>.<br/>The inverse function is <code><a href="https://docs.basex.org/wiki/File_Module#file:parent">file:parent</a></code>. The returned paths start with the specified directory. The related function <code><a href="https://docs.basex.org/wiki/File_Module#file:list">file:list</a></code> returns relative file paths.
 :
 : @param  file:children($dir value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:children($dir as xs:string) as xs:string*  external;

(:~ 
 : Returns the full paths to all files and directories found in the specified <code>$dir</code> and its subdirectories.<br/>. The returned paths start with the specified directory. The related function <code><a href="https://docs.basex.org/wiki/File_Module#file:list">file:list</a></code> creates relative file paths.
 :
 : @param  file:descendants($dir value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:descendants($dir as xs:string) as xs:string*  external;

(:~ 
 : Reads the binary content of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:base64Binary</code> item.<br/>The optional parameters <code>$offset</code> and <code>$length</code> can be used to read chunks of a file.
 :
 : @param  file:read-binary($path value of type xs:string
 : @return value of type xs:base64Binary 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:out-of-range the offset or length is negative, or the chosen values would exceed the file bounds.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-binary($path as xs:string) as xs:base64Binary  external;

(:~ 
 : Reads the binary content of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:base64Binary</code> item.<br/>The optional parameters <code>$offset</code> and <code>$length</code> can be used to read chunks of a file.
 :
 : @param  file:read-binary($path value of type xs:string
 : @param $offset value of type xs:integer
 : @return value of type xs:base64Binary 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:out-of-range the offset or length is negative, or the chosen values would exceed the file bounds.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-binary($path as xs:string, $offset as xs:integer) as xs:base64Binary  external;

(:~ 
 : Reads the binary content of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:base64Binary</code> item.<br/>The optional parameters <code>$offset</code> and <code>$length</code> can be used to read chunks of a file.
 :
 : @param  file:read-binary($path value of type xs:string
 : @param $offset value of type xs:integer
 : @param $length value of type xs:integer
 : @return value of type xs:base64Binary 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:out-of-range the offset or length is negative, or the chosen values would exceed the file bounds.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-binary($path as xs:string, $offset as xs:integer, $length as xs:integer) as xs:base64Binary  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid XML characters will be rejected. If <code>$fallback</code> is enabled, the characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul>
 :
 : @param  file:read-text($path value of type xs:string
 : @return value of type xs:string 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text($path as xs:string) as xs:string  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid XML characters will be rejected. If <code>$fallback</code> is enabled, the characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul>
 :
 : @param  file:read-text($path value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text($path as xs:string, $encoding as xs:string) as xs:string  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as <a href="https://docs.basex.org/wiki/Lazy_Module">lazy</a> <code>xs:string</code> item: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid XML characters will be rejected. If <code>$fallback</code> is enabled, the characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul>
 :
 : @param  file:read-text($path value of type xs:string
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean?
 : @return value of type xs:string 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text($path as xs:string, $encoding as xs:string, $fallback as xs:boolean?) as xs:string  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as a sequence of <code>xs:string</code> items: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul> <p>The lines to be read can be restricted with the optional parameters <code>$offset</code> and <code>$length</code>. </p>
 :
 : @param  file:read-text-lines($path value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text-lines($path as xs:string) as xs:string*  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as a sequence of <code>xs:string</code> items: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul> <p>The lines to be read can be restricted with the optional parameters <code>$offset</code> and <code>$length</code>. </p>
 :
 : @param  file:read-text-lines($path value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text-lines($path as xs:string, $encoding as xs:string) as xs:string*  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as a sequence of <code>xs:string</code> items: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul> <p>The lines to be read can be restricted with the optional parameters <code>$offset</code> and <code>$length</code>. </p>
 :
 : @param  file:read-text-lines($path value of type xs:string
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean?
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text-lines($path as xs:string, $encoding as xs:string, $fallback as xs:boolean?) as xs:string*  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as a sequence of <code>xs:string</code> items: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul> <p>The lines to be read can be restricted with the optional parameters <code>$offset</code> and <code>$length</code>. </p>
 :
 : @param  file:read-text-lines($path value of type xs:string
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean?
 : @param $offset value of type xs:integer?
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text-lines($path as xs:string, $encoding as xs:string, $fallback as xs:boolean?, $offset as xs:integer?) as xs:string*  external;

(:~ 
 : Reads the textual contents of the file specified by <code>$path</code> and returns it as a sequence of <code>xs:string</code> items: <ul><li>The UTF-8 default encoding can be overwritten with the optional <code>$encoding</code> argument.</li><li>By default, invalid characters will be rejected. If <code>$fallback</code> is set to true, these characters will be replaced with the Unicode replacement character <code>FFFD</code> (�).</li></ul> <p>The lines to be read can be restricted with the optional parameters <code>$offset</code> and <code>$length</code>. </p>
 :
 : @param  file:read-text-lines($path value of type xs:string
 : @param $encoding value of type xs:string
 : @param $fallback value of type xs:boolean?
 : @param $offset value of type xs:integer?
 : @param $length value of type xs:integer?
 : @return value of type xs:string* 
 : @error file:not-found the specified file does not exist.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:read-text-lines($path as xs:string, $encoding as xs:string, $fallback as xs:boolean?, $offset as xs:integer?, $length as xs:integer?) as xs:string*  external;

(:~ 
 : Creates the directory specified by <code>$dir</code> if it does not already exist. Non-existing parent directories will be created as well.<br/>
 :
 : @param  file:create-dir($dir value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:exists the specified target exists, but is no directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:create-dir($dir as xs:string) as empty-sequence()  external;

(:~ 
 : Creates a new temporary directory that did not exist before this function was called, and returns its full file path. The directory name begins and ends with the specified <code>$prefix</code> and <code>$suffix</code>. If no directory is specified via <code>$dir</code>, the directory will be placed in the system’s default temporary directory. The operation will create all non-existing parent directories.
 :
 : @param  file:create-temp-dir($prefix value of type xs:string
 : @param $suffix value of type xs:string
 : @return value of type xs:string 
 : @error file:no-dir the specified directory points to a file.
 : @error file:io-error the directory could not be created.
 :)
declare function  file:create-temp-dir($prefix as xs:string, $suffix as xs:string) as xs:string  external;

(:~ 
 : Creates a new temporary directory that did not exist before this function was called, and returns its full file path. The directory name begins and ends with the specified <code>$prefix</code> and <code>$suffix</code>. If no directory is specified via <code>$dir</code>, the directory will be placed in the system’s default temporary directory. The operation will create all non-existing parent directories.
 :
 : @param  file:create-temp-dir($prefix value of type xs:string
 : @param $suffix value of type xs:string
 : @param $dir value of type xs:string
 : @return value of type xs:string 
 : @error file:no-dir the specified directory points to a file.
 : @error file:io-error the directory could not be created.
 :)
declare function  file:create-temp-dir($prefix as xs:string, $suffix as xs:string, $dir as xs:string) as xs:string  external;

(:~ 
 : Creates a new temporary file that did not exist before this function was called, and returns its full file path. The file name begins and ends with the specified <code>$prefix</code> and <code>$suffix</code>. If no directory is specified via <code>$dir</code>, the file will be placed in the system’s default temporary directory. The operation will create all non-existing parent directories.
 :
 : @param  file:create-temp-file($prefix value of type xs:string
 : @param $suffix value of type xs:string
 : @return value of type xs:string 
 : @error file:no-dir the specified directory points to a file.
 : @error file:io-error the directory could not be created.
 :)
declare function  file:create-temp-file($prefix as xs:string, $suffix as xs:string) as xs:string  external;

(:~ 
 : Creates a new temporary file that did not exist before this function was called, and returns its full file path. The file name begins and ends with the specified <code>$prefix</code> and <code>$suffix</code>. If no directory is specified via <code>$dir</code>, the file will be placed in the system’s default temporary directory. The operation will create all non-existing parent directories.
 :
 : @param  file:create-temp-file($prefix value of type xs:string
 : @param $suffix value of type xs:string
 : @param $dir value of type xs:string
 : @return value of type xs:string 
 : @error file:no-dir the specified directory points to a file.
 : @error file:io-error the directory could not be created.
 :)
declare function  file:create-temp-file($prefix as xs:string, $suffix as xs:string, $dir as xs:string) as xs:string  external;

(:~ 
 : Recursively deletes a file or directory specified by <code>$path</code>.<br/>The optional parameter <code>$recursive</code> specifies whether subdirectories will be deleted, too.<br/>
 :
 : @param  file:delete($path value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:not-found the specified path does not exist.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:delete($path as xs:string) as empty-sequence()  external;

(:~ 
 : Recursively deletes a file or directory specified by <code>$path</code>.<br/>The optional parameter <code>$recursive</code> specifies whether subdirectories will be deleted, too.<br/>
 :
 : @param  file:delete($path value of type xs:string
 : @param $recursive value of type xs:boolean?
 : @return value of type empty-sequence() 
 : @error file:not-found the specified path does not exist.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:delete($path as xs:string, $recursive as xs:boolean?) as empty-sequence()  external;

(:~ 
 : Writes serialized <a href="https://docs.basex.org/index.php?title=Template:$input&amp;action=edit&amp;redlink=1">Template:$input</a> to the specified file. If the file already exists, it will be overwritten.<br/>The <code>$options</code> argument contains <a href="https://docs.basex.org/wiki/Serialization">serialization parameters</a>. As with <a href="https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>, the parameters can be specified<br/> <ul><li>either as children of an <code>&lt;output:serialization-parameters/&gt;</code> element:</li></ul> <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="nt">&lt;output:serialization-parameters&gt;</span> <span class="nt">&lt;output:method</span> <span class="na">value=</span><span class="s">'xml'</span><span class="nt">/&gt;</span> <span class="nt">&lt;output:cdata-section-elements</span> <span class="na">value=</span><span class="s">"div"</span><span class="nt">/&gt;</span> ... <span class="nt">&lt;/output:serialization-parameters&gt;</span> </pre></div> <ul><li>or as map, which contains all key/value pairs:</li></ul> <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="k">map</span> <span class="p">{</span> <span class="s2">"method"</span><span class="p">:</span> <span class="s2">"xml"</span><span class="p">,</span> <span class="s2">"cdata-section-elements"</span><span class="p">:</span> <span class="s2">"div"</span><span class="p">,</span> <span class="p">..</span><span class="o">.</span> <span class="p">}</span> </pre></div>
 :
 : @param  file:write($path value of type xs:string
 : @param $input value of type item()*
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write($path as xs:string, $input as item()*) as empty-sequence()  external;

(:~ 
 : Writes serialized <a href="https://docs.basex.org/index.php?title=Template:$input&amp;action=edit&amp;redlink=1">Template:$input</a> to the specified file. If the file already exists, it will be overwritten.<br/>The <code>$options</code> argument contains <a href="https://docs.basex.org/wiki/Serialization">serialization parameters</a>. As with <a href="https://www.w3.org/TR/xpath-functions-31/#func-serialize">fn:serialize()</a>, the parameters can be specified<br/> <ul><li>either as children of an <code>&lt;output:serialization-parameters/&gt;</code> element:</li></ul> <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="nt">&lt;output:serialization-parameters&gt;</span> <span class="nt">&lt;output:method</span> <span class="na">value=</span><span class="s">'xml'</span><span class="nt">/&gt;</span> <span class="nt">&lt;output:cdata-section-elements</span> <span class="na">value=</span><span class="s">"div"</span><span class="nt">/&gt;</span> ... <span class="nt">&lt;/output:serialization-parameters&gt;</span> </pre></div> <ul><li>or as map, which contains all key/value pairs:</li></ul> <div class="mw-highlight mw-content-ltr" dir="ltr"><pre><span/><span class="k">map</span> <span class="p">{</span> <span class="s2">"method"</span><span class="p">:</span> <span class="s2">"xml"</span><span class="p">,</span> <span class="s2">"cdata-section-elements"</span><span class="p">:</span> <span class="s2">"div"</span><span class="p">,</span> <span class="p">..</span><span class="o">.</span> <span class="p">}</span> </pre></div>
 :
 : @param  file:write($path value of type xs:string
 : @param $input value of type item()*
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write($path as xs:string, $input as item()*, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Writes a binary item (xs:base64Binary, xs:hexBinary) to the specified file. If the file already exists, it will be overwritten.<br/>If <code>$offset</code> is specified, data will be written at this file position. An existing file may be resized by that operation.
 :
 : @param  file:write-binary($path value of type xs:string
 : @param $value value of type xs:anyAtomicType
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:out-of-range the offset is negative, or it exceeds the current file size.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-binary($path as xs:string, $value as xs:anyAtomicType) as empty-sequence()  external;

(:~ 
 : Writes a binary item (xs:base64Binary, xs:hexBinary) to the specified file. If the file already exists, it will be overwritten.<br/>If <code>$offset</code> is specified, data will be written at this file position. An existing file may be resized by that operation.
 :
 : @param  file:write-binary($path value of type xs:string
 : @param $value value of type xs:anyAtomicType
 : @param $offset value of type xs:integer
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:out-of-range the offset is negative, or it exceeds the current file size.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-binary($path as xs:string, $value as xs:anyAtomicType, $offset as xs:integer) as empty-sequence()  external;

(:~ 
 : Writes a string to the specified file. If the file already exists, it will be overwritten.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:write-text($path value of type xs:string
 : @param $value value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-text($path as xs:string, $value as xs:string) as empty-sequence()  external;

(:~ 
 : Writes a string to the specified file. If the file already exists, it will be overwritten.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:write-text($path value of type xs:string
 : @param $value value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-text($path as xs:string, $value as xs:string, $encoding as xs:string) as empty-sequence()  external;

(:~ 
 : Writes a sequence of strings to the specified file, each followed by the system specific newline character. If the file already exists, it will be overwritten.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:write-text-lines($path value of type xs:string
 : @param $values value of type xs:string*
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-text-lines($path as xs:string, $values as xs:string*) as empty-sequence()  external;

(:~ 
 : Writes a sequence of strings to the specified file, each followed by the system specific newline character. If the file already exists, it will be overwritten.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:write-text-lines($path value of type xs:string
 : @param $values value of type xs:string*
 : @param $encoding value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:write-text-lines($path as xs:string, $values as xs:string*, $encoding as xs:string) as empty-sequence()  external;

(:~ 
 : Appends a serialized sequence of <code>$input</code> to the specified file, with the supplied <code>$options</code> as serialization parameters. If the file does not exist, a new file is created.<br/>
 :
 : @param  file:append($path value of type xs:string
 : @param $input value of type item()*
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append($path as xs:string, $input as item()*) as empty-sequence()  external;

(:~ 
 : Appends a serialized sequence of <code>$input</code> to the specified file, with the supplied <code>$options</code> as serialization parameters. If the file does not exist, a new file is created.<br/>
 :
 : @param  file:append($path value of type xs:string
 : @param $input value of type item()*
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append($path as xs:string, $input as item()*, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Appends a binary item (xs:base64Binary, xs:hexBinary) to the specified file. If the file does not exists, a new one is created.<br/>
 :
 : @param  file:append-binary($path value of type xs:string
 : @param $value value of type xs:anyAtomicType
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append-binary($path as xs:string, $value as xs:anyAtomicType) as empty-sequence()  external;

(:~ 
 : Appends a string to a file specified by <code>$path</code>. If the specified file does not exists, a new file is created.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:append-text($path value of type xs:string
 : @param $value value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append-text($path as xs:string, $value as xs:string) as empty-sequence()  external;

(:~ 
 : Appends a string to a file specified by <code>$path</code>. If the specified file does not exists, a new file is created.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:append-text($path value of type xs:string
 : @param $value value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append-text($path as xs:string, $value as xs:string, $encoding as xs:string) as empty-sequence()  external;

(:~ 
 : Appends a sequence of strings to the specified file, each followed by the system specific newline character. If the specified file does not exists, a new file is created.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:append-text-lines($path value of type xs:string
 : @param $values value of type xs:string*
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append-text-lines($path as xs:string, $values as xs:string*) as empty-sequence()  external;

(:~ 
 : Appends a sequence of strings to the specified file, each followed by the system specific newline character. If the specified file does not exists, a new file is created.<br/>The optional parameter <code>$encoding</code> defines the output encoding (default: UTF-8).<br/>
 :
 : @param  file:append-text-lines($path value of type xs:string
 : @param $values value of type xs:string*
 : @param $encoding value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:no-dir the parent of specified path is no directory.
 : @error file:is-dir the specified path is a directory.
 : @error file:unknown-encoding the specified encoding is not supported, or unknown.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:append-text-lines($path as xs:string, $values as xs:string*, $encoding as xs:string) as empty-sequence()  external;

(:~ 
 : Copies a file or directory specified by <code>$source</code> to the file or directory specified by <code>$target</code>. If the target file already exists, it will be overwritten. No operation will be performed if the source and target path are equal.<br/>
 :
 : @param  file:copy($source value of type xs:string
 : @param $target value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:not-found the specified source does not exist.
 : @error file:exists the specified source is a directory and the target is a file.
 : @error file:no-dir the parent of the specified target is no directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:copy($source as xs:string, $target as xs:string) as empty-sequence()  external;

(:~ 
 : Moves or renames the file or directory specified by <code>$source</code> to the path specified by <code>$target</code>. If the target file already exists, it will be overwritten. No operation will be performed if the source and target path are equal.<br/>
 :
 : @param  file:move($source value of type xs:string
 : @param $target value of type xs:string
 : @return value of type empty-sequence() 
 : @error file:not-found the specified source does not exist.
 : @error file:exists the specified source is a directory and the target is a file.
 : @error file:no-dir the parent of the specified target is no directory.
 : @error file:io-error the operation fails for some other reason.
 :)
declare function  file:move($source as xs:string, $target as xs:string) as empty-sequence()  external;

(:~ 
 : Returns an <code>xs:boolean</code> indicating whether a file or directory specified by <code>$path</code> exists in the file system.<br/>
 :
 : @param  file:exists($path value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  file:exists($path as xs:string) as xs:boolean  external;

(:~ 
 : Returns an <code>xs:boolean</code> indicating whether the argument <code>$path</code> points to an existing directory.<br/>
 :
 : @param  file:is-dir($path value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  file:is-dir($path as xs:string) as xs:boolean  external;

(:~ 
 : Returns an <code>xs:boolean</code> indicating whether the argument <code>$path</code> is absolute.<br/>The behavior of this function depends on the operating system: On Windows, an absolute path starts with the drive letter and a colon, whereas on Linux it starts with a slash.
 :
 : @param  file:is-absolute($path value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  file:is-absolute($path as xs:string) as xs:boolean  external;

(:~ 
 : Returns an <code>xs:boolean</code> indicating whether the argument <code>$path</code> points to an existing file.<br/>
 :
 : @param  file:is-file($path value of type xs:string
 : @return value of type xs:boolean 
 :)
declare function  file:is-file($path as xs:string) as xs:boolean  external;

(:~ 
 : Retrieves the timestamp of the last modification of the file or directory specified by <code>$path</code>.<br/>
 :
 : @param  file:last-modified($path value of type xs:string
 : @return value of type xs:dateTime 
 : @error file:not-found the specified path does not exist.
 :)
declare function  file:last-modified($path as xs:string) as xs:dateTime  external;

(:~ 
 : Returns the size, in bytes, of the file specified by <code>$path</code>, or <code>0</code> for directories.<br/>
 :
 : @param  file:size($path value of type xs:string
 : @return value of type xs:integer 
 : @error file:not-found the specified file does not exist.
 :)
declare function  file:size($path as xs:string) as xs:integer  external;

(:~ 
 : Returns the name of a file or directory specified by <code>$path</code>. An empty string is returned if the path points to the root directory.
 :
 : @param  file:name($path value of type xs:string
 : @return value of type xs:string 
 :)
declare function  file:name($path as xs:string) as xs:string  external;

(:~ 
 : Returns the absolute path to the parent directory of a file or directory specified by <code>$path</code>. An empty sequence is returned if the path points to a root directory.<br/>The inverse function is <code><a href="https://docs.basex.org/wiki/File_Module#file:children">file:children</a></code>.<br/>
 :
 : @param  file:parent($path value of type xs:string
 : @return value of type xs:string? 
 :)
declare function  file:parent($path as xs:string) as xs:string?  external;

(:~ 
 : Transforms the <code>$path</code> argument to its native representation on the operating system.<br/>
 :
 : @param  file:path-to-native($path value of type xs:string
 : @return value of type xs:string 
 : @error file:not-found the specified file does not exist.
 : @error file:io-error the specified path cannot be transformed to its native representation.
 :)
declare function  file:path-to-native($path as xs:string) as xs:string  external;

(:~ 
 : Transforms the <code>$path</code> argument to an absolute operating system path.<br/>If the path is relative, and if an absolute <code>$base</code> path is specified, it will be resolved against this path.
 :
 : @param  file:resolve-path($path value of type xs:string
 : @return value of type xs:string 
 : @error file:is-relative the specified base path is relative.
 :)
declare function  file:resolve-path($path as xs:string) as xs:string  external;

(:~ 
 : Transforms the <code>$path</code> argument to an absolute operating system path.<br/>If the path is relative, and if an absolute <code>$base</code> path is specified, it will be resolved against this path.
 :
 : @param  file:resolve-path($path value of type xs:string
 : @param $base value of type xs:string
 : @return value of type xs:string 
 : @error file:is-relative the specified base path is relative.
 :)
declare function  file:resolve-path($path as xs:string, $base as xs:string) as xs:string  external;

(:~ 
 : Transforms the path specified by <code>$path</code> into a URI with the <code>file://</code> scheme.<br/>
 :
 : @param  file:path-to-uri($path value of type xs:string
 : @return value of type xs:string 
 :)
declare function  file:path-to-uri($path as xs:string) as xs:string  external;

(:~ 
 : Returns the directory separator used by the operating system, such as <code>/</code> or <code>\</code>.<br/>
 :
 : @param  file:dir-separator( value of type 
 : @return value of type xs:string 
 :)
declare function  file:dir-separator() as xs:string  external;

(:~ 
 : Returns the path separator used by the operating system, such as <code>;</code> or <code>:</code>.<br/>
 :
 : @param  file:path-separator( value of type 
 : @return value of type xs:string 
 :)
declare function  file:path-separator() as xs:string  external;

(:~ 
 : Returns the line separator used by the operating system, such as <code>&amp;#10;</code>, <code>&amp;#13;&amp;#10;</code> or <code>&amp;#13;</code>.<br/>
 :
 : @param  file:line-separator( value of type 
 : @return value of type xs:string 
 :)
declare function  file:line-separator() as xs:string  external;

(:~ 
 : Returns the system’s default temporary-file directory.<br/>
 :
 : @param  file:temp-dir( value of type 
 : @return value of type xs:string 
 :)
declare function  file:temp-dir() as xs:string  external;

(:~ 
 : Returns the <i>current working directory</i>, i.e., the directory from which the query processor was started. This function returns the same result as the function call <code>file:resolve-path("")</code>.
 :
 : @param  file:current-dir( value of type 
 : @return value of type xs:string 
 :)
declare function  file:current-dir() as xs:string  external;

(:~ 
 : Returns the parent directory of the static base URI.<br/>If the static base URI is undefined or does not point to a local resource, it returns the empty sequence. Otherwise, it returns the same result as <code>file:parent(static-base-uri())</code>.
 :
 : @param  file:base-dir( value of type 
 : @return value of type xs:string? 
 :)
declare function  file:base-dir() as xs:string?  external;
