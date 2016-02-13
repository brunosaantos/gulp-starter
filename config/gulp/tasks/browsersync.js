var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var path        = require('../config/path');

// Static server
gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: path.dist.html
        }
    });

    gulp.watch(path.dist.html + "/**/*.html").on('change', browserSync.reload);
    gulp.watch(path.dist.js + "/**/*.js").on('change', browserSync.reload);
});