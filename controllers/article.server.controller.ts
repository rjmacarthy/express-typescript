"use strict";
/// <reference path="../typings/tsd.d.ts" />
import express = require("express");
import mongoose = require("mongoose");
var Article: mongoose.Model<mongoose.Document> = mongoose.model("Article");

class ArticleController {

	public list = (req: express.Request, res: express.Response): void => {
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

	public create = (req: express.Request, res: express.Response): void => {
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

	public read = (req: any, res: express.Response): void => {
		res.jsonp(req.article);
	};

	public articleById = (req: any, res: express.Response, next: Function, id: string) => {
		if (!id) {
			return res.status(400).send({
				message: "Article is invalid"
			});
		}
		Article.findById(id).exec((err: Error, article: mongoose.Document) => {
			if (err) {
				return res.status(400).send({
					message: err
				});
			} else {
				req.article = article;
				next();
			}
		});
	};
}

export = ArticleController;