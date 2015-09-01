/// <reference path='../typings/tsd.d.ts' />
import express = require('express');

export = function(app : express.Express) {
	app.route('/').get(function(req, res, next){
	  res.render('index', { title: 'Express' });
	});
}