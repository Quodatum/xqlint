Suspect:
1. `parseComment.ebnf` not used
1. Errors in `XQueryTokenizer.js` for highlighting_test.js
```
      ✗ test: Comments
      TypeError: input.charCodeAt is not a function 
      at match (C:\Users\andy\git\quodatum\xqlint\lib\lexers\XQueryTokenizer.js:1515:39)
```