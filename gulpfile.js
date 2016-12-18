// Dependencies
var gulp          = require( 'gulp' ),
		gulp_css_nano = require( 'gulp-cssnano' ),
		gulp_rename   = require( 'gulp-rename' ),
		gulp_concat		= require( 'gulp-concat' ),
		gulp_uglify		= require( 'gulp-uglify' );

// CSS style.css
gulp.task( 'css_style', function(){
	return gulp.src( './src/styles/style.css')    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'style.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );

// CSS hover
gulp.task( 'css_hover', function(){
	return gulp.src( './src/styles/hover.css')    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'hover.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );
// CSS intro
gulp.task( 'css_intro', function(){
	return gulp.src( './src/styles/style_intro.css')    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'style_intro.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );
// CSS responsive
gulp.task( 'css_responsive', function(){
	return gulp.src( './src/styles/responsive.css')    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'responsive.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );
// CSS div
gulp.task( 'css_div', function(){
	return gulp.src( './src/styles/stylesDiv.css')    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'stylesDiv.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );

// JS task
gulp.task( 'js_main', function(){
	return gulp.src( './src/scripts/main.js')
		.pipe( gulp_concat( 'main.min.js' ) )
		.pipe( gulp_uglify() )
		.pipe( gulp.dest( './src/scripts/' ) );
} );
// JS task
gulp.task( 'js_script', function(){
	return gulp.src( './src/scripts/script.js')
		.pipe( gulp_concat( 'script.min.js' ) )
		.pipe( gulp_uglify() )
		.pipe( gulp.dest( './src/scripts/' ) );
} );
// JS task
gulp.task( 'js_intro', function(){
	return gulp.src( './src/scripts/intro.js')
		.pipe( gulp_concat( 'intro.min.js' ) )
		.pipe( gulp_uglify() )
		.pipe( gulp.dest( './src/scripts/' ) );
} );
// JS task
gulp.task( 'js_ajoutDiv', function(){
	return gulp.src( './src/scripts/ajoutDiv.js')
		.pipe( gulp_concat( 'ajoutDiv.min.js' ) )
		.pipe( gulp_uglify() )
		.pipe( gulp.dest( './src/scripts/' ) );
} );


gulp.task('default', ['css_style', 'css_intro', 'css_responsive', 'css_div', 'js_main', 'js_script', 'js_intro', 'js_ajoutDiv']);