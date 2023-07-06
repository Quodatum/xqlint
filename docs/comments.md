## Comment handling
Comment are treated as whitespace (WS) by the parser. If the comment starts
with an XQDoc marker `(:~`
`xqdoc.WS()` will set `lastComment = parseComment(node.value);`

`lastComment` is a javascript object.

```javascript
 {
    description: '',
    params: {},
    errors: [],
    others: []
}
```
Subsequent parser tree vistors can process `lastComment` 
## Other
1. `parseComment.ebnf` not used
1. xqdoc.parse_comment returns object with description property with xqdoc comment with any ":"

# bugs


