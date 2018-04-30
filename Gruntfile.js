module.exports = function(grunt) {
	// Set up a versioned folder for SassDoc
	var pkg = require('./package.json'),
		 docsVersionFilePath = 'docs/' + pkg.version;

	grunt.file.mkdir( docsVersionFilePath );

	// Configure Grunt

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bower: {
			install: {
				options: {
					targetDir: 'bower_components',
					verbose: true,
					copy: false
				}
			}
		},
		browserSync: {
			current: {
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
						module: 'bs-html-injector',
							options: {
								files: docsVersionFilePath + '/*.html'
							}
						}
					]
				}
			},
			all: {
				bsFiles: {
					src : ['docs/*.html', 'docs/css/*.css', 'docs/js/*.js']
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './docs'
					}
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
			alpha: {
				expand: true,
				cwd: '_docs/0.1.0',
				src: ['**/*.html', 'vendor/**/*'],
				dest: 'docs/0.1.0'
			},
			one: {
				expand: true,
				cwd: '_docs/1.0.0',
				src: ['**/*.html', 'assets/**/*'],
				dest: 'docs/1.0.0'
			},
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
				display: {
					access: ['public'],
				},
				dest: docsVersionFilePath,
				theme: 'node_modules/sassdoc-theme-budocs',
				basePath: 'https://github.com/bu-ist/responsive-foundation/tree/' + pkg.version + '/css-dev',
				groups: {
					'01-config': 'Global Configuration',
					'02-mixins': 'Helpers',
					'03-icons': 'Icons',
					'04-typography': 'Typography',
					'05-grid': 'Grid',
					'06-navigation': 'Navigation',
					'07-branding': 'Branding',
					'08-layout': 'Layout',
					'09-content': 'Content',
					'10-widgets': 'Widgets',
					'11-forms': 'Forms',
					'12-news': 'News',
					'13-calendar': 'Calendar',
					'14-profiles': 'Profiles',
					'wp-admin': 'WordPress Admin',
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-version');

	grunt.registerTask('build', ['bower:install', 'sassdoc']);
	grunt.registerTask('deploy', ['build', 'gh-pages']);
	grunt.registerTask('serve', ['build', 'browserSync:current', 'watch']);
	grunt.registerTask('previewall', ['build', 'browserSync:all', 'watch']);

	grunt.registerTask('default', ['serve']);

};
