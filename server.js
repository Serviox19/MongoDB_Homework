var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var db = require('./config/db');
//var scraper = require('./config/scraper.js');

var PORT = process.env.PORT || 3000;

//bodyParser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use(express.static(__dirname + "/public/views/partials"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));

//routes
var routes = require('./routes/index');
app.use('/', routes);


app.listen(PORT, function(req, res) {
  console.log("App Listening on PORT:" + PORT);
});


