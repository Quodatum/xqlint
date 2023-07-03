(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to handle archives (including ePub, Open Office, JAR, and many other formats). New ZIP and GZIP archives can be created, existing archives can be updated, and the archive entries can be listed and extracted. The <a href="/wiki/Archive_Module#archive:extract-binary">archive:extract-binary</a> function includes an example for writing the contents of an archive to disk.
 :
 : @author BaseX Team
 : @see /wiki/Archive_Module
 :)
module namespace archive = "http://basex.org/modules/archive";

(:~ 
 : Creates a new archive from the specified entries and contents.<br/>The <code>$entries</code> argument contains meta information required to create new entries. All items may either be of type <code>xs:string</code>, representing the entry name, or <code>element(archive:entry)</code>, containing the name as text node and additional, optional attributes: <ul> <li> <code>last-modified</code>: timestamp, specified as xs:dateTime (default: current time) </li> <li> <code>compression-level</code>: 0-9, 0 = uncompressed (default: 8) </li> <li> <code>encoding</code>: for textual entries (default: UTF-8) </li> </ul> <p>An example: </p> <pre class="brush:xml"> &lt;archive:entry last-modified='2011-11-11T11:11:11' compression-level='8' encoding='US-ASCII'&gt;hello.txt&lt;/archive:entry&gt; </pre> <p>The actual <code>$contents</code> must be <code>xs:string</code> or <code>xs:base64Binary</code> items.<br/> The <code>$options</code> parameter contains archiving options: </p> <ul> <li> <code>format</code>: allowed values are <code>zip</code> and <code>gzip</code>. <code>zip</code> is the default. </li> <li> <code>algorithm</code>: allowed values are <code>deflate</code> and <code>stored</code> (for the <code>zip</code> format). <code>deflate</code> is the default. </li> </ul>
 :
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:create($entries as item(), $contents as item()*) as xs:base64Binary external;

(:~ 
 : Creates a new archive from the specified entries and contents.<br/>The <code>$entries</code> argument contains meta information required to create new entries. All items may either be of type <code>xs:string</code>, representing the entry name, or <code>element(archive:entry)</code>, containing the name as text node and additional, optional attributes: <ul> <li> <code>last-modified</code>: timestamp, specified as xs:dateTime (default: current time) </li> <li> <code>compression-level</code>: 0-9, 0 = uncompressed (default: 8) </li> <li> <code>encoding</code>: for textual entries (default: UTF-8) </li> </ul> <p>An example: </p> <pre class="brush:xml"> &lt;archive:entry last-modified='2011-11-11T11:11:11' compression-level='8' encoding='US-ASCII'&gt;hello.txt&lt;/archive:entry&gt; </pre> <p>The actual <code>$contents</code> must be <code>xs:string</code> or <code>xs:base64Binary</code> items.<br/> The <code>$options</code> parameter contains archiving options: </p> <ul> <li> <code>format</code>: allowed values are <code>zip</code> and <code>gzip</code>. <code>zip</code> is the default. </li> <li> <code>algorithm</code>: allowed values are <code>deflate</code> and <code>stored</code> (for the <code>zip</code> format). <code>deflate</code> is the default. </li> </ul>
 :
 : @param $entries value of type item()
 : @param $contents value of type item()*
 : @param $options value of type map(*)?
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:format the specified option or its value is invalid or not supported.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps or compression levels.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:single the chosen archive format only allows single entries.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:create($entries as item(), $contents as item()*, $options as map(*)?) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $path value of type xs:string
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:create-from($path as xs:string) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:create-from($path as xs:string, $options as map(*)?) as xs:base64Binary external;

(:~ 
 : This convenience function creates an archive from all files in the specified directory <code>$path</code>.<br/>The <code>$options</code> parameter contains archiving options, and the files to be archived can be limited via <code>$entries</code>. The format of the two last arguments is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $path value of type xs:string
 : @param $options value of type map(*)?
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary
 : @error file:no-dir the specified path does not point to a directory.
 : @error file:is-dir one of the specified entries points to a directory.
 : @error file:not-found a specified entry does not exist.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:create-from($path as xs:string, $options as map(*)?, $entries as item()*) as xs:base64Binary external;

(:~ 
 : Returns the entry descriptors of the specified <code>$archive</code>. A descriptor contains the following attributes, provided that they are available in the archive format: <ul> <li> <code>size</code>: original file size </li> <li> <code>last-modified</code>: timestamp, formatted as xs:dateTime </li> <li> <code>compressed-size</code>: compressed file size </li> </ul> <p>An example: </p> <pre class="brush:xml"> &lt;archive:entry size="1840" last-modified="2009-03-20T03:30:32" compressed-size="672"&gt; doc/index.html &lt;/archive:entry&gt; </pre>
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type element(archive:entry)*
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:entries($archive as xs:base64Binary) as element(archive:entry)* external;

(:~ 
 : Returns the options of the specified <code>$archive</code> in the format specified by <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type map(*)
 : @error archive:format The packing format is not supported.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:options($archive as xs:base64Binary) as map(*) external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-text($archive as xs:base64Binary) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-text($archive as xs:base64Binary, $entries as item()*) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as texts.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).<br/>The encoding of the input files can be specified via <code>$encoding</code>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @param $encoding value of type xs:string
 : @return value of type xs:string*
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-text($archive as xs:base64Binary, $entries as item()*, $encoding as xs:string) as xs:string* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as binaries.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).
 :
 : @param $archive value of type xs:base64Binary
 : @return value of type xs:base64Binary*
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-binary($archive as xs:base64Binary) as xs:base64Binary* external;

(:~ 
 : Extracts entries of the specified <code>$archive</code> and returns them as binaries.<br/>The returned entries can be limited via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary*
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-binary($archive as xs:base64Binary, $entries as item()*) as xs:base64Binary* external;

(:~ 
 : This convenience function writes files of an <code>$archive</code> directly to the specified directory <code>$path</code>.<br/>The archive entries to be written can be restricted via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).
 :
 : @param $path value of type xs:string
 : @param $archive value of type xs:base64Binary
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-to($path as xs:string, $archive as xs:base64Binary) as empty-sequence() external;

(:~ 
 : This convenience function writes files of an <code>$archive</code> directly to the specified directory <code>$path</code>.<br/>The archive entries to be written can be restricted via <code>$entries</code>. The format of the argument is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a> (attributes will be ignored).
 :
 : @param $path value of type xs:string
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:extract-to($path as xs:string, $archive as xs:base64Binary, $entries as item()*) as empty-sequence() external;

(:~ 
 : Creates an updated version of the specified <code>$archive</code> with new or replaced entries.<br/>The format of <code>$entries</code> and <code>$contents</code> is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @param $contents value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:number the number of entries and contents differs.
 : @error archive:descriptor entry descriptors contain invalid entry names, timestamps, compression levels or encodings.
 : @error archive:encode the specified encoding is invalid or not supported, or the string conversion failed. Invalid XML characters will be ignored if the <code> <a href="http://docs.basex.org/wiki/Options#CHECKSTRINGS">CHECKSTRINGS</a> </code> option is turned off.
 : @error archive:modify the entries of the given archive cannot be modified.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:update($archive as xs:base64Binary, $entries as item()*, $contents as item()*) as xs:base64Binary external;

(:~ 
 : Deletes entries from an <code>$archive</code>.<br/>The format of <code>$entries</code> is the same as for <a href="/wiki/Archive_Module#archive:create">archive:create</a>.
 :
 : @param $archive value of type xs:base64Binary
 : @param $entries value of type item()*
 : @return value of type xs:base64Binary
 : @error archive:modify the entries of the given archive cannot be modified.
 : @error archive:error archive creation failed for some other reason.
 :)
declare function archive:delete($archive as xs:base64Binary, $entries as item()*) as xs:base64Binary external;
