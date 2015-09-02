'use strict';
/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import ArticleController = require('../controllers/article.server.controller');

class ArticleRoute {
	private static _articleController: ArticleController = new ArticleController();

	constructor(app : express.Express) {
		var self = ArticleRoute;
		self.generateRoutes(app);
	}
	
	public static generateRoutes (app : express.Express) : void {
		var self  = ArticleRoute;
		app.route('/article')
			.get(self._articleController.readAll);
	}
}

module.exports = ArticleRoute;