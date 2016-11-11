module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      basic: {
        src: ['example/app.js'],
        dest: 'bundles/basic-bundle.js'
      }
    },

    watch: {

      styles: {
        files: ['example/**/*.js', 'behaviors/**/*.js', 'example/**/*.html'],
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('dev', ['browserify', 'watch']);
  grunt.registerTask('dev-s', ['browserify', 'connect', 'watch']);
};
