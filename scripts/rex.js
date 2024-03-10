/* generate parsers from EBNF files using REx
*/
const REX_SERVER='https://www.bottlecaps.de/rex/';

const opts = ['parsers', 'lexers'];
const args = process.argv.slice(2);

var type = args[0];
type = (typeof type !== 'undefined') ? type : opts[0];
if (opts.indexOf(type) < 0) {
    console.log(type, "not found. opts:", opts); return
};
console.log("tyt", type);
const data = {
    parsers: {
        grammars: [
            {
                source: 'lib/parsers/XQueryParser.ebnf',
                destination: 'lib/parsers/XQueryParser.js',
                command: '-ll 2 -backtrack -tree -javascript -a xqlint'
            },
            /*   {
                  source: 'lib/parsers/XQueryParser.ebnf',
                  destination: 'lib/parsers/XQueryParser.ts',
                  command: '-ll 2 -backtrack -tree -typescript -a xqlint'
              } */
        ]
    },
    lexers: {
        grammars: [
            {
                source: 'lib/lexers/XQueryTokenizer.ebnf',
                destination: 'lib/lexers/XQueryTokenizer.js',
                command: '-ll 2 -backtrack -tree -javascript -a xqlint'
            }
        ]
    }
};
var fs = require('fs');
var axios = require('axios');
var FormData = require('form-data');
var path = require('path');
var promises = [];

data[type].grammars.forEach(function (parser) {
    promises.push(rex(parser));
    // console.log(prom);
});
Promise.all(promises).then(function (r) {
    console.log(type + ": ", r);
});

/* return promise to make REx call and save result to file using parser obj properties */
function rex(parser) {
    const grammar = fs.readFileSync(parser.source);
    const form = new FormData();
    form.append('tz', '0', { knownLength: 1, contentType: 'text/plain' }); // UTC
    form.append('command', parser.command, { knownLength: Buffer.from(parser.command).length, contentType: 'text/plain' });
    form.append('input', grammar, { knownLength: Buffer.from(grammar).length, contentType: 'text/plain', filename: path.basename(parser.source) });

    // Prepare additional headers for Axios, which include FormData's headers and the Content-Length
    const headers = {
        ...form.getHeaders(),
        'Content-Length': form.getLengthSync()
    };
    return new Promise(function (resolve, reject) {
        var p = axios.post(REX_SERVER, form, { headers });
        p.then(function (response) {
            fs.writeFileSync(parser.destination, response.data)
            resolve("saved: " + parser.destination);
        })
            .catch(function (error) {
                reject(error);
            })
    });
}
