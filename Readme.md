# @Quodatum/XQLint 
[npm](https://www.npmjs.com/package/@quodatum/xqlint)

XQLint parses XQuery  files and returns errors and warnings based on static code analysis. It provides the following features:
* lint: errors and warnings based on static code analysis
* format:  standardised indentation of source.
* ast:   Abstract syntax tree as XML
* xqdoc: json object with information similar to the xqdoc XML format
* completion: suggestions for line completion given a source and location. 
* highlight console source listing using https://www.npmjs.com/package/colors

 The goal of this project is to support XQuery development tools, particularly for [BaseX](https:basex.org) (9.7+).

![example](https://i.imgur.com/NZFnzZ5.png)

This project is in an Alpha state - errors and changes expected.

This project began as a fork of the marvelous [wcandillon/xqlint](https://github.com/wcandillon/xqlint).
but many features have been added and some removed.

 `quodatum/xqlint` has been used as a drop-in replacement for `wcandillon/xqlint` in the following projects:

* the [Ace editor](https://github.com/ajaxorg/ace) 
* [XML tools](https://github.com/DotJoshJohnson/vscode-xml) DotJoshJohnson's VS code extension 

## Installation

Install Node.js and NPM for your system (Mac, Windows or Linux). Then install the command line tool using:

```bash
$ npm install @quodatum/xqlint -g
```
## Command line usage
### Lint

`style-check` reports trailing whitespace, tab use
```bash
$ xqlint lint <path> [-s, --style-check <yes, no>]
```

windows..
```
node bin\xqlint --no-color lint C:\Users\andy\git\bloomsbury\XML-CMS\data_server\eBloomsbury\  >report.txt

node bin\xqlint lint --style-check yes cases\history.xqm 
```

### Format

```bash
$ xqlint format <path>
```

### xqdoc JSON object

```bash
$ xqlint xqdoc <path>
{
    "ns" : "http://www.w3.org/2005/xpath-functions/math", 
    "description" : " This module contains all the functions part of the\n W3C XPath and XQuery Functions and Operators 3.0\n section \"4.7 Trigonometric and exponential functions\".\n", 
    "sees" : [ "<xqdoc:see xmlns:xqdoc=\"http://www.xqdoc.org/1.0\">http://www.w3.org/TR/xpath-functions-30/#trigonometry</xqdoc:see>" ], 
    "authors" : [ "<xqdoc:author xmlns:xqdoc=\"http://www.xqdoc.org/1.0\">www.w3c.org</xqdoc:author>" ], 
    "version" : null, 
    "encoding" : "utf-8", 
    "namespaces" : [ {
      "uri" : "http://www.w3.org/2005/xpath-functions/math", 
      "prefix" : "math"
    } ], 
  "variables": [],
  "functions": [
   {
      "isDocumented" : true, 
      "arity" : 1, 
      "name" : "acos", 
      "qname" : "math:acos", 
      "signature" : "($arg as xs:double?) as xs:double? external", 
      "description" : " <div xmlns:xqdoc=\"http://www.xqdoc.org/1.0\"><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">Returns the arc cosine of the argument, the result being in the range zero to\n                +<var>œÄ</var> radians.</p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\"><example role=\"signature\"><proto name=\"acos\" return-type=\"xs:double?\" isOp=\"no\" prefix=\"math\" returnEmptyOk=\"no\" returnSeq=\"no\" returnVaries=\"no\" isSchema=\"no\" isDatatype=\"no\" isSpecial=\"no\"><arg name=\"arg\" type=\"xs:double?\"/></proto></example></p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">This function is <termref def=\"dt-deterministic\">deterministic</termref>, <termref def=\"dt-context-independent\">context-independent</termref>,  and <termref def=\"dt-focus-independent\">focus-independent</termref>. </p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">If <code>$arg</code> is the empty sequence, the function returns the empty sequence.</p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\" diff=\"chg\" at=\"G\">Otherwise the result is the arc cosine of <code>$</code><var>Œ∏</var>,\n             treated as an angle in radians, as defined in the <bibref ref=\"ieee754-2008\"/>\n             specification of the <code>acos</code> function applied to 64-bit binary floating point\n             values.</p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">The treatment of the <code>invalidOperation</code> exception is defined in <specref ref=\"op.numeric\"/>. </p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">If <code>$arg</code> is <code>NaN</code>, or if its absolute value is greater than one,\n             then the result is <code>NaN</code>.</p><p xmlns:e=\"http://www.w3.org/1999/XSL/Spec/ElementSyntax\">In other cases the result is an <code>xs:double</code> value representing an angle\n                <var>Œ∏</var> in radians in the range <code>0 &lt;= $</code><var>Œ∏</var><code> &lt;=\n                +</code><var>œÄ</var>. </p></div>\n", 
      "summary" : "<p>  Returns the arc cosine of the argument, the result being in the range zero to\n                + œÄ  radians.</p>", 
      "annotation_str" : "", 
      "annotations" : [  ], 
      "updating" : false, 
      "parameters" : [ {
        "name" : "arg", 
        "type" : "xs:double", 
        "occurrence" : "?", 
        "description" : ""
      } ], 
      "returns" : {
        "type" : "xs:double?", 
        "description" : ""
      }, 
      "errors" : [  ]
    },
   
```
### Print AST as XML

```bash
$ xqlint ast <path>

<XQuery>
  ....
  <EOF>
   </EOF>
</XQuery>
```

### Syntax Highlighting

```bash
$ xqlint highlight <path>
```
The output is for terminal display

## Code
The following functions are exported:
 
* XQLint = function (source, opts)
* XQueryLexer
* createStaticContext(processor)
* CodeFormatter(ast, newLinesEnabled, DEBUG)

## Dev


### Generate parsers

`grunt parsers`

Command generates:

 *   lib/lexers/XQueryTokenizer.ebnf -> XQueryTokenizer.js
 *   lib/parsers/XQueryParser.ebnf -> XQueryParser.js




## Development

If you'd like to hack on xqlint itself:

```bash
git clone https://github.com/Quodatum/xqlint
cd xqlint
npm install
sudo npm install grunt@1.5.3 -g
grunt
```

### Run tests

```bash
grunt vows
```

### Generate Parsers

```bash
grunt parsers
```

