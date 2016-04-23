var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var Basketball = require('../models/basketball.js');
// var Football = require('../models/football.js');
// var Baseball = require('../models/baseball.js');


router.get('/', function(req, res, next) {
  res.send('/public/views/index.html');
});


router.get('/basketball', function(req, res, next) {
  request('https://www.foxsports.com/nba', function (err, response, body) {
    if (!err && response.statusCode == 200) {

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
          } else {
            console.log("nba!")
          }
        });
      });
    }//end if statement
  });//end request
  mongoose.model('Basketball').find(function(err, docs) {
    if (!err) {
      res.send(docs);
    }
  });
});//end get route


// router.get('/football', function(req, res, next) {
//   request('https://www.foxsports.com/nfl', function(error, response, body) {
//     if (!error && response.statusCode == 200) {

//       $ = cheerio.load(body);

//       $// start definig data to scrape
//     }
//   });// end request
//   mongoose.model('Football').find(function(err, docs) {
//     if (!err) {
//       res.send(docs);
//     }
//   });
// });// end get route


// router.get('/baseball', function(req, res, next) {
//   request('https://www.foxsports.com/mlb', function(error, response, body) {
//     if (!error && response.statusCode == 200) {

//       $ = cheerio.load(body);

//       $// start definig data to scrape
//     }
//   });// end request
//   mongoose.model('Baseball').find(function(err, docs) {
//     if (!err) {
//       res.send(docs);
//     }
//   });
// });// end get route



module.exports = router;
