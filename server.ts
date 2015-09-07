"use strict";
/// <reference path="./typings/tsd.d.ts" />

import http = require("http");
import config = require("./config/config");

// Init the express application
var app = require("./config/express")();

var server: http.Server = http.createServer(app);

server.listen(config.port);

server.on("error", () => {
  console.log("error starting server");
});

server.on("listening", () => {
  console.log("started on port " + config.port);
});