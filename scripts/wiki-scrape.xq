(:~
  This script creates xqm files, with xqdoc style comments, for each BaseX module by reading 
  the online module documentation from the BaseX Wiki or an wayback archive of it.
  Prior to version 10 releases shipped with etc/xqdoc.zip.
  @author Christian Gruen, BaseX Team
  Updated for https,wayback compatablity
  @author Andy Bunce

 :)
import module namespace  xqgen='urn:quodatum:xqdoc/wiki' at 'xqm-from-wiki.xqm';

declare variable $SOURCES:=map{
   'basex-10.0': 'https://docs.basex.org' 
 
};
declare variable $KEY := "basex-10.0";
declare variable $BASE := $SOURCES($KEY);
declare variable $ROOT-DIR := file:base-dir() || '../specs/libs/' || $KEY || "/";


file:create-dir($ROOT-DIR),
let $mods:=xqgen:modules($BASE)
for $url in $mods
let $xml:=xqgen:fetch($url) 
let $prefix:=xqgen:prefix($xml)
let $xqdoc:=xqgen:page($xml, $url,$BASE)
let $dest:= $ROOT-DIR || $prefix || '.xqm'
return (
  file:write-text($dest=>trace("Write: "), $xqdoc),
  prof:sleep(50)
)

 