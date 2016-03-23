var gulp            = require('gulp');
var config          = require('../config').sass;
var $               = require('gulp-load-plugins')({lazy: true});


gulp.task('sass', () => {
  var sassConfig = config.options;
  return gulp
        .src(config.src)
        .pipe($.sass())
        .pipe(gulp.dest(config.dest));
});
