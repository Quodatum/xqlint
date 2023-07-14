// test processor logic
console.time('doSomething')
const TreeOps = require('../lib/tree_ops').TreeOps;
const xq = require("../packages/xpath-3.1.json");
const bx = require("../packages/basex-9.7.json");
const ns = Object.keys(bx);
const namespaces = {};
function add(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if(namespaces.hasOwnProperty(key) ) console.log("existing: "+key)
        namespaces[key] = {
            prefixes: value.prefixes,
            type: 'module',
            override: true,
            xqdoc: value
        }
    }
};

add(xq);
add(bx);

console.log("Keys: ",Object.keys(ns).length);
console.timeEnd('doSomething')