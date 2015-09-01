module.exports = function(grunt) {
    grunt.initConfig({
    	watch : {
    		ts : {
    			files: ['**/*.ts', "!node_modules/**/*.ts"],
   		 		tasks: ['ts:dev'],
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
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask("default", ["watch"]);
}
