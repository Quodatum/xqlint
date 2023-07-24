
const path = require('path');
const processorsPath = require.resolve("../processors.json");
const processors=require(processorsPath);

exports.names= function() {
    return Object.keys(processors);
};

exports.namespaces= function(processor) {
    const ns = {};
    if (!processors.hasOwnProperty(processor)) return ns;
    //console.time("namespaces: "+processor)
    const mods = processors[processor].modules;

    mods.forEach(function (uri) {
        const mod = require(path.resolve(processorsPath,"../", uri));
        //console.log("procmod: ",uri)
        loadpackage(ns, mod);
    });
    //console.timeEnd("namespaces: "+processor)
    return ns;
}

// for every namespace key in package create module entry in namespaces
function loadpackage(namespaces, pkg) {
    for (const [ns, value] of Object.entries(pkg)) {
     //   if (namespaces.hasOwnProperty(ns)) console.log("existing: " + ns);
        namespaces[ns] = value;
    }
};