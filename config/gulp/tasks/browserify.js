var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function () {
  gulp.src('../src/js/index.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: false
    }))
    .pipe(gulp.dest('../dist/js'));
});
