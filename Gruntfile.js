// Require external packages.
const autoprefixer = require( 'autoprefixer' );
const sass = require( 'node-sass' );

// Set up a versioned folder for SassDoc
const pkg = require( './package.json' );

module.exports = ( grunt ) => {
	const docsVersionFilePath = `docs/${ pkg.version }`;

	grunt.file.mkdir( docsVersionFilePath );

	require('time-grunt')(grunt);

	// Configure Grunt.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		babel: {
			options: {
				cwd: 'js-dev',
				sourceMap: false,
			},
			dist: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'js-dev/modules/', // Src matches are relative to this path.
						src: [ '*.js' ], // Actual pattern(s) to match.
						dest: 'js-dev/dist/', // Destination path prefix.
					},
				],
			},
		},
		browserify: {
			options: {
				watch: true,
				browserifyOptions: {
					debug: false,
					transform: [ [ 'babelify' ] ],
				},
			},
			dist: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'js-dev/', // Src matches are relative to this path.
						src: [ '*.js' ], // Actual pattern(s) to match.
						dest: 'js/', // Destination path prefix.
					},
				],
			},
		},
		clean: {
			js: [ 'js/**/*.js', 'js/**/*.map' ],
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
						cwd: 'js/', // Src matches are relative to this path.
						src: [ '*.js' ], // Actual pattern(s) to match.
						dest: 'js/', // Destination path prefix.
					},
				],
			},
		},
		browserSync: {
			current: {
				bsFiles: {
					src : '_styleguide/*.html'
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./_styleguide"
					}
				}
			},
			all: {
				bsFiles: {
					src: [ 'docs/*.html', 'docs/css/*.css', 'docs/js/*.js' ],
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './docs',
					},
				},
			},
		},
		concat: {
			docs: {
				files: {
					'docs/js/docs.js': 'js/*.js',
				},
			},
		},
		copy: {
			alpha: {
				expand: true,
				cwd: '_docs/0.1.0',
				src: [ '**/*.html', 'vendor/**/*' ],
				dest: 'docs/0.1.0',
			},
			one: {
				expand: true,
				cwd: '_docs/1.0.0',
				src: [ '**/*.html', 'assets/**/*' ],
				dest: 'docs/1.0.0',
			},
			docs: {
				expand: true,
				cwd: '_docs',
				src: [ '**/*.html', 'vendor/**/*' ],
				dest: 'docs',
			},
		},
		'gh-pages': {
			options: {
				base: 'docs',
			},
			src: [ '**' ],
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true,
			},
			docs: {
				options: {
					style: 'compressed',
				},
				files: {
					'docs/css/docs.css': '_docs/css-dev/docs.scss',
					'_styleguide/kss-assets/docs.css': '_docs/css-dev/docs.scss',
					'_styleguide/kss-assets/kss-custom.css': '_docs/css-dev/kss-custom.scss',
					'css/burf-base.css': 'css-dev/burf-base.scss',
					'css/burf-theme.css': 'css-dev/burf-theme.scss',
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
			},
			docs: {
				options: {
					map: {
						inline: false, // Save all sourcemaps as separate files.
						annotation: 'docs/css/', // Save to this specified directory.
					},
					processors: [
						autoprefixer, // add vendor prefixes.
					],
				},
				src: 'docs/css/docs.css',
				dest: 'docs/css/docs.css',
			},
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
				files: [ 'js-dev/**/*.js' ],
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
				tasks: [ 'kss' ],
			},
			vendor: {
				files: [ '_docs/vendor/**/*' ],
				tasks: [ 'copy' ],
			},
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
				gitURLCSSDEV: 'https://github.com/bu-ist/responsive-foundation/tree/master/css-dev',
				customCSS: 'kss-assets/kss-custom.css'
			},
			dist: {
				src: [
					'css-dev'
				],
				dest: '_styleguide'
			}
		},
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
	grunt.loadNpmTasks( 'grunt-sass-lint' );
	grunt.loadNpmTasks( 'grunt-kss' );
	grunt.registerTask( 'build', [ 'js', 'kss' ] );
	grunt.registerTask( 'deploy', [ 'build', 'gh-pages' ] );
	grunt.registerTask( 'js', [ 'clean:js', 'babel', 'browserify', 'uglify' ] );
	grunt.registerTask( 'serve', [ 'build', 'browserSync:current', 'watch' ] );
	grunt.registerTask( 'previewall', [ 'build', 'browserSync:all', 'watch' ] );

	// Register default `grunt` task.
	grunt.registerTask( 'default', [ 'serve' ] );
};
