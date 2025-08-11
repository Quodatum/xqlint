/* generate parsers from EBNF files using REx
*/
const REX_SERVER = 'https://www.bottlecaps.de/rex/';
//const REX_SERVER = 'http://192.168.1.9:7777/post';

const opts = ['parsers', 'lexers'];
const args = process.argv.slice(2);

var type = args[0];
type = (typeof type !== 'undefined') ? type : opts[0];
if (opts.indexOf(type) < 0) {
    console.log(type, "not found. opts:", opts); return
};
console.log("type: ", type);
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
    promises.push(rexAxios(parser));
    //promises.push(rexFetch(parser));
});
Promise.all(promises).then(function (r) {
    console.log("all done.", r);
});


/* return FormData for REx post */
function rexForm(parser) {
    const form = new FormData();
    form.append('tz', '0'); // UTC
    form.append('command', parser.command);
    const grammar = fs.createReadStream(parser.source);
    form.append('input', grammar, path.basename(parser.source));
    //  console.log(form);
    return form;
};

/* return promise to make REx call and save result to file using parser obj properties */
function rexAxios(parser) {
    const form = rexForm(parser);
    return new Promise(function (resolve, reject) {
        console.log("posting");

        var p = axios.post(REX_SERVER, form);
        p.then(function (response) {
            console.log("saving");
            fs.writeFileSync(parser.destination, response.data)
            resolve("saved: " + parser.destination);
        })
            .catch(function (error) {
                reject(error);
            })
    });
}

// @todo -  currently not working
function rexFetch(parser) {
    const form = rexForm(parser);
    return new Promise(function (resolve, reject) {
    var p = fetch(REX_SERVER, {
        method: 'POST',
        body: form
    });
    p.then(response=>response.text())
     .then(function (txt) {
        console.log("saving fetch");
        fs.writeFileSync(parser.destination, txt)
        resolve("saved: " + parser.destination);
    })
        .catch(function (error) {
            reject(error);
        })
    })
}
