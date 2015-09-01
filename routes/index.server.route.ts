/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req : express.Request, res : express.Response, next) {
  res.render('index', { title: 'Express' });
});

export = router;