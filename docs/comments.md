## Comment handling
Comment are treated as whitespace (WS) by the parser. If the comment starts
with an XQDoc marker `(:~`
`xqdoc.WS()` will call 
```
lastComment = parseComment(node.value);
```

`lastComment` is a javascript object. Subsequent parser tree vistors can pick up `lastComment` 

```javascript
 {
    description: '',
    params: {},
    errors: [],
    others: []
    pos:  lintRange
}

export class  LintRange{
    sl: number;
    sc: number;
    el: number;
    ec: number;
}
```

## Other
1. `parseComment.ebnf` not used
1. xqdoc.parse_comment returns object with description property with xqdoc comment with any ":"

# bugs


