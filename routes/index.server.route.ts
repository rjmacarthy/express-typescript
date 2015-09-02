'use strict';
/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import index = require('../controllers/index.server.controller');

/*export = function(app : express.Express) {
	
}*/

class IndexRoute {
	
	constructor(app : express.Express) {
		var self = IndexRoute;
		self.generateRoutes(app);
	}
	
	public static generateRoutes (app : express.Express) : void {
		app.route('/')
			.get(index.read)
	}
}

module.exports = IndexRoute;