const a = require("../lib/packages/basex9.7.json");
const ns = Object.keys(a)
const r={};
ns.forEach(function (ns) {
    r[ns]= {
            prefixes: ['admin'],
            pos: 0,
            type: 'module',
            override: true
        }
    });
console.log(r);