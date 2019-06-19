var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Init browserSync
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
	})
})

// Sass compile
gulp.task('sass', function() {
	gulp.src('sass/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

//Watch task
gulp.task('default', ['browserSync', 'sass'], function() {
	gulp.watch('sass/*.scss',['sass']);
	// Reloads the browser whenever HTML or JS files change
  gulp.watch('views/*.html', browserSync.reload); 
  gulp.watch('js/*.js', browserSync.reload);
});
