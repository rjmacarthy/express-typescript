/// <reference path='./typings/tsd.d.ts' />

import glob = require('glob');
import Q = require('q');

class config {
	public files: any = {};

	constructor() {

	}

	public static globFiles(location : string) : Q.Promise<string[]> {
		var d = Q.defer<string[]>()
		glob(location, function(err, files) {
			if(err){
				d.reject(err);
			} else {
				d.resolve(files);
			}
		});
		return d.promise;
	}
}

export = config;