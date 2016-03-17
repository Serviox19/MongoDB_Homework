var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');


var Article = require('../models/articles.js');
var Comment = require('../models/comments.js');


router.get('/', function(req, res) {
  mongoose.model('Article').find(function(err, Article) {
    res.render('index', {
      Article: Article,
    });
  });
});

router.post('/comments', function(req, res) {

});


router.get('/scraper', function(req, res) {
  request('http://www.foxsports.com/nba', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

      $('.buzzer-article').each(function(i, element) {
        var img = $(element).children().find('.responsive-image-wrapper').find('img').attr("src");
        var title = $(element).children().find('.buzzer-title').text();
        var publishInfo = $(element).children().find('.buzzer-details').find('.buzzer-pubdate').text();
        var link = $(element).children().find('.buzzer-title-link').attr('href');

        var article = new Article({
          image: img,
          title: title,
          publishInfo: publishInfo,
          link: link
        });

        article.save(function(err, document){
          if(err) {
            return res.send("ERROR: " + err);
          };
        });
      });
    }//end if statement
  });//end request
  res.send("Scrape Done!");
});//end get route



module.exports = router;
