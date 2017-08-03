module.exports = function(grunt) {
	// Set up a versioned folder for SassDoc
	var pkg = require('./package.json'),
		 docsVersionFilePath = 'docs/' + pkg.version;

	grunt.file.mkdir( docsVersionFilePath );

	// Configure Grunt

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserSync: {
			docs: {
				bsFiles: {
					src : [
						docsVersionFilePath + '/css/*.css',
						docsVersionFilePath + '/*.html'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: docsVersionFilePath
					},
					plugins: [
						{
						module: "bs-html-injector",
							options: {
								files: docsVersionFilePath + "/*.html"
							}
						}
					]
				}
			}
		},
		concat: {
			docs: {
				files: {
					'docs/js/docs.js': 'js-dev/*.js'
				}
			}
		},
		copy: {
			docs: {
				expand: true,
				cwd: '_docs',
				src: ['**/*.html', 'vendor/**/*'],
				dest: 'docs'
			}
		},
		'gh-pages': {
			options: {
				base: 'docs'
			},
			src: ['**']
		},
		sass: {
			docs: {
				options: {
					style: 'compressed',
					loadPath: [
						'bower_components/normalize.scss/sass',
						'bower_components/mathsass/dist/',
						'css-dev'
					],
				},
				files: {
					'docs/css/docs.css': '_docs/css-dev/docs.scss',
				}
			}
		},
		version: {
			bower: {
				src: ['bower.json']
			}
		},
		watch: {
			grunt: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js']
			},
			docs: {
				files: ['_docs/**/*.html'],
				tasks: ['copy']
			},
			scripts: {
				files: [
					'js-dev/*.js'
				],
				tasks: ['concat']
			},
			styles: {
				files: [
					'_docs/css-dev/*.scss',
					'css-dev/**/*.scss'
				],
				tasks: ['sass']
			},
			vendor: {
				files: ['_docs/vendor/**/*'],
				tasks: ['copy']
			}
		},
		sassdoc: {
			src: 'css-dev/**/*.scss',
			options: {
				//config: 'sassdoc-config.json',
				dest: docsVersionFilePath,
				theme: 'bower_components/sassdoc-theme-budocs'
			},
			//basePath: 'https://github.com/bu-ist/responsive-foundation/tree/' + pkg.version + '/css-dev'
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-version');

	grunt.registerTask('build', ['sassdoc']);
	grunt.registerTask('deploy', ['build', 'gh-pages']);
	grunt.registerTask('serve', ['build', 'browserSync', 'watch']);

	grunt.registerTask('default', ['serve']);

};
