(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for installing, listing and deleting modules contained in the <a href="http://docs.basex.org/wiki/Repository">Repository</a>.
 :
 : @author BaseX Team
 : @see /wiki/Repository_Module
 :)
module namespace repo = "http://basex.org/modules/repo";

(:~ 
 : Installs a package or replaces an existing package. The parameter <code>$path</code> indicates the path to the package.<br/>
 :
 : @param $path value of type xs:string
 : @error repo:not-found a package does not exist.
 : @error repo:descriptor the package descriptor is invalid.
 : @error repo:installed the module contained in the package to be installed is already installed as part of another package.
 : @error repo:parse an error occurred while parsing the package.
 : @error repo:version the package version is not supported.
 :)
declare function repo:install($path as xs:string) as empty-sequence() external;

(:~ 
 : Deletes a package. The parameter <code>$pkg</code> indicates the package name, optionally suffixed with a dash and the package version.<br/>
 :
 : @param $pkg value of type xs:string
 : @error repo:not-found a package does not exist.
 : @error repo:delete the package cannot be deleted.
 :)
declare function repo:delete($pkg as xs:string) as empty-sequence() external;

(:~ 
 : Lists the names and versions of all currently installed packages.<br/>
 :
 : @return value of type element(package)*
 :)
declare function repo:list() as element(package)* external;
