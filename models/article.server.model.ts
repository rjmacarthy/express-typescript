'use strict';
/// <reference path='../typings/tsd.d.ts' />
/**
 * Module dependencies.
 */
import mongoose = require('mongoose');


/**
 * Article Schema
 */
var ArticleSchema : mongoose.Schema  = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);