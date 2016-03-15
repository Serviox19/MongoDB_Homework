var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


var Artice = require('../models/articles.js');


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
          console.log(body);

          // $ = cherrio.load(body);

          // $('title').each(function(i, element) {

          //     var img = ;
          //     var title = $(this).children("a").text();
          //     var link = $(this).children("a").attr("href");
          //     var publishInfo = ;
          //     //this is an example, your site will be different//

          //     if (title && link) {

          //     }
          // })
        }
      })

      res.send("Scrape Done!");
});


module.exports = router;
