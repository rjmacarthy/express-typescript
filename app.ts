'use strict';
/// <reference path='./typings/tsd.d.ts' />

import express = require('express');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import http = require('http');
import config = require('./config');
import index = require('./routes/index.server.route');
import _ = require('lodash');

var app: express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes

config.globFiles('routes/**/*.js').then((files: Array<string>) => {
  
  files.forEach((file)=>{
    require(path.resolve(file))(app);
  });


  // catch 404 and forward to error handler
  app.use(function(req: express.Request, res: express.Response, next: Function) {
    var err: Error = new Error('Not Found');
    next(err);
  });

  // production error handler
  // no stacktraces leaked to user
  app.use((err: any, req: express.Request, res: express.Response, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

});

if (app.get('env') === 'development') {
  app.use((err: Error, req: express.Request, res: express.Response, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Start ther server

var port: number = 3000;

var server: http.Server = http.createServer(app);

server.listen(port);

server.on('error', () => {
  console.log('error starting server');
})

server.on('listening', () => {
  console.log('started on port ' + port);
})

module.exports = app;
