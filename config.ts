/// <reference path='./typings/tsd.d.ts' />

import glob = require('glob');
import Q = require('q');
import _ = require('lodash');

class config {
	public static port : number = 3000;
	public static routes = 'routes/**/*.js';
	public static models = 'models/**/*.js';
	public static dbname = 'mongodb://localhost/express-typescript';

	public static globFiles(location : string) : Array<string> {
		var files = glob.sync(location);
		var output : Array<string>  = [];
		output = _.union(output, files);
		return output;
	}
}

export = config;