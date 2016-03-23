var gulp            = require('gulp');
var runSequence     = require('run-sequence');

//Run tasks in order
gulp.task('build', function(cb) {
  runSequence(
  [
    'sass',
    'serve'
  ],
  cb);
});
