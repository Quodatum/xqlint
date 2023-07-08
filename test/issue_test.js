'use strict';

var vows = require('vows');
var assert = require('assert');
var path = require('path');
var fs = require('fs');
const CodeFormatter = require('../lib/formatter/formatter').CodeFormatter;

var XQLint = require('../lib/xqlint').XQLint;
vows.describe('Test reported issues').addBatch({
    'format #27': function () {
        var linter = new XQLint(fs.readFileSync('test/queries/issues/issue27.xq', 'utf-8'), { styleCheck: false });
        const ast = linter.getAST();
        const formatter = new CodeFormatter(ast);
        const formatted = formatter.format().trim();
        var linter = new XQLint(formatted, { styleCheck: false });
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    },
    'import #28': function () {
        var linter = new XQLint(fs.readFileSync('test/queries/rbtree.xq/map.xq', 'utf-8'),
            {
                processor: 'basex',
                styleCheck: false
            });
        var markers = linter.getErrors();
        console.log(markers);
        assert.equal(markers.length, 0);
    }
}).export(module);