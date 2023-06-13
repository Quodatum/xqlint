
 module namespace xqdc = 'quodatum:xqdoca.model.xqdoc';

declare %private function xqdc:foo($module as element(Module))
as element(xqdoc:functions)
{
<xqdoc:functions>{  
          $module
          
        (: @TODO
        if ($body) then (
          something
                  ) :)
                      
          }</xqdoc:functions>
};

