declare function local:f1($a as xs:integer) as xs:integer{
     $a
};
declare function local:f2($a as xs:integer) as xs:integer{
     local:f1($a)
};
local:f2(4)
