(:~ 
Create xquery source modules from Wki pages v10+
@author Andy Bunce
@version 0.2
:)
module namespace  xqgen='urn:quodatum:xqdoc/wiki';
import module namespace string='http://basex.org/modules/string';
import module namespace util='http://basex.org/modules/util';
(:~
 : Serializes the specified nodes. Normalizes links and newlines.
 : @param  $nodes  nodes to be serialized
 : @param  $url    page url
 : @return string
 :)
declare function xqgen:serialize(
  $nodes  as node()*,
  $url   as xs:string,
  $base as xs:string
) as xs:string {
  normalize-space(serialize(
    $nodes update {
      descendant-or-self::a/@href ! (
        if(starts-with(., '/')) then replace value of node . with $base || . else
        if(starts-with(., '#')) then replace value of node . with $url || . else ()
      ),
      delete node descendant-or-self::a/@*[name() != 'href'],
      delete node descendant-or-self::br/@*
    }
  ))
};

(:~
 : Creates the xqdoc header.
 : @param  $xml  page contents
 : @param  $url  page url
 : @return string
 :)
declare function xqgen:header(
  $xml  as node(),
  $url  as xs:string,
  $base as xs:string
) as xs:string {
  '(:~ ' ||string:nl() ||
  ' : ' || xqgen:serialize(
    $xml//div[@id = 'mw-content-text']/div/p[1]/node(), $url,$base
  ) ||string:nl() ||
  ' :' ||string:nl() ||
  ' : @author quodatum/xqlint ' || current-dateTime() ||string:nl() ||
  ' : @see ' || $url ||string:nl() ||
  ' :)'
};

(:~
 : Creates namespace declarations.
 : @param  $uris      namespace URIs
 : @param  $prefixes  namespace prefixed
 : @return string
 :)
declare function xqgen:namespaces(
  $uris      as xs:string*,
  $prefixes  as xs:string*
) as xs:string* {
  'module namespace ' || $prefixes[1] || ' = "' || $uris[1] || '";',
  for $i in 2 to count($uris)
  return 'declare namespace ' || $prefixes[$i] || ' = "' || $uris[$i] || '";',
  ''
};

(:~
 : Creates an xqdoc section for a function.
 : @param  $xml     page contents
 : @param  $prefix  prefix of error namespace
 : @param  $url     page url
 : @return string
 :)
declare function xqgen:functions(
  $xml     as node(),
  $prefix  as xs:string?,
  $url     as xs:string,
  $base as xs:string
) as xs:string* {
  for $table in $xml//table[preceding::h2][tbody/tr/td[1]/b='Signature']
  let $summary := $table/tbody/tr[td[1]/b = 'Summary']/td[2]/node()
  (: xquery 4 style :)
  for $signature in xqgen:signatures($table)
  let $anns := (
    for $param in tokenize(replace($signature, '^\(|\) .*', ''), ', ')
    let $tokens := tokenize($param, ' as ', 'q')
    return ' : @param ' || $tokens[1] || ' value of type ' || $tokens[2],

    for $return in replace($signature, '^.* as ', '')[. != 'empty-sequence()']
    return ' : @return value of type ' || $return,

    for $error in $table/tbody/tr[td[1]/b = 'Errors']/td[2]/code
      [not(preceding-sibling::node()[1] instance of text())]
    (:~ let $code := $error/b ! (contains(., ':') ?? . !! ($prefix || ':' || .)) ~:)
     let $code := $error/b ! util:if(contains(., ':') , . ,$prefix || ':' || .)
    let $message := (
      let $fs := $error/following-sibling::node()
      let $br := ($fs/self::br)[1]
      return $fs[empty($br) or . << $br]
    )
    return ' : @error ' || $code || ' ' ||
      replace(xqgen:serialize($message, $url,$base), '^: ', '')
  )
  return (
    '(:~ ' ||string:nl() ||
    ' : ' || string-join(xqgen:serialize($summary, $url,$base)) ||string:nl() ||
    (' :' ||string:nl() || string-join($anns,string:nl()) ||string:nl())[exists($anns)] ||
    ' :)' ||string:nl() ||
    'declare function ' || $signature || ' external;' ||string:nl()
  )
};

(:~
 : Creates an xqdoc page.
 : @param  $xml  page contents
 : @param  $url  page url
 : @return string
 :)
declare function xqgen:page(
  $xml  as node(),
  $url  as xs:string,
  $base as xs:string
) as xs:string {
  let $uris := $xml//code[starts-with(following-sibling::text()[1], ' namespace')]/text()
  let $prefixes := $xml//code[starts-with(following-sibling::text()[1], ' prefix.')]/text()
  let $error := (
    for-each-pair($uris, $prefixes, function($uri, $prefix) {
      if(contains($uri, 'error')) then $prefix else ()
    }),
    $prefixes[1]
  )[1]
  return string-join((
    xqgen:header($xml, $url,$base),
    xqgen:namespaces($uris, $prefixes),
    xqgen:functions($xml, $error, $url,$base)
  ),string:nl())
};

declare function xqgen:fetch($url as xs:string)
as document-node(){
  html:parse(fetch:binary(trace($url,"Read: "))) 
};

(:~  urls for module pages  from wiki $base :)
declare function xqgen:modules($base as xs:string)
as xs:string*{
  let $xml := html:parse(fetch:binary($base || '/wiki/Module_Library'))
  for $url in $xml//td/a[@title]/@href[ends-with(.,"_Module")]
  return resolve-uri($url,$base)
};

(:~  module prefix :)
declare function xqgen:prefix($xml as document-node())
as xs:string{
   $xml//code[starts-with(following-sibling::text()[1], ' prefix.')]/text()=>head()
};

(:~  function signatures :)
declare function xqgen:signatures($table as element(table))
as xs:string+{
  let $sigs:=$table/tbody/tr[td[1]/b = 'Signatures']/td[2]/code
  return if($sigs)
         then $sigs (: pre basex10 :)
         else let $sig:=$table/tbody/tr/td[preceding-sibling::td[1]/b =  'Signature']/string()
              let $sig:=replace($sig,"&#xA;"," ")
              let $type:= replace($sig,"(.* as )(.*)","$2")
              let $name:= substring-before($sig,"(")
              let $args:=substring($sig,2+string-length($name),string-length($sig)-string-length($type)-string-length($name)-6)
              let $args:=tokenize($args,",")
              let $req:=$args!util:if(contains(.,":="),0,1)=>sum()
              for $i in 0 to count($args)-$req
              let $a:=subsequence($args,1,$i+$req)!normalize-space(substring-before(. ||":=",":="))
              return ``[ `{ $name}`(`{ string-join($a,', ') }`) as `{ $type }`]``
};