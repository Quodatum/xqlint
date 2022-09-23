# @Quodatum/XQLint 
[npm](https://www.npmjs.com/package/@quodatum/xqlint)

XQLint parses XQuery  files and returns errors and warnings based on static code analysis. It provides the following features:
* lint: errors and warnings based on static code analysis
* format:  the source with smart indentation applied
* ast:  source Abstract syntax tree as XML
* xqdoc: json object with information similar to the xqdoc XML format 
* highlight console source listing using https://www.npmjs.com/package/colors

 The goal of this project is to support XQuery development tools, particularly for [BaseX](https:basex.org) (9.7+).

![example](https://i.imgur.com/NZFnzZ5.png)
This project is in an Alpha state - errors and changes expected.

This project began as a fork of the marvelous [wcandillon/xqlint](https://github.com/wcandillon/xqlint).
but many features have been added and some removed.

 `quodatum/xqlint` has been used as a drop-in replacement for `wcandillon/xqlint` in the following projects:

* the [Ace editor](https://github.com/ajaxorg/ace) 
* [XML tools](https://github.com/DotJoshJohnson/vscode-xml) DotJoshJohnson's VS code extension 

## Command line usage
### Lint

```bash
$ xqlint lint <path> [-s, --style-check <yes, no>]
```
windows..
```
node bin\xqlint --no-color lint C:\Users\andy\git\bloomsbury\XML-CMS\data_server\eBloomsbury\  >report.txt
```

### Format

```bash
$ xqlint format <path>
```

### xqdoc JSON object

```bash
$ xqlint xqdoc <path>
{
  "moduleNamespace": "http://www.rave-tech.com/bloomsbury/jobs/check-in",
  "description": "checkin Utilities",
  "variables": [],
  "functions": [
    {
      "name": "prepare-job",
      "uri": "http://www.rave-tech.com/bloomsbury/jobs/check-in",
      "params": [
        "$jobInfo as map(*)",
        "$filename as xs:string"
      ],
      "pos": {
        "sl": 11,
        "sc": 26,
        "el": 11,
        "ec": 45
      }
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






## Installation

Install Node.js and NPM for your system (Mac, Windows or Linux). And install the command line tool using:

```bash
$ npm install @quodatum/xqlint -g
```

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

