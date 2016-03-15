var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


var Article = require('../models/articles.js');
var Comment = require('../models/comments.js');


router.get('/', function(req, res) {
  res.render('index');
});


//gets all scraped data
// router.get('/all', function(req, res) {
//   res.json(documents);
// });


router.get('/scraper', function(req, res) {
      request('http://www.foxsports.com/nba', function (error, response, body) {
        if (!error && response.statusCode == 200) {

          $ = cheerio.load(body);

          $('.buzzer-article').each(function(i, element) {
              // console.log(element.children);
              var img = $(element).children().find('.buzzer-image-link').attr('href');
              // console.log(img);
              var title = $(element).children().find('.buzzer-title').text();
              var link = $(element).children().find('.buzzer-title-link').attr('href');
              var publishInfo = $(element).children().find('.buzzer-details').find('.buzzer-pubdate').text();


          })
        }
      })

      res.send("Scrape Done!");
});


module.exports = router;
