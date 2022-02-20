'use strict';
//  Create deep clone
// @see https://javascript.plainenglish.io/javascript-how-to-deep-clone-an-object-daa1ec29d216
var object_create = Object.create;
if (typeof object_create !== 'function') {
    object_create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

function deepClone(src){
    if (src === null || typeof (src) !== 'object') {
        return src;
    }

    //Honor native/custom clone methods
    if (typeof src.clone == 'function') {
        return src.clone(true);
    }

    //Special cases:
    //Date
    if (src instanceof Date) {
        return new Date(src.getTime());
    }
    //RegExp
    if (src instanceof RegExp) {
        return new RegExp(src);
    }
    //DOM Element
    if (src.nodeType && typeof src.cloneNode == 'function') {
        return src.cloneNode(true);
    }

    //Array
    if (Object.prototype.toString.call(src) == '[object Array]') {
        //[].slice() by itself would soft clone
        var ret = src.slice();

        var i = ret.length;
        while (i--) {
            ret[i] = deepClone(ret[i]);
        }
        return ret;
    }

    //If we've reached here, we have a regular object
    var proto = (Object.getPrototypeOf ? Object.getPrototypeOf(src): src.__proto__);    
    var dest = object_create(proto);
    for (var key in src) {
        //Note: this does NOT preserve ES5 property attributes like 'writable', 'enumerable', etc.
        dest[key] = deepClone(src[key]);
    }
    return dest;
};
exports.deepClone;