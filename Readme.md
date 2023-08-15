# @Quodatum/XQLint 


[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/quodatum/xqlint?display_name=tag&include_prereleases&sort=semver)](https://github.com/Quodatum/xqlint/releases)
[![GitHub](https://img.shields.io/github/license/quodatum/xqlint)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/quodatum/xqlint)](https://github.com/Quodatum/xqlint/commits/master)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/quodatum/xqlint/release.yml)
[![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@quodatum/xqlint)](https://www.npmjs.com/package/@quodatum/xqlint)


XQLint parses XQuery  files and returns errors and warnings based on static code analysis. It provides the following features:
* Lint: errors and warnings based on static code analysis.
* Format:  standardised indentation of source.
* AST:   Abstract syntax tree as XML.
* xqdoc: json object with information similar to the xqdoc XML format
* Completion: suggestions for line completion given a source and location. 
* Highlight console source listing using https://www.npmjs.com/package/colors
* Context analysis for a position in source

 The goal of this project is to support XQuery development tools, particularly for [BaseX](https:basex.org) (9.7+).


This project is in an Alpha state - errors and changes expected.

This project began as a fork of the marvelous [wcandillon/xqlint](https://github.com/wcandillon/xqlint).
but many features have been added and some, such as JSONiq support, removed.

 Earlier versions `quodatum/xqlint` have been used as a drop-in replacement for `wcandillon/xqlint` in the following projects:

* the [Ace editor](https://github.com/ajaxorg/ace) 
* [XML tools](https://github.com/DotJoshJohnson/vscode-xml) DotJoshJohnson's VS code extension 

Due to changes in the range object this is no longer as simple.
# Installation

XQlint is published on [npm](https://www.npmjs.com/package/@quodatum/xqlint)
Install Node.js and NPM for your system (Mac, Windows or Linux). Then install the command line tool using:

```bash
$ npm install @quodatum/xqlint -g
```
# Command line usage
## Lint
Analyse code for potential errors. In file or directory
### Examples
 ```
 xqlint lint -pbasex-9 .
 xqlint lint . --processor basex-10
 ```
 ### Options
 * `--processor name` or `-pname` processor libraries to load
* `--style-check no` or `-s` yes/no. reports on trailing whitespace, tab use

```bash
$ xqlint lint <path> [-s, --style-check <yes, no>]
```

windows..
```
xqlint --no-color lint C:\Users\andy\git\proj\XML-CMS\data_server\eapp\  >report.txt

xqlint lint --style-check yes cases\history.xqm 
```

## Format

```bash
$ xqlint format <path>
```

## xqdoc JSON object

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


# Development

If you'd like to hack on xqlint itself:

```bash
git clone https://github.com/Quodatum/xqlint
cd xqlint
npm install
sudo npm install grunt@1.5.3 -g
grunt
```

## Run tests

```bash
grunt vows

// just one test, hardcoded in `grunt.js`
grunt vows:test
```


## Generate parsers

`npm run-script rex parsers`

Command generates:

 *   lib/lexers/XQueryTokenizer.ebnf -> XQueryTokenizer.js
 *   lib/parsers/XQueryParser.ebnf -> XQueryParser.js

## publish to npm

```
npm pack
npm publish
```

