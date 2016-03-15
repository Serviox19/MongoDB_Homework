var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var PORT = process.env.PORT || 3000;

//Database Config
var mongoose = require('mongoose');
//finish db setup


app.get('/scraper', function(req, res) {
      request('http://www.foxsports.com/nba', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          $ = cherrio.load(body);

          $('title').each(function(i, element) {

              var title = $(this).children("a").text();
              var link = $(this).children("a").attr("href");
              //this is an example, your site will be different//

              if (title && link) {
                    db.scraedData.save({
                          title: title,
                          link: link
                    }, function (err, saved) {
                          if(err){
                            console.log(err);
                          } else {
                            console.log(saved);
                          }
                    })
              }
          })
        }
      })

      res.send("Scrape Done!");
});


