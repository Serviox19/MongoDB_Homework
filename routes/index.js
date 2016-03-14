var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var mongoose = require('mongoose');


router.get('/', function(req, res) {
  res.render('index');
});

//get users
router.get('/users', function(req,res){
  User.find({}, function(err, users){
    if(err){
      console.log(err);
    } else {
      res.json(users);
    }
  })
});//not sure if this works yet, need to add users first





module.exports = router;
