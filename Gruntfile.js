module.exports = function(grunt) {
	'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);
    
    grunt.registerMultiTask('rex', 'Generate Parsers', function(){
        var fs = require('fs');
        var axios = require('axios');
        var FormData = require('form-data');
        var path = require('path');
        var Q = require('q');
        var done = this.async();
        var promises = [];
        this.data.grammars.forEach(function(parser){
            var deferred = Q.defer();
            var grammar = fs.readFileSync(parser.source);
            var form = new FormData();
            form.append('tz', parser.tz, { knownLength:  Buffer.from(parser.tz).length, contentType: 'text/plain'  });
            form.append('command', parser.command, { knownLength:  Buffer.from(parser.command).length, contentType: 'text/plain' });
            form.append('input', grammar, { knownLength :  Buffer.from(grammar).length, contentType: 'text/plain', filename: path.basename(parser.source) });

            // Prepare additional headers for Axios, which include FormData's headers and the Content-Length
           const headers = {
                ...form.getHeaders(),
                "Content-Length": form.getLengthSync()
            };
            var r = axios.post('https://www.bottlecaps.de/rex/', form, {headers})
            .then(function (response) {
                fs.writeFileSync(parser.destination, response.data);
                deferred.resolve();
              })
              .catch(function (error) {
                deferred.reject(error);
              });
              
            promises.push(deferred.promise);
        });
        Q.all(promises)
        .then(function(){
            done();
        })
	    .catch(function(error){
            grunt.fail.fatal(error);
	    });
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
                options: {
                    verbose: true,
                    colors: true,
                    coverage: 'json'
                },
                // String or array of strings
                // determining which files to include.
                // This option is grunt's "full" file format.
                src: ['test/*.js', 'spec/*']
            }
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
        }
    });
    grunt.registerTask('browser_build', ['browserify:browser_build']);
    grunt.registerTask('lexers', ['rex:lexers']);
    grunt.registerTask('parsers', ['rex:parsers']);
    grunt.registerTask('default', ['jshint', 'vows']);
};
