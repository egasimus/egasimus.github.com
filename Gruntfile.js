module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*
			TASKS
		*/

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**/**'],
                        dest: 'stage/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'src/images/',
                        src: ['**/**'],
                        dest: 'stage/images'
                    },
                    {
                        expand: true,
                        cwd: 'src/scripts/',
                        src: ['**/**.js'],
                        dest: 'stage/scripts'
                    }
                ]
            }
        },

        stylus: {
            compile: {
                files: [
                    {
                        src: 'src/styles/style.styl',
                        dest: 'stage/styles/style.css'
                    }
                ]
            }
        },

        coffee: {
            compile: {
                expand: true,
                cwd: 'src/scripts/',
                src: '**/*.coffee',
                dest: 'stage/scripts/',
                ext: '.js',
            }
        },

        jade: {
            compile: {
                expand: true,
                cwd: 'src/pages/',
                src: '**/*.jade',
                dest: 'stage/',
                ext: '.html',
            }
        },

        watch: {
            files: ['src/**/*'],
            tasks: ['stylus:compile', 'coffee:compile', 'jade:compile',
                    'copy:main'],
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['stylus', 'coffee', 'jade', 'copy:main']);

};
