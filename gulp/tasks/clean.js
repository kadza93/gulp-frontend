var gulp            = require('gulp');
var $               = require('gulp-load-plugins')({lazy: true});
var config          = require('../config');
var logMsg          = require('./functions.js').log;
var del             = require('del');

function clean (path){
  logMsg('Cleaning: ' + path);
  del(path);
};

gulp.task('clean-styles', () => {
  var files = config.sass.dest + '/**';

  clean(files);
});

gulp.task('clean-fonts', () => {
  var files = config.fonts.dest + '**/';
  clean(files);
});

gulp.task('clean-images', () => {
  var files = config.images.dest + '**/';
  clean(files);
});

gulp.task('clean-scripts', () => {
  var files = config.script.dest + '**/';
  clean(files);
});

gulp.task('clean-all',['clean-styles','clean-images', 'clean-fonts'], () => {
  logMsg('Done...');
});
