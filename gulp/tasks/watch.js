var gulp            = require('gulp');
var config          = require('../config').watch;

gulp.task('watch', () => {
  gulp.watch(config.sass, ['sass']);
});
