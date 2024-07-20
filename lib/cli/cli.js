'use strict';

var fs = require('fs');
var ffs = require('final-fs');
var path = require('path');
var cli = require('commander');
const colors = require('colors');
colors.disable(); // apb
var XQLint = require('../xqlint').XQLint;

var XQueryLexer = require('../lexers/xquery_lexer').XQueryLexer;
var ANSIOutput = require('./outputs/ansi').ANSIOutput;
var CodeFormatter = require('../formatter/formatter').CodeFormatter;

var pkg = require('../../package.json');

var getFiles = function (p) {
    p = path.resolve(path.normalize(p));
    var files = [];
    if (fs.statSync(p).isFile()) {
        files.push(p);
    } else {
        var list = ffs.readdirRecursiveSync(p, true, p);
        list.forEach((file) => {
            if (['.xq', '.xqm', 'xqy', '.xquery'].indexOf(path.extname(file)) !== -1) {
                files.push(file);
            }
        });
    }
    return files;
};

var formatCmd = cli.command('format <path>');
formatCmd.description('Format queries')
    .action(function (p) {
        var files = getFiles(p);
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8');
            var linter = new XQLint(source, { styleCheck: false });
            var formatter = new CodeFormatter(linter.getAST());
            var formatted = formatter.format();
            console.log(formatted.trim());
        });
    });

var highlightCmd = cli.command('highlight <path>');
/* highlightCmd.option(
    '-o, --output <html, ansi>',
    function(value){
        return value.toLowerCase();
    }
) */

highlightCmd
    .description('Highlight queries. ANSI terminal o/p')
    .action(function (p) {
        var files = getFiles(p);
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8');
            var lines = source.split('\n');
            var lexer = new XQueryLexer();
            var result = [], tokens, state;
            lines.forEach(function (line) {
                tokens = lexer.getLineTokens(line, state);
                state = tokens.state;
                result.push(tokens);
            });
            ANSIOutput(result);

        });
    });

var astCmd = cli.command('ast <path>');
astCmd
    .description('Print AST (abstract syntax tree) as XML')
    .action(function (p) {
        var files = getFiles(p);
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8');
            var linter = new XQLint(source, { fileName: file, styleCheck: false });
            console.log(linter.printAST());
        });
    });

var xqdocCmd = cli.command('xqdoc <path>');
xqdocCmd
    .option(
        '-p, --profile <name>',
        'XQuery profile (e.g. basex-10)',
        function (value) {
            return value.toLowerCase();
        }
    )
    .description('Print Module XQDoc. A custom json format.')
    .action(function (p, xqdocCmd) {
        var files = getFiles(p);
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8');
            var linter = new XQLint(source, { fileName: file, styleCheck: false, processor: xqdocCmd.profile });
            var xqdoc = linter.getXQDoc();
            console.log(JSON.stringify(xqdoc, null, 2));
        });
    });

var xqSymbols = cli.command('symbols <path>');
xqSymbols
    .option(
        '-p, --profile <name>',
        'XQuery profile (e.g. basex-10)',
        function (value) {
            return value.toLowerCase();
        }
    )
    .description('VScode style sysmbols.')
    .action(function (p, xqSymbols) {
        var files = getFiles(p);
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8');
            var linter = new XQLint(source, { fileName: file, styleCheck: false, processor: xqdocCmd.profile });
            var syms = linter.getSymbols();
            console.log(JSON.stringify(syms, null, 2));
        });
    });


var lintCmd = cli.command('lint <path>');
lintCmd.option(
    '-e, --emacs',
    'Format for Gnu/Emacs flymake.'
)
    .option(
        '-s, --style-check <yes, no>',
        'Check for code formatting.',
        function (value) {
            return value === 'yes';
        }
    )
    .option(
        '-p, --profile <name>',
        'XQuery profile (e.g. basex-10)',
        function (value) {
            return value.toLowerCase();
        }
    )
    .description('Check queries')
    .action(function (p, lintCmd) {
        var files = getFiles(p);
        var errors = 0;
        var warnings = 0;
        var spaces = function (count) {
            var result = '';
            for (var i = 1; i <= count; i++) {
                result += ' ';
            }
            return result;
        };
        files.forEach(function (file) {
            var source = fs.readFileSync(file, 'utf-8').replace(/^\uFEFF/, '');
            var linter = new XQLint(source, { fileName: file, styleCheck: lintCmd.styleCheck, processor: lintCmd.profile });
            var markers = linter.getMarkers().sort(function (a, b) { return a.sl - b.sl; });
            var lines = source.split('\n');
            if (markers.length !== 0) {
                if (!lintCmd.emacs) {
                    console.log(('\n' + file).bold);
                    linter.getErrors().forEach(function (error) {
                        errors++;
                        console.log('\t' + (error.pos.sl + 1) + ' |' + (lines[error.pos.sl]));
                        console.log('\t' + spaces((error.pos.sl + 1 + '').length + 1) + spaces(error.pos.sc + 1) + ('^ ' + error.message));
                    });
                    linter.getWarnings().forEach(function (error) {
                        warnings++;
                        console.log('\t' + (error.pos.sl + 1) + ' |' + (lines[error.pos.sl]));
                        console.log('\t' + spaces((error.pos.sl + 1 + '').length + 1) + spaces(error.pos.sc + 1) + ('^ ' + error.message));
                    });
                } else { // --emacs
                    markers.forEach(function (marker) {
                        console.log(marker.level.toUpperCase() + ': ' + file + ':' + (marker.pos.sl + 1) + ':' + (marker.pos.sc) + ':' + marker.level + ' ' + marker.message);
                    });
                }
            }
        });
        if (!lintCmd.emacs) {
            if (errors === 0 && warnings === 0) {
                console.log(('Linted ' + files.length + ' files').green);
            } else if (errors > 0) {
                throw new Error(('Linted ' + files.length + ' files. Found ' + errors + ' errors and ' + warnings + ' warnings.').red);
            } else if (warnings > 0) {
                throw new Error(('Linted ' + files.length + ' files. Found ' + errors + ' errors and ' + warnings + ' warnings.').yellow);
            }
        }
    });

cli.version(pkg.version);
module.exports = cli;
