"use strict";
/// <reference path="../typings/tsd.d.ts" />

import bodyParser = require("body-parser");
import config = require("./config");
import cookieParser = require("cookie-parser");
import express = require("express");
import logger = require("morgan");
import mongoose = require("mongoose");
import path = require("path");

module.exports = function(db) {
  var app: express.Express = express();
  
  //Models
  for (var model of config.globFiles(config.models)) {
    require(path.resolve(model));
  }
  
  // view engine setup
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "jade");
  
  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "../public")));
  
  //Routes
  for (var route of config.globFiles(config.routes)) {
    require(path.resolve(route))(app);
  }
  
  // catch 404 and forward to error handler
  app.use(function(req: express.Request, res: express.Response, next: Function) {
    var err: Error = new Error("Not Found");
    next(err);
  });
  
  // production error handler
  // no stacktraces leaked to user
  app.use((err: any, req: express.Request, res: express.Response, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {}
    });
  });

  if (app.get("env") === "development") {
    app.use((err: Error, req: express.Request, res: express.Response, next) => {
      res.status(500);
      res.render("error", {
        message: err.message,
        error: err
      });
    });
  }
  
  // Connect to mongodb
  mongoose.connect(config.dbname);

  return app;
};