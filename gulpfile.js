
var gulp = require("gulp");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ghpages = require('gh-pages');
var path = require('path');
var gutil = require('gulp-util');

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

	gulp.watch(['./src/js/*.js'], ['js']);

});


gulp.task('publish-ghpages', function() {

	ghpages.publish(path.join(__dirname), function(err) {
		if (err) gutil.log("ERROR: " +err);
		else gutil.log("published !");
	});

});


gulp.task('default', ['js', 'watch']);
gulp.task('build', ['js']);
gulp.task('publish', ['publish-ghpages']);

