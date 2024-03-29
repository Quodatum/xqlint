var fs = require('fs');
var StaticContext = require('../lib/compiler/static_context').StaticContext;
var XQueryLexer = require('../lib/lexers/xquery_lexer').XQueryLexer;
console.log(XQueryLexer);

var code = 'let $bar := 1 return $bar, let $foo := 1 return $';
var lines = code.split('\n');
var lexer = new XQueryLexer();
var result = [];
var line, tokens, state;
for (var i in lines) {
    line = lines[i];
    tokens = lexer.getLineTokens(line, state);
    state = tokens.state;
    result.push(tokens);
}
console.log(tokens)
