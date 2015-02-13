'use strict';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            application: {
              src: ['src/javascript/*.js'],
              dest: 'dist/application.js',
            },

            styles: {
              src: ['src/styles/*.css'],
              dest: 'dist/styles.css',
            }
            // extras: {
            //   src: ['src/main.js', 'src/extras.js'],
            //   dest: 'dist/with_extras.js',
            // },
        }

    });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.   
  grunt.registerTask('default', ['concat']);
  // Project configuration.

  // Load the plugin tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
};