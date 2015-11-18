var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var path        = require('../config/path');


gulp.task('spritesmith', function() {
  gulp.src(path.src.img.icons.png + '*.png')
    .pipe(spritesmith({
        imgName: './../img/sprites/sprite-icons.png',
        cssName: 'sprites/sprite-icons.css'
    }))
    .pipe(gulp.dest(path.src.css));
});
