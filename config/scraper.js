var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

//Database Config
var db = require('./db.js');

var Basketball = require('../models/basketball.js');
var Baseball;
var Football;


request('http://www.foxsports.com/nba', function (error, response, body) {
  if (!error && response.statusCode == 200) {

    $ = cheerio.load(body);

    $('.buzzer-article').each(function(i, element) {
      var img = $(element).children().find('.responsive-image-wrapper').find('img').attr("src");
      var title = $(element).children().find('.buzzer-title').text();
      var publishInfo = $(element).children().find('.buzzer-details').find('.buzzer-pubdate').text();
      var link = $(element).children().find('.buzzer-title-link').attr('href');

      var nbaArticle = new Basketball({
        image: img,
        title: title,
        publishInfo: publishInfo,
        link: link
      });

      nbaArticle.save(function(err, document){
        if(err) {
          return res.send("ERROR: " + err);
        };
      });
    });
  }//end if statement
});//end request



