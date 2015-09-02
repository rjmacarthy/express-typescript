'use strict';
/// <reference path='./typings/tsd.d.ts' />

import express = require('express');
import favicon = require('serve-favicon');
import http = require('http');
import config = require('./config');

// Init the express application
var app = require('./app')();

var server: http.Server = http.createServer(app);

server.listen(config.port);

server.on('error', () => {
  console.log('error starting server');
});

server.on('listening', () => {
  console.log('started on port ' + config.port);
});