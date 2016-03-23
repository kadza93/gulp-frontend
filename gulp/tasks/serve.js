var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var $               = require('gulp-load-plugins')({lazy: true});
var logMsg          = require('./functions.js').log;
var port            = process.env.PORT || config.nodemon.defaultPort;

gulp.task('serve', () => {
  var isDev = true;
  var nodeOptions = {
    script: config.nodemon.nodeServer,
    delayTime: 1,
    env:{
       'PORT': port,
       'NODE_ENV': isDev ? 'dev' : 'build'
    },
    watch: [config.nodemon.server]
  }
  return $.nodemon(nodeOptions)
    .on('restart', (ev) => {
      logMsg('--- Nodemon restarted ---');
      logMsg('--- Modified files: --- \n' + ev);
      setTimeout(function(){
          browserSync.notify('Restarting...');
          browserSync.reload({stream: false});
      }, config.nodemon.delay)
    })
    .on('start', () => {
      logMsg(' --- Nodemon started --- ');
      startBrowserSync();
    })
    .on('crash', () => {
      logMsg('!!! Nodemon crashed !!!');
    })
    .on('restart', () => {
      logMsg('--- Nodemon exited ---');
    })
});




//config.development + '**/*.*',
//, './app/build/development/**/*.*'
//config.developmentAssets + '**/*.*'

function startBrowserSync() {

    var options = {
        proxy: 'localhost:' + port,
        port: 3000,
        files: ['./app/build/development/**/*.*'],
        ghostMode: {
          clicks: true,
          location: false,
          forms: true,
          scroll: true,
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix:  'gulp-patterns',
        notify: true,
        reloadDelay: 1000
    }

    if(browserSync.active) {
      return;
    }
    logMsg('Starting BrowserSync on port: '+ port);
    browserSync(options);
    gulp.watch([config.sass.src], ['sass']);
}
