module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            ts: {
                files: ['**/*.ts', "!node_modules/**/*.ts"],
                tasks: ['ts:dev']
            },
            jade: {
                files: ["**/*.jade"],
                tasks: ['express:dev'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            express: {
                files: ['**/*.js', "**/*.jade", "!node_modules/**/*.js"],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        ts: {
            dev: {
                options: {
                    target: 'es5', // target javascript language. [es3 | es5 (grunt-ts default) | es6]
                    module: 'commonjs', // target javascript module style. [amd (default) | commonjs]
                    sourceMap: false
                },
                src: ["**/*.ts", "!node_modules/**/*.ts", "!typings/**/*.ts"]
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        concurrent: {
            default: ['express:dev', 'watch'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask("default", ['concurrent:default']);
}
