xquery version "3.1";
(:~
 : log an event
 :)
module namespace hlog = 'quodatum.data.history';
declare namespace hist="urn:quodatum:vue-poc.history";
(:~ current history records :)
declare variable $hlog:doc as element(hist:history):=db:open("vue-poc","/history.xml")/hist:history;

(:~
 : write history event /history.xml in database vue-poc
 : wrap $item in <hist:event id=".." when=".." > node and insert as first 
 :)
declare 
%updating
function hlog:save($item as element(*))
{
let $id:=$hlog:doc/@next-id/string()=>trace("Saving: ")
let $n:=<hist:event id="ev-{$id}" when="{fn:current-dateTime()}" user="admin">{$item}</hist:event>
return (insert node $n as first into $hlog:doc,          
        replace value of node $hlog:doc/@next-id with number($id)+1, 
        update:output("ev-" || $id)
             )
};

(:~ get history record :)
declare function hlog:get() as element(hist:event)?
{
	$hlog:doc/hist:event=>head()
};

(:~ get history record for id :)
declare function hlog:get($id as xs:string) as element(hist:event)?
{
	$hlog:doc/hist:event[@id=$id] 
};
(:~ get history record for id :)
declare function hlog:get($id as xs:string,$unused) as element(hist:event)?
{
	$hlog:doc/hist:event[@id=$id] 
};