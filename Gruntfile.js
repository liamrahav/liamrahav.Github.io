module.exports = function(grunt) {
		grunt.initConfig({
			sass: {
				compile: {
					options: {
						style: 'compressed',
						sourcemap: 'none'
					},
					files: {
						'css/styles.css': 'css/sass/styles.scss'
					}
				}
			},
			
			htmlmin: {
				dist: {
					options: {
						removeComments: true,
						collapseWhitespace:true
					},
					files: {
						'index.html': '_index.html'
					}
				}
			},
			
			watch: {
				style: {
					files: ["css/**/*.scss", '*.html'],
					tasks: ['sass', 'htmlmin']
				}
			}
		});
		
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-htmlmin');
		
		grunt.registerTask('default', ['sass:compile', 'htmlmin',"watch"]);
}