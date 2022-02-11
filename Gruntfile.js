// Require external packages.
const autoprefixer = require( 'autoprefixer' );
const sass = require( 'node-sass' );

// Set up a versioned folder for SassDoc
const pkg = require( './package.json' );

module.exports = ( grunt ) => {
	const docsVersionFilePath = `docs/${ pkg.version }`;
	const kssDocsFilePath = docsVersionFilePath + '/kss-assets/docs.css';
	const kssDocsCustomCSSPath = docsVersionFilePath + '/kss-assets/kss-custom.css';

	grunt.file.mkdir( docsVersionFilePath );

	require('time-grunt')(grunt);

	// Configure Grunt.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		kssDocsFilePath: kssDocsFilePath, 
		kssDocsCustomCSSPath: kssDocsCustomCSSPath, 
		babel: {
			options: {
				cwd: 'burf-theme/js-dev/modules/',
				sourceMap: false,
				presets: ['@babel/preset-env', "@wordpress/default"] // A temporary solution because the repo can't find babelrc.
			},
			dist: {
				files: [
					{
						'burf-theme/js-dev/dist/toggle.js': 'burf-theme/js-dev/modules/toggle.js'
					},
				],
			},
		},
		browserify: {
			options: {
				watch: true,
				browserifyOptions: {
					debug: false,
					transform: [['babelify', { "presets": ["@babel/preset-env", "@wordpress/default"] }]]
				},
			},
			dist: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'burf-theme/js-dev/', // Src matches are relative to this path.
						src: [ '*.js' ], // Actual pattern(s) to match.
						dest: 'burf-theme/js/', // Destination path prefix.
					},
				],
			},
		},
		clean: {
			js: [ 'burf-theme/js/**/*.js', 'burf-theme/js/**/*.map' ],
		},
		uglify: {
			options: {
				sourceMap: true,
			},
			dist: {
				files: [
					{
						// Note: Overwrites the un-uglified version.
						expand: true, // Enable dynamic expansion.
						cwd: 'burf-theme/js/', // Src matches are relative to this path.
						src: [ '*.js' ], // Actual pattern(s) to match.
						dest: 'burf-theme/js/', // Destination path prefix.
					},
				],
			},
		},
		browserSync: {
			current: {
				bsFiles: {
					src : docsVersionFilePath + '*.html'
				},
				options: {
					watchTask: true,
					server: {
						baseDir: docsVersionFilePath
					}
				}
			}
		},
		concat: {
			docs: {
				files: {
					'docs/js/docs.js': 'js/*.js',
				},
			},
		},
		copy: {
			docs: {
				expand: true,
				cwd: '_docs',
				src: [ '**/*.html' ],
				dest: 'docs',
			},
		},
		'gh-pages': {
			options: {
				base: 'docs',
				only: [ 'index.html', docsVersionFilePath ]
			},
			src: [ '**' ],
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true,
				includePaths: [ 'burf-base', 'burf-theme', 'burf-customizations' ]
			},
			docs: {
				options: {
					style: 'compressed',
				},
				files: {
					'docs/css/docs.css' : '_docs/css-dev/docs.scss',
					'<%= kssDocsFilePath %>' : '_docs/css-dev/docs.scss',
					'<%= kssDocsCustomCSSPath %>' : '_docs/css-dev/kss-custom.scss'
				},
			},
			build: {
				options: {
					style: 'expanded',
				},
				files: {
					'burf-base/dist/burf-base.css': 'burf-base/burf-base.scss',
					'burf-base/dist/burf-theme.css': 'burf-theme/burf-theme.scss',
					'burf-customizations/dist/burf-customizations.css': 'burf-customizations/burf-customizations.scss',
				},
			},
		},
		postcss: {
			defaults: {
				options: {
					map: {
						inline: false, // Save all sourcemaps as separate files.
						annotation: 'css/', // Save to this specified directory.
					},
					processors: [
						autoprefixer, // add vendor prefixes.
					],
				},
				src: [ 'css/burf-theme.css', 'css/burf-base.css' ],
			}
		},
		watch: {
			grunt: {
				options: {
					reload: true,
				},
				files: [ 'Gruntfile.js' ],
			},
			docs: {
				files: [ '_docs/**/*.html' ],
				tasks: [ 'copy' ],
			},
			scripts: {
				files: [ 'burf-theme/js-dev/**/*.js' ],
				tasks: [ 'js', 'concat' ],
			},
			styles: {
				files: [
					'_docs/css-dev/*.scss',
					'css-dev/**/*.scss',
				],
				tasks: [ 'sass' ],
			},
			styleguide: {
				files: [
					'_docs/css-dev/*.scss',
					'css-dev/**/*.scss',
					'css-dev/**/*.hbs',
				],
				//tasks: [ 'kss' ],
			}
		},
		sasslint: {
			target: 'css-dev/**/*.scss',
			// see .sasslintrc for options.
		},
		kss: {
			options: {
				title: 'Responsive Foundation ' + pkg.version,
				builder: 'node_modules/id-kss-builder',
				css: [
				  "kss-assets/docs.css",
				],
				extend: 'node_modules/id-kss-builder/extend',
				gitURL: 'https://github.com/bu-ist/responsive-foundation/',
				gitURLCSSDEV: 'https://github.com/bu-ist/responsive-foundation/tree/master/css-dev/',
				customCSS: 'kss-assets/kss-custom.css'
			},
			dist: {
				src: [
					'burf-base',
					'burf-theme',
					'burf-tools',
					'burf-customizations'
				],
				dest: docsVersionFilePath
			}
		},
		version: {
			options: {
				pkg: pkg,
			},
			bump: {
				options: {
			        prefix: 'version\\"\\:\\ \\"'
			    },
				src: [
					'burf-customizations/package.json',
					'burf-theme/package.json',
					'burf-tools/package.json'
				]
			},
			base: {
				options: {
			        prefix: 'burf\\-base\\"\\:\\ \\"\\^'
			    },
				src: [
					'package.json',
					'burf-customizations/package.json',
					'burf-theme/package.json',
					'burf-tools/package.json'
				]
			},
			customizations: {
				options: {
			        prefix: 'burf\\-customizations\\"\\:\\ \\"\\^'
			    },
				src: ['package.json']
			},
			theme: {
				options: {
			        prefix: 'burf\\-theme\\"\\:\\ \\"\\^'
			    },
				src: [
					'package.json',
					'burf-customizations/package.json',
				]
			},
			tools: {
				options: {
			        prefix: 'burf\\-tools\\"\\:\\ \\"\\^'
			    },
				src: ['package.json']
			}
		}
	});

	// Load Plugins.
	grunt.loadNpmTasks( 'grunt-babel' );
	grunt.loadNpmTasks( 'grunt-browser-sync' );
	grunt.loadNpmTasks( 'grunt-browserify' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-kss' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.registerTask( 'build', [ 'js', 'kss', 'copy' ] );
	//grunt.registerTask( 'build', [ 'js', 'copy' ] );
	grunt.registerTask( 'deploy', [ 'build', 'gh-pages' ] );
	grunt.registerTask( 'js', [ 'clean:js', 'babel', 'browserify', 'uglify' ] );
	grunt.registerTask( 'serve', [ 'build', 'browserSync:current', 'watch' ] );
	grunt.registerTask( 'previewall', [ 'build', 'browserSync:all', 'watch' ] );

	// Register default `grunt` task.
	grunt.registerTask( 'default', [ 'serve' ] );
};
