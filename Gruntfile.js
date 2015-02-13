'use strict';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            application: {
              src: ['src/javascript/*.js'],
              dest: 'build/application.js',
            },

            styles: {
              src: ['src/styles/*.css'],
              dest: 'build/styles.css',
            }
            // extras: {
            //   src: ['src/main.js', 'src/extras.js'],
            //   dest: 'dist/with_extras.js',
            // },
        },
        uglify: {
          build: {
              src: 'build/application.js',
              dest: 'build/application.min.js'
          }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['src/images/*.{png,jpg,gif}'],
                    dest: 'build/images'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['src/javascript/*.js', 'src/styles/*.css', 'src/images/*.{png,jpg,gif}', 'src/index.html'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            } 
        }


    });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin tasks
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.   
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};