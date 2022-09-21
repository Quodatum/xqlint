module namespace 		report  	= 'report';
import module namespace util  = 'urn:override' at 'utils.xqm';
import module namespace ns  = 'urn:ns' ;
import module namespace adm  = 'http://basex.org/modules/admin';
declare %updating function report:update-checkin-info($ctype as xs:string){
	insert node <check-in/> as last into db:open(util:database-by-content-type($ctype),
	'foo')
	,delete node ns:all()
	,adm:goo()																																
};