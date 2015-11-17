var gulp = require('gulp');
var jade = require('gulp-jade');
var path = require('../config/path');

gulp.task('jade', function() {
  gulp.src(path.src.html + '*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(path.dist.html))
});
