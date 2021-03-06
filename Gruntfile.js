module.exports = function(grunt) {
    var autoprefixer = require('autoprefixer-core');
    var cssnano = require('cssnano');
    var postcssImport = require('postcss-import');

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    autoprefixer({
                        browsers: ['last 2 versions']
                    }),
                    postcssImport({
                        path: ['css/'],
                    }),

                ]
            },
            dist: {
                src: 'css/main.css',
                dest: 'build/css/main.css'
            }
        },

        watch: {
          scripts: {
            files: '**/*.css',
            tasks: ['build'],
            options: {
              interrupt: true,
            },
          },
        },
    });

    //cssnano()

    grunt.registerTask('build', ['postcss']);
};