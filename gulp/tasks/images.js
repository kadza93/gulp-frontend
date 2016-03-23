var gulp            = require('gulp');
var $               = require('gulp-load-plugins')({lazy: true});
var config          = require('../config').images;
var logMsg          = require('./functions.js').log;

gulp.task('img', () =>{
  logMsg('Copying and optimizing images...');
  logMsg(config.options);
    return gulp
          .src(config.src)
          .pipe($.imagemin(config.options))
          .pipe(gulp.dest(config.dest));
});
