var gulp            = require('gulp');
var $               = require('gulp-load-plugins')({lazy: true});

function log(msg){
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.red(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.red(msg));
  }
}

module.exports = {
  log: log
};
