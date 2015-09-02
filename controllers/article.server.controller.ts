'use strict';
/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import mongoose = require('mongoose');

class ArticleController {
	public Article : mongoose.Model<mongoose.Document> = mongoose.model('Article');
	
	public readAll = (req : express.Request, res : express.Response, next : Function): void => {
		this.Article.find((err : Error, docs : Array<mongoose.Document>)=>{
			if(err){
				return res.status(400).send({
					message: err
				});
			} else {
				res.jsonp(docs);
			}
		});
	}
}

export = ArticleController;