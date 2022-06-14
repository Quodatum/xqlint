# @Quodatum/XQLint [npm](https://www.npmjs.com/package/@quodatum/xqlint)

This is a fork of the marvelous [wcandillon/xqlint](https://github.com/wcandillon/xqlint). 
XQLint parses XQuery  files and returns errors and warnings based on static code analysis.
![example](http://i.imgur.com/86jU7C1.png)

 The goal of this fork is to support browser hosted XQuery code editing for current BaseX versions (9.6+).
This is an Alpha - errors and changes expected.

This fork has been used as a drop-in update for `wcandillon/xqlint` in the following projects:
* the [Ace editor](https://github.com/ajaxorg/ace) 
* the VS code extension DotJoshJohnson's [XML tools](https://github.com/DotJoshJohnson/vscode-xml)

## Command line usage
### Lint

```bash
$ xqlint lint <path> [-s, --style-check <yes, no>]
```


### Format

```bash
$ xqlint format <path>
```

### Print AST as XML

```bash
$ xqlint ast <path>
```

### Syntax Highlighting

```bash
$ xqlint highlight <path>
```
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

