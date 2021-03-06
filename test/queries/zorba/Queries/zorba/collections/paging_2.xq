import module namespace ddl = "http://zorba.io/modules/store/static/collections/ddl";
import module namespace dml = "http://zorba.io/modules/store/static/collections/dml";
import module namespace ns = "http://example.org/datamodule/" at "collections.xqdata";
import module namespace ref = "http://zorba.io/modules/reference";

declare namespace ann = "http://zorba.io/annotations";

declare %ann:sequential function local:test()
{
  ddl:create(xs:QName("ns:test2"));
  dml:insert(xs:QName("ns:test2"), <a/>);
  dml:insert(xs:QName("ns:test2"), <b/>);
  dml:insert(xs:QName("ns:test2"), (<c/>, <d/>, <e/>));
  (
    fn:count(dml:collection(xs:QName("ns:test2"), 3)),
    fn:count(dml:collection(xs:QName("ns:test2"), -1)),
    fn:count(dml:collection(xs:QName("ns:test2"), 100)),
    let $ref := ref:reference(dml:collection(xs:QName("ns:test2"))[3])
    return fn:count(dml:collection(xs:QName("ns:test2"), $ref, 0))
  )
};

local:test()
