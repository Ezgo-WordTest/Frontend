module.exports = function(grunt) {
    require('google-closure-compiler').grunt(grunt);

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'browserify': {
            options: {
                extensions: ['.js'],
                alias: { jquery : 'jquery-browserify' },
            },
            dev: {
                options: {
                    browserifyOptions:{
                        debug: true, /* for source maps */
                    },
                    debug: true,
                },
                src: ['./js/index.js'],
                dest: 'public/js/main.js',
            },
            dist: {
                src: ['./js/index.js'],
                dest: 'public/js/main.js',
            },
        },
        'closure-compiler': {
            dist: {
                files: {
                   'public/js/main.min.js' : ['public/js/main.js'],
                },
                options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT',
                    create_source_map: 'dist/main.min.js.map',
                    output_wrapper: '(function(){\n%output%\n}).call(this)\n//# sourceMappingURL=main.min.js.map',
                },
            }
        },
        'jshint': {
            options: {
                jshintrc: '.jshintrc',
            },
            js: ['js/**/*.js'],
        },
        'compass': {
            options: {
                sassDir: 'sass',
                fontsDir: 'fonts',
                cssDir: 'public/css',
            },
            dist: {
                options: {
                    environment: 'production',
                    outputStyle: 'compress',
                },
            },
            dev: { },
        },
        'cachebreaker': {
            html: {
                options: {
                    match: ['main.js', 'css/ui.css', 'css/load.css'],
                    replacement: 'time',
                    position: 'append',
                },
                files: {
                    src: ['public/index.html']
                }
            }
        },
        'watch': {
            options: {
                spawn: true,
                atBegin: true,
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['jshint:js', 'browserify:dev'],
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            },
            html: {
                files: ['src/**/*.js', 'sass/**/*.scss'],
                tasks: ['cachebreaker:html'],
            },
        },
        'concurrent': {
            options: {
                logConcurrentOutput: true,
            },
            dev: {
                tasks: ['watch:scripts', 'watch:css', 'watch:html'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cache-breaker');

    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('dist', ['jshint:js', 'browserify:dist', 'closure-compiler:dist', 'compass:dist']);

};
