'use strict';
/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import mongoose = require('mongoose');

class ArticleController {
	public static Article : mongoose.Model<mongoose.Document> = mongoose.model('Article');
	
	constructor() {
	}

	public static readAll(req : express.Request, res : express.Response, next : Function) : void {
		
	}
}

export = ArticleController;