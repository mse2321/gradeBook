module.exports = function(grunt) {
 
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'css/style.css': 'css/style.scss'
              }
          }
      },
      watch: {
        files: ['css/style.scss'],
        tasks: ['sass']
      }
  });

  grunt.loadNpmTasks('grunt-sass'); 
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.registerTask('default', ['sass']);

};