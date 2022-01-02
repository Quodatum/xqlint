'use strict';
// namepaces for BaseX, XQuery 3.1, Expath, Jsoniq
var emptyPos = { sl:0, sc: 0, el: 0, ec: 0 };

exports.Basex ={
  
'http://basex.org/modules/admin' : {
        prefixes: ['admin'],
        pos: emptyPos,
        type: 'module',
        override: true
    },
'http://basex.org/modules/archive' : {
    prefixes: ['archive'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/client' : {
    prefixes: ['client'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/convert' : {
    prefixes: ['convert'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/csv' : {
    prefixes: ['csv'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/inspect' : {
    prefixes: ['inspect'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/db' : {
    prefixes: ['db'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/fetch' : {
    prefixes: ['fetch'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/ft' : {
    prefixes: ['ft'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/hash' : {
    prefixes: ['hash'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/hof' : {
    prefixes: ['hof'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/html' : {
    prefixes: ['html'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/index' : {
    prefixes: ['index'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/inspect' : {
    prefixes: ['inspect'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/jobs' : {
    prefixes: ['jobs'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/json' : {
    prefixes: ['json'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/lazy' : {
    prefixes: ['lazy'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/out' : {
    prefixes: ['out'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/proc' : {
    prefixes: ['proc'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/prof' : {
    prefixes: ['prof'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/random' : {
    prefixes: ['random'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/repo' : {
    prefixes: ['repo'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/sql' : {
    prefixes: ['sql'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/strings' : {
    prefixes: ['strings'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/unit': {
    prefixes: ['unit'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/update' : {
    prefixes: ['update'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/user' : {
    prefixes: ['user'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/util' : {
    prefixes: ['util'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/validate' : {
    prefixes: ['validate'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/web': {
    prefixes: ['web'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/client' : {
    prefixes: ['client'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://basex.org/modules/xquery' : {
    prefixes: ['xquery'],
    pos: emptyPos,
    type: 'module',
    override: true
},
};

exports.W3 = {
'http://www.w3.org/2005/xpath-functions' : {
    prefixes: ['fn'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://www.w3.org/2005/xquery-local-functions' : {
    prefixes: ['local'],
    pos: emptyPos,
    type: 'declare',
    override: true
},
'http://www.w3.org/2010/xslt-xquery-serialization' : {
    prefixes: ['output'],
    pos: emptyPos,
    type: 'declare',
    override: true
},
'http://www.w3.org/2001/XMLSchema-instance': {
    prefixes: ['xsi'],
    pos: emptyPos,
    type: 'declare'
},
'http://www.w3.org/2001/XMLSchema' : {
    prefixes: ['xs'],
    pos: emptyPos,
    type: 'declare'
},
'http://www.w3.org/XML/1998/namespace' : {
    prefixes: ['xml'],
    pos: emptyPos,
    type: 'declare'
},
'http://www.w3.org/2005/xqt-errors' : {
    prefixes: ['err'],
    pos: emptyPos,
    type: 'declare',
    override: true
},
'http://www.w3.org/2005/xpath-functions/array' : {
    prefixes: ['array'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://www.w3.org/2005/xpath-functions/map' : {
    prefixes: ['map'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://www.w3.org/2005/xpath-functions/math' : {
    prefixes: ['math'],
    pos: emptyPos,
    type: 'module',
    override: true
}
};

exports.Expath = {
'http://expath.org/ns/binary' : {
    prefixes: ['bin'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://expath.org/ns/crypto' : {
    prefixes: ['crypto'],
    pos: emptyPos,
    type: 'module',
    override: true
},  
'http://expath.org/ns/file': {
    prefixes: ['file'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://expath.org/ns/http-client': {
    prefixes: ['http'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://expath.org/ns/zip': {
    prefixes: ['hzipttp'],
    pos: emptyPos,
    type: 'module',
    override: true
}
};

exports.Jsoniq ={
'http://jsoniq.org/functions' : {
    prefixes: ['jn'],
    pos: emptyPos,
    type: 'module',
    override: true
},
   'http://www.28msec.com/modules/collections' : {
    prefixes: ['db'],
    pos: emptyPos,
    type: 'module',
    override: true
},
   'http://www.28msec.com/modules/store' : {
    prefixes: ['store'],
    pos: emptyPos,
    type: 'module',
    override: true
},
   'http://jsoniq.org/function-library' : {
    prefixes: ['libjn'],
    pos: emptyPos,
    type: 'module',
    override: true
},
'http://zorba.io/annotations' : {
    prefixes: ['an'],
    pos: emptyPos,
    type: 'declare',
    override: true
},
'http://www.28msec.com/annotations/rest' : {
    prefixes: ['rest'],
    pos: emptyPos,
    type: 'declare',
    override: true
},

'http://zorba.io/errors' : {
    prefixes: ['zerr'],
    pos: emptyPos,
    type: 'declare',
    override: true
}
};