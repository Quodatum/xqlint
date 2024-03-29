/*jshint esversion: 9 */
const { XQLint } = require('./lib/xqlint');

module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    grunt.registerMultiTask('rex', 'Generate Parsers', function () {

        var fs = require('fs');
        var axios = require('axios');
        var FormData = require('form-data');
        var path = require('path');
        /* return promise to make REx call and save result to file using parser obj properties */
        async function rex(parser) {
            var grammar = fs.readFileSync(parser.source);
            var form = new FormData();
            form.append('tz', parser.tz, { knownLength: Buffer.from(parser.tz).length, contentType: 'text/plain' });
            form.append('command', parser.command, { knownLength: Buffer.from(parser.command).length, contentType: 'text/plain' });
            form.append('input', grammar, { knownLength: Buffer.from(grammar).length, contentType: 'text/plain', filename: path.basename(parser.source) });

            // Prepare additional headers for Axios, which include FormData's headers and the Content-Length
            const headers = {
                ...form.getHeaders(),
                'Content-Length': form.getLengthSync()
            };
            return new Promise(function (resolve, reject) {
                var p = axios.post('https://www.bottlecaps.de/rex/', form, { headers });
                p.then(function (response) {
                    fs.writeFileSync(parser.destination, response.data);
                    resolve("saved: " + parser.destination);
                })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        }

        var promises = [];
        this.data.grammars.forEach(function (parser) {
            promises.push( rex(parser));     
        });
        Promise.all(promises).then(function (r){
            console.log("dONE",r);
           });
        console.log("SS");
    });

    grunt.registerMultiTask('index', 'Generate index xqdoc', function () {
        var fs = require('fs');
        grunt.file.expand(this.data.src).forEach(function (filename) {
            var source = fs.readFileSync(filename, 'utf8');
            console.log(filename);
            var linter = new XQLint(source, { fileName: filename, styleCheck: false });
            var xqdoc = linter.getXQDoc();
            // Display the file content
            console.log(xqdoc);
        });

        //console.log(this.target,this.data) 
    });
    grunt.initConfig({
        rex: {
            parsers: {
                grammars: [
                    {
                        source: 'lib/parsers/XQueryParser.ebnf',
                        destination: 'lib/parsers/XQueryParser.js',
                        command: '-ll 2 -backtrack -tree -javascript -a xqlint',
                        tz: '0',
                    }
                ]
            },
            lexers: {
                grammars: [
                    {
                        source: 'lib/lexers/XQueryTokenizer.ebnf',
                        destination: 'lib/lexers/XQueryTokenizer.js',
                        command: '-ll 2 -backtrack -tree -javascript -a xqlint',
                        tz: '0'
                    }
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'lib/**/*.js',
                'test/**/*.js'
            ]
        },
        vows: {
            all: {
                //
                options: {
                    verbose: true,
                    colors: true,
                    coverage: 'json',
                    reporter: 'dot-matrix',
                },
                // String or array of strings
                // determining which files to include.
                // This option is grunt's "full" file format.
                src: ['test/*.js']
            },
            one: {
                options: {
                    verbose: true,
                    colors: false,
                    coverage: 'json'
                },
                // String or array of strings
                // determining which files to include.
                // This option is grunt's "full" file format.
                src: ['test/type_test.js']
                //src: ['test/issue_test.js']
                //src: ['test/stylecheck_test.js']
                //src: ['test/function_test.js']
                //src: ['test/variable_test.js']
                //src: ['test/parser_test.js'] //26 fail
                //src: ['test/completion_test.js'] //3 fail
                //src: ['test/parser_test.js'] //26 fail
                //src: ['test/issue_test.js'] //26 fail
            },
        },
        browserify: {
            browser_build: {
                files: {
                    'build/xqlint.js': ['lib/xqlint.js'],
                    'build/xquery_lexer.js': ['lib/lexers/xquery_lexer.js']
                },
                options: {
                    standalone: ''
                }
            }
        },
        index: {
            main: {
                src: ['specs/xquery.lib/basex.org/*.xq?'],
                dest: 'apb/index.js',
            }
        }
    });
    grunt.registerTask('browser_build', ['browserify:browser_build']);
    grunt.registerTask('lexers', ['rex:lexers']);
    grunt.registerTask('parsers', ['rex:parsers']);
    grunt.registerTask('default', ['jshint', 'vows']);
};
