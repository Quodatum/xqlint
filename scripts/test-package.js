// test processor logic "basex-9.7" "basex-10.6" "none"
const processor="basex-10.6";
console.time('doSomething')
const processors = require('../lib/compiler/processors');

const namespaces = processors.namespaces(processor);
console.log("Keys: ",Object.keys(namespaces));

console.log("Processors: ",processors.names());

console.timeEnd('doSomething')