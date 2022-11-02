const config   = require( './gulpconfig.json' ),
		fs         = require( 'fs' ),
		inquirer   = require( 'inquirer' ),
		exec       = require( 'child_process' ).exec,
		gulp       = require( 'gulp' ),
		gulpif     = require( 'gulp-if' ),
		plumber    = require( 'gulp-plumber' ),
		gutil      = require( 'gulp-util' ),
		notify     = require( 'gulp-notify' ),
		rename     = require( 'gulp-rename' ),
		less       = require( 'gulp-less' ),
		include    = require( 'gulp-include' ),
		uglify     = require( 'gulp-uglify' ),
		sourcemaps = require( 'gulp-sourcemaps' ),
		through    = require( 'through2' );

const gulpTouch = function() {
	'use strict';

	return through.obj( function( file, enc, callback ) {
		if ( file.isNull() ) {
			return callback( null, file );
		}

		const time = new Date();

		fs.utimes( file.path, time, time, () => {
			callback( null, file );
		} );
	} );
};

const CleanCSSOptions = {
	advanced: false,
};

const AutoprefixOptions = {
	browsers: [
		'> 1%', 'last 2 versions', 'IE >= 8', 'Firefox ESR', 'Opera 12.1',
	],
};

const LessPluginCleanCSS = require( 'less-plugin-clean-css' ),
		LessPluginAutoPrefix = require( 'less-plugin-autoprefix' ),
		CombineMediaQueries  = require( 'less-plugin-group-css-media-queries' ),
		CleanCSS             = new LessPluginCleanCSS( CleanCSSOptions ),
		Autoprefix           = new LessPluginAutoPrefix( AutoprefixOptions );

let LessPlugins = [ CombineMediaQueries, CleanCSS, Autoprefix ],
		compress = true;
const tasks = {
	js:[],
	less:[],
};

// Compress.
gulp.task( 'compress:false', function( done ) {
	'use strict';

	gutil.log( gutil.colors.red( 'Compression is turned OFF.' ) );
	LessPlugins = [ CombineMediaQueries, Autoprefix ];
	compress = false;

	done();
} );

// Load groups.
let group;
for ( group in config.build.less ) {
	tasks.less.push( 'build:less:' + group );
}

for ( group in config.build.js ) {
	tasks.js.push( 'build:js:' + group );
}

/**
 * Add dest pipe to gulp pipeline
 *
 * @param  object pipeline Gulp pipeline.
 * @param  string path     Destination path.
 */
const saveToDest = function( pipeline, path ) {
	'use strict';

	pipeline
		.pipe( gulp.dest( path ) )
		.pipe( gulpTouch() );
};

// Build less tasks.
tasks.less.forEach( function( task ) {
	'use strict';

	gulp.task( task, function( done ) {
		const group = task.split( ':' ).pop();

		for ( const src in config.build.less[ group ] ) {
			const pipeline = gulp.src( src )
				.pipe( gulpif( ! compress, sourcemaps.init() ) )
				.pipe( plumber( {
					errorHandler: notify.onError( {
						title: 'Error running ' + task,
						message: '<%= error.message %>',
					} ) }
				) )
				.pipe( less( {
					plugins: LessPlugins
				} ) )
				.pipe( gulpif( ! compress, sourcemaps.write() ) )
				.pipe( rename(
					src.split( '/' )
						.pop()
						.replace( '.less', '.css' )
				) );

			config.build.less[ group ][ src ].forEach( saveToDest.bind( null, pipeline ) );

			pipeline.on( 'end', done );
		}
	} );
} );
gulp.task( 'build:less', gulp.parallel( tasks.less ) );

// Build JS tasks.
tasks.js.forEach( function( task ) {
	'use strict';

	gulp.task( task, function( done ) {
		const group = task.split( ':' ).pop();

		for ( const src in config.build.js[ group ] ) {
			const pipeline = gulp.src( src )
				.pipe( plumber( {
					errorHandler: notify.onError( {
						title: 'Error running ' + task,
						message: '<%= error.message %> in line no. <%= error.lineNumber %>',
					} ) }
				) )
				.pipe( include() )
				.pipe( gulpif( compress, uglify() ) )
				.pipe( rename(
					src.split( '/' )
						.pop()
				) );

			config.build.js[ group ][ src ].forEach( saveToDest.bind( null, pipeline ) );

			pipeline.on( 'end', done );
		}
	} );
} );
gulp.task( 'build:js', gulp.parallel( tasks.js ) );

// Init WP task.
gulp.task( 'wp:init', function( done ) {
	'use strict';

	inquirer.prompt( [
		{
			type:    'input',
			name:    'DB_NAME',
			message: 'DB_NAME:',
			validate: function( input ) {
				return ( ! input ) ? 'DB_NAME is required.' : true;
			},
		},
		{
			type:    'input',
			name:    'DB_USER',
			message: 'DB_USER:',
			'default': 'root',
		},
		{
			type:    'input',
			name:    'DB_PASS',
			message: 'DB_PASS:',
			'default': 'root',
		},
		{
			type:    'input',
			name:    'DB_HOST',
			message: 'DB_HOST:',
			'default': 'localhost',
		},
	],
	function( obj ) {
		// Prepare commands.
		var commands = [
			'cd /srv/www/' + __dirname.split( '/' ).pop(),
			'wp core download',
			'wp core config --dbname=' + obj.DB_NAME +
			' --dbuser=' + obj.DB_USER +
			' --dbpass=' + obj.DB_PASS +
			' --dbhost=' + obj.DB_HOST +
			' --extra-php <<PHP\n' +
			'define( \'WP_DEBUG\', true );\ndefine( \'WP_LOCAL_DEV\', true );' +
			'\nPHP'
		];

		// Execute commands.
		gutil.log( gutil.colors.cyan( 'Downloading and configuring WordPress. Please wait...' ) );
		exec( 'vagrant ssh -- -t "' + commands.join( ';' ) + '"', function( err ) {
			if ( err ) {
				gutil.log( gutil.colors.red( err ) );
			} else {
				gutil.log(
					gutil.colors.green( 'Successfully downloaded and configured WordPress!' )
				);
			}

			done();
		} );
	} );
} );

// Build task
gulp.task(
	'build',
	gulp.parallel( [
		'build:less',
		'build:js',
	] )
);

// Build:all task
gulp.task(
	'build:all',
	gulp.parallel( [
		'build',
	] )
);

// Dev build task.
gulp.task(
	'dev:build',
	gulp.series( [
		'compress:false',
		'build',
	] )
);

// Watch task.
gulp.task( 'watch', function() {
	'use strict';

	config.watch.forEach( function( obj ) {
		let group;
		for ( group in obj.build ) {
			gutil.log( gutil.colors.cyan( 'Watching ' + obj.files ) );
			gulp.watch(
				obj.files,
				gulp.series(
					'build:' +
					group + ':' +
					obj.build[ group ]
				)
			);
		}
	} );
} );

// Dev watch task.
gulp.task(
	'dev:watch',
	gulp.series( [
		'compress:false',
		'watch',
	] )
);
