(: queue async run of all tests in $dir :)
declare function local:queue-tests($dir as xs:string,$opts as map(*))
as xs:string{   
 let $q:=``[
    declare variable  $password external;
    client:connect('localhost',
                   db:system()/globaloptions/port/xs:integer(.),
					'admin',
                   $password)
   ! client:execute(.,'TEST "`{$dir}`"')
  ]``
  return jobs:eval($q,
                  map{"password":$opts?password},
                   map { 'cache': true()}
                 )
};

 local:queue-tests("C:\Users\andy\git\test\unit\unit-env.xqm",
                    map{"password":"admin"})