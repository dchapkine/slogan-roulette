
var gulp = require("gulp");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('js', function() {

	gulp.src([
		'./src/js/*'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('slogan-roulette.min.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist'));

});

gulp.task('watch', function() {

	gulp.watch(['./src/*.*'], ['js']);

});


gulp.task('default', ['js', 'watch']);
gulp.task('build', ['js']);

