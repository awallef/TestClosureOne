module.exports = function (grunt) {
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        
        // ./dist/js/vendor/closure-library/closure/bin/build/closurebuilder.py --root=src/ --root=dist/js/vendor/closure-library/ --namespace="wallef.start" --output_mode=script --output_file=dist/js/output.js
        'closureBuilder':  {
            options: {
                // [REQUIRED] To find the builder executable we need either the path to
                //    closure library or directly the filepath to the builder:
                closureLibraryPath: 'src/vendor/closure-library/', // path to closure library
                // [OPTIONAL] You can define an alternative path of the builder.
                //    If set it trumps 'closureLibraryPath' which will not be required.
                builder: 'src/vendor/closure-library/closure/bin/build/closurebuilder.py',

                // [REQUIRED] One of the two following options is required:
                //inputs: ['src/'], // input files (can just be the entry point)
                namespaces: ['wallef.start'], // namespaces

                // [OPTIONAL] The location of the compiler.jar
                // This is required if you set the option "compile" to true.
                //java -jar build/compiler.jar --compilation_level="ADVANCED_OPTIMIZATIONS" --js_output_file=dist/js/output.min.js --js=dist/js/output.js --output_wrapper "(function() {%output%})();"
                compilerFile: 'build/compiler.jar',

                // [OPTIONAL] output_mode can be 'list', 'script' or 'compiled'.
                //    If compile is set to true, 'compiled' mode is enforced.
                //    Default is 'script'.
                output_mode: 'script',

                // [OPTIONAL] if we want builder to perform compile
                compile: false, // boolean

                compilerOpts: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT',
                    js_output_file: 'dist/js/output.min.js',
                    js: 'tmp/output.js',
                    output_wrapper: '(function() {%output%})();'
                },
                // [OPTIONAL] Set exec method options
                execOpts: {
                    /**
                     * Set maxBuffer if you got message "Error: maxBuffer exceeded."
                     * Node default: 200*1024
                     */
                    maxBuffer: 999999 * 1024
                }

              },

              // any name that describes your operation
              targetName: {

                // [REQUIRED] paths to be traversed to build the dependencies
                src: ['src/'],

                // [OPTIONAL] if not set, will output to stdout
                dest: 'tmp/output.js'
            }
        }

        
        /*
        'closure-compiler': {
            frontend: {
                closurePath: '/usr/local/opt/closure-compiler/libexec/',
                js: 'src/frontend.js',
                jsOutputFile: 'dist/js/frontend.min.js',
                maxBuffer: 500,
                options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT',
                    root: 'js/vendor/closure-library/'
                }
            }
        }
        */
    });
    
    // tasks from npm
    grunt.loadNpmTasks('grunt-closure-tools');
    //grunt.loadNpmTasks('grunt-closure-compiler');
    
    // our tasks
    grunt.registerTask('default', 'closureBuilder');
    //grunt.registerTask('default', 'closure-compiler');

}