var gulp = require('gulp');

gulp.task('default', ['jade:watch', 'browserify:watch', 'browsersync']);
