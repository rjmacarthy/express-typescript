"use strict";
/// <reference path="../typings/tsd.d.ts" />
import express = require("express");
import mongoose = require("mongoose");
var Article: mongoose.Model<mongoose.Document> = mongoose.model("Article");

class ArticleController {

	public readAll = (req: express.Request, res: express.Response, next: Function): void => {
		Article.find((err: Error, articles: Array<mongoose.Document>) => {
			if (err) {
				return res.status(400).send({
					message: err
				});
			} else {
				res.jsonp(200, articles);
			}
		});
	};

	public create = (req: express.Request, res: express.Response, next: Function): void => {
		var newArticle = new Article(req.body);
		newArticle.save((err: Error, article: mongoose.Document) => {
			if (err) {
				return res.status(400).send({
					message: err
				});
			} else {
				res.jsonp(200, article);
			}
		});
	};
}

export = ArticleController;