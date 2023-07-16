const processors = require('../../processors.json');

exports.names= function() {
    return Object.keys(processors);
};

exports.namespaces= function(processor) {
    if (!processors.hasOwnProperty(processor)) processor="";
    const mods = processors[processor].modules;
    const ns = {};
    mods.forEach(function (uri) {
        const mod = require("../../" + uri);
        //console.log("procmod: ",uri)
        loadpackage(ns, mod);
    });
    return ns;
}

// for every namespace key in package create module entry in namespaces
function loadpackage(namespaces, pkg) {
    for (const [ns, value] of Object.entries(pkg)) {
        if (namespaces.hasOwnProperty(ns)) console.log("existing: " + ns)
        namespaces[ns] = value
    }
};