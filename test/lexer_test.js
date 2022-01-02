var XQueryLexer = require('../lib/lexers/xquery_lexer').XQueryLexer;

var code = '(1 to 3)=>6';
var lines = code.split('\n');
var expected = [{
        'tokens': [{
            'type': 'meta.tag',
            'value': '<foo'
        }, {
            'type': 'meta.tag',
            'value': '>'
        }, {
            'type': 'text',
            'value': '{'
        }, {
            'type': 'constant',
            'value': '1'
        }],
        'state': '["start","StartTag","TagContent","start"]'
    }, {
        'tokens': [{
            'type': 'text',
            'value': '}'
        }, {
            'type': 'meta.tag',
            'value': '</foo>'
        }],
        'state': '["start"]'
    }]
    ;
var lexer = new XQueryLexer();
var result = [];
var line, tokens, state;
for(var i in lines) {
    line = lines[i];
    tokens = lexer.getLineTokens(line, state);
    state = tokens.state;
    result.push(tokens);
}
console.log(JSON.stringify(result[0].tokens,null,"   " ));

