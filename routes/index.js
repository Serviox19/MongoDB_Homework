var express = require('express');
var router = express.Router();
var Articles = require('../models/articles.js');
var mongoose = require('mongoose');


router.get('/', function(req, res) {
  res.render('index');
});







module.exports = router;
