module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        cssmin: {
            target: {
                files: {
                    'css/main.min.css': ['css/may.css', 'css/main.css']
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
          
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};