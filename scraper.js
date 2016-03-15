var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var PORT = process.env.PORT || 3000;
var mongoose = require('mongoose');

//Database Config
mongoose.connect('localhost', 'sports_app');
var db = mongoose.connection;

var Artice = require('/models/articles.js');


app.get('/scraper', function(req, res) {
      request('http://www.foxsports.com/nba', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          $ = cherrio.load(body);

          $('title').each(function(i, element) {

              var title = $(this).children("a").text();
              var link = $(this).children("a").attr("href");
              //this is an example, your site will be different//

              if (title && link) {

              }
          })
        }
      })

      res.send("Scrape Done!");
});


