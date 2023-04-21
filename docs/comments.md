## Comment handling
Comment are treated as whitespace (WS) by the parser.
`xqdoc.WS()`sets `node.getParent.comment = parseComment(node.value);`

and
`exports.parseComment = function(comment){` returns object `{description:..}`

1. `parseComment.ebnf` not used
1. xqdoc.parse_comment returns object with description property with xqdoc comment with any ":"

# bugs


