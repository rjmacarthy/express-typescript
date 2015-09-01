/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import index = require('../controllers/index.server.controller');

export = function(app : express.Express) {
	app.route('/')
		.get(index.read);
}