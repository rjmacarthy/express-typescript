'use strict';
/// <reference path='../typings/tsd.d.ts' />
import express = require('express');

class index {
	constructor() {
	}

	public static read(req : express.Request, res : express.Response, next : Function) : void {
		res.render('index', { title: 'Express' });
	}
}

export = index;