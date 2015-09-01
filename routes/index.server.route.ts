/// <reference path='../typings/tsd.d.ts' />
import express = require('express');

export = function(app : express.Express) {
	console.log(app);
	app.route('/').get(function(req, res, next){
		console.log("ok");
		res.render('index', { title: 'Express' });
	});
}