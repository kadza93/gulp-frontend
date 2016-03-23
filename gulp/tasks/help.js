var gulp            = require('gulp');
var $               = require('gulp-load-plugins')({lazy: true});
var logMsg          = require('./functions.js').log;

gulp.task('help', $.taskListing);
