declare namespace gml='http://www.opengis.net/gml';
let $options := map { 'lax': false() }
let $input := file:readtext('some-data.csv')
let $output := $input => csv:parse($options) => csv:serialize($options)
return $input eq $output