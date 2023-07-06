(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to handle archives (including ePub, Open Office, JAR, and many other formats). New ZIP and GZIP archives can be created, existing archives can be updated, and the archive entries can be listed and extracted. The <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:extract-binary">archive:extract-binary</a> </code> function includes an example for writing the contents of an archive to disk.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Archive_Module
 :)
module namespace archive = "http://basex.org/modules/archive";

(:~ 
 : Returns the entry descriptors of the specified <code>$archive</code>. A descriptor contains the following attributes, provided that they are available in the archive format: <ul> <li> <code>size</code>: original file size</li> <li> <code>last-modified</code>: timestamp, formatted as xs:dateTime</li> <li> <code>compressed-size</code>: compressed file size</li> </ul> <p>An example: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;archive:entry</span> <span class="na">size=</span> <span class="s">"1840"</span> <span class="na">last-modified=</span> <span class="s">"2009-03-20T03:30:32"</span> <span class="na">compressed-size=</span> <span class="s">"672"</span> <span class="nt">&gt;</span> doc/index.html <span class="nt">&lt;/archive:entry&gt;</span> </pre> </div>
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type element(archive:entry)*
 : @error archive:error archive creation failed.
 :)
declare function archive:entries($archive as xs:base64Binary) as element(archive:entry)* external;

(:~ 
 : Returns the options of the specified <code>$archive</code> in the format specified by <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>.
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type map(*)
 : @error archive:format The archive format is not supported.
 : @error archive:error archive creation failed.
 :)
declare function archive:options($archive as xs:base64Binary) as map(*) external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-text($archive as xs:base64Binary) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-text($archive as xs:base64Binary, $entries as item()*) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @param $encoding value of type xs:string
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-text($archive as xs:base64Binary, $entries as item()*, $encoding as xs:string) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as binaries.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type xs:base64Binary*
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-binary($archive as xs:base64Binary) as xs:base64Binary* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as binaries.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary*
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-binary($archive as xs:base64Binary, $entries as item()*) as xs:base64Binary* external;

(:~ 
 : Creates a new archive from the specified entries and contents.<br/>The <code>$entries</code> argument contains meta information required to create new entries. All items may either be of type <code>xs:string</code>, representing the entry name, or <code>element(archive:entry)</code>, containing the name as text node and additional, optional attributes: <ul> <li> <code>last-modified</code>: timestamp, specified as xs:dateTime (default: current time)</li> <li> <code>compression-level</code>: 0-9, 0 = uncompressed (default: 8)</li> <li> <code>encoding</code>: for textual entries (default: UTF-8)</li> </ul> <p>An example: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;archive:entry</span> <span class="na">last-modified=</span> <span class="s">'2011-11-11T11:11:11'</span> <span class="na">compression-level=</span> <span class="s">'8'</span> <span class="na">encoding=</span> <span class="s">'US-ASCII'</span> <span class="nt">&gt;</span>hello.txt<span class="nt">&lt;/archive:entry&gt;</span> </pre> </div> <p>The actual <code>$contents</code> must be <code>xs:string</code> or <code>xs:base64Binary</code> items.<br/> The <code>$options</code> parameter contains archiving options: </p> <ul> <li> <code>format</code>: allowed values are <code>zip</code> and <code>gzip</code>. <code>zip</code> is the default.</li> <li> <code>algorithm</code>: allowed values are <code>deflate</code> and <code>stored</code> (for the <code>zip</code> format). <code>deflate</code> is the default.</li> </ul>
 :
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed.
 :)
declare function archive:create($entries as item(), $contents as item()*) as xs:base64Binary external;

(:~ 
 : Creates a new archive from the specified entries and contents.<br/>The <code>$entries</code> argument contains meta information required to create new entries. All items may either be of type <code>xs:string</code>, representing the entry name, or <code>element(archive:entry)</code>, containing the name as text node and additional, optional attributes: <ul> <li> <code>last-modified</code>: timestamp, specified as xs:dateTime (default: current time)</li> <li> <code>compression-level</code>: 0-9, 0 = uncompressed (default: 8)</li> <li> <code>encoding</code>: for textual entries (default: UTF-8)</li> </ul> <p>An example: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;archive:entry</span> <span class="na">last-modified=</span> <span class="s">'2011-11-11T11:11:11'</span> <span class="na">compression-level=</span> <span class="s">'8'</span> <span class="na">encoding=</span> <span class="s">'US-ASCII'</span> <span class="nt">&gt;</span>hello.txt<span class="nt">&lt;/archive:entry&gt;</span> </pre> </div> <p>The actual <code>$contents</code> must be <code>xs:string</code> or <code>xs:base64Binary</code> items.<br/> The <code>$options</code> parameter contains archiving options: </p> <ul> <li> <code>format</code>: allowed values are <code>zip</code> and <code>gzip</code>. <code>zip</code> is the default.</li> <li> <code>algorithm</code>: allowed values are <code>deflate</code> and <code>stored</code> (for the <code>zip</code> format). <code>deflate</code> is the default.</li> </ul>
 :
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @param $options value of type map(*)?
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed.
 :)
declare function archive:create($entries as item(), $contents as item()*, $options as map(*)?) as xs:base64Binary external;

(:~ 
 : Creates an updated version of the specified <code>$archive</code> with new or replaced entries.<br/>The format of <code>$entries</code> and <code>$contents</code> is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @param $contents value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps, compression levels or encodings.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:modify the entries of the given archive cannot be modified.
 : @error archive:error archive creation failed.
 :)
declare function archive:update($archive as xs:base64Binary, $entries as item()*, $contents as item()*) as xs:base64Binary external;

(:~ 
 : Deletes entries from an <code>$archive</code>.<br/>The format of <code>$entries</code> is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:modify the entries of the given archive cannot be modified.
 : @error archive:error archive creation failed.
 :)
declare function archive:delete($archive as xs:base64Binary, $entries as item()*) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is identical to <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>, but two additional options are available: <ul> <li> <code>recursive</code>: parse all files recursively (default: <code>true</code>; ignored if entries are specified via the last argument).</li> <li> <code>root-dir</code>: use name of supplied directory as archive root directory (default: <code>false</code>).</li> </ul>
 :
 : @param $path value of type xs:string
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed.
 :)
declare function archive:create-from($path as xs:string) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is identical to <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>, but two additional options are available: <ul> <li> <code>recursive</code>: parse all files recursively (default: <code>true</code>; ignored if entries are specified via the last argument).</li> <li> <code>root-dir</code>: use name of supplied directory as archive root directory (default: <code>false</code>).</li> </ul>
 :
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed.
 :)
declare function archive:create-from($path as xs:string, $options as map(*)?) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is identical to <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code>, but two additional options are available: <ul> <li> <code>recursive</code>: parse all files recursively (default: <code>true</code>; ignored if entries are specified via the last argument).</li> <li> <code>root-dir</code>: use name of supplied directory as archive root directory (default: <code>false</code>).</li> </ul>
 :
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed.
 :)
declare function archive:create-from($path as xs:string, $options as map(*)?, $entries as item()*) as xs:base64Binary external;

(:~ 
 : This convenience function writes files of an <code>$archive</code> directly to the specified directory <code>$path</code>.<br/>The archive entries to be written can be restricted via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).
 :
 : @param $path value of type xs:string
 : @param $archive value of type xs:base64Binary
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-to($path as xs:string, $archive as xs:base64Binary) as empty-sequence() external;

(:~ 
 : This convenience function writes files of an <code>$archive</code> directly to the specified directory <code>$path</code>.<br/>The archive entries to be written can be restricted via <code>$entries</code>. The format of the argument is the same as for <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> (attributes will be ignored).
 :
 : @param $path value of type xs:string
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @error archive:error archive creation failed.
 :)
declare function archive:extract-to($path as xs:string, $archive as xs:base64Binary, $entries as item()*) as empty-sequence() external;

(:~ 
 : This convenience function creates a new archive from the specified <code>$entries</code> and <code>$contents</code> and writes it disk.<br/> See <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> for more details.
 :
 : @param $path value of type xs:string
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed.
 :)
declare function archive:write($path as xs:string, $entries as item(), $contents as item()*) as xs:base64Binary external;

(:~ 
 : This convenience function creates a new archive from the specified <code>$entries</code> and <code>$contents</code> and writes it disk.<br/> See <code> <a href="https://docs.basex.org/wiki/Archive_Module#archive:create">archive:create</a> </code> for more details.
 :
 : @param $path value of type xs:string
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @param $options value of type map(*)?
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if <code> <a href="https://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed.
 :)
declare function archive:write($path as xs:string, $entries as item(), $contents as item()*, $options as map(*)?) as xs:base64Binary external;
