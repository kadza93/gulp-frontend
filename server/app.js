/*jshint node:true*/
'use strict';
var logMsg          = require('../gulp/tasks/functions.js').log;
var $               = require('gulp-load-plugins')({lazy: true});
var express         = require('express');
var app             = express();
var port            = process.env.PORT || 2708;
var environment     = process.env.NODE_ENV;



  logMsg($.util.colors.blue('==================='));
  logMsg($.util.colors.blue('---Starting node---'));
  logMsg($.util.colors.blue('==================='));
  logMsg($.util.colors.blue('==================='));
  logMsg($.util.colors.blue(' ---PORT= ' + port+'---'));
  logMsg($.util.colors.blue('==================='));
  logMsg($.util.colors.blue('==================='));
  logMsg($.util.colors.blue('NODE_ENV = ' + environment + ' \t'));
  logMsg($.util.colors.blue('==================='));

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment) {
    case 'build':
        logMsg($.util.colors.cyan.bgWhite(' \t '+'--- PRODUCTION ---'+' \t '));
        app.use(express.static('./app/build/production'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        logMsg($.util.colors.cyan.bgWhite(' \t '+'--- DEVELOPMENT ---'+' \t '));
        app.use(express.static('./app/build/development'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./build/index.html'));
        break;
}

app.listen(port, function() {
    logMsg($.util.colors.magenta.bgWhite('Express server listening on port ' + port));
});
