(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for installing, listing and deleting modules contained in the <a href="https://docs.basex.org/wiki/Repository">Repository</a>.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Repository_Module
 :)
module namespace repo = "http://basex.org/modules/repo";

(:~ 
 : Retrieves and installs a package from the given <code>$href</code> location. Existing packages are replaced.
 :
 : @param  repo:install($href value of type xs:string
 : @return value of type empty-sequence() 
 : @error repo:not-found a package does not exist.
 : @error repo:descriptor the package descriptor is invalid.
 : @error repo:installed the module contained in the package to be installed is already installed as part of another package.
 : @error repo:parse an error occurred while parsing the package.
 : @error repo:version the package version is not supported.
 :)
declare function  repo:install($href as xs:string) as empty-sequence()  external;

(:~ 
 : Deletes a <code>$package</code>. The argument contains the package name, optionally suffixed with a dash and the package version.<br/>
 :
 : @param  repo:delete($package value of type xs:string
 : @return value of type empty-sequence() 
 : @error repo:not-found a package does not exist.
 : @error repo:delete the package cannot be deleted.
 :)
declare function  repo:delete($package as xs:string) as empty-sequence()  external;

(:~ 
 : Lists the names and versions of all currently installed packages.<br/>
 :
 : @param  repo:list( value of type 
 : @return value of type element(package)* 
 :)
declare function  repo:list() as element(package)*  external;
