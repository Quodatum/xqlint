'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/xqlint').XQLint;
var StaticContext = require('../lib/compiler/static_context').StaticContext;

vows.describe('module URI Resolver').addBatch({

   
    'test unknown ns': function(){
        var src=`
        import module namespace ns = 'http://www.unknown.org/';42       
        `;
        var linter = new XQLint(src,{  processor: 'basex-9'  });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 2, 'Number of markers');
    }, 
    'test java ns': function(){
        var src=`
        (:~ java :)
        module namespace pdfbox = 'urn:pdfbox';
        declare namespace Loader ="java:org.apache.pdfbox.Loader"; 
        declare namespace RandomAccessReadBufferedFile = "java:org.apache.pdfbox.io.RandomAccessReadBufferedFile";
        
        declare function pdfbox:open($pdfpath as xs:string){
          Loader:loadPDF( RandomAccessReadBufferedFile:new($pdfpath))
        };        
        `;
        var linter = new XQLint(src,{  processor: 'basex-10'  });
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
    },
}).export(module);
