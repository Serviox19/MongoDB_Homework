var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var mlbSchema = new mongoose.Schema({
  image: {
    type: String,
    unique: true
  },
  title: {
    type: String,
    unique: true
  },
  publishInfo: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  }
});

mlbSchema.plugin(uniqueValidator, { message: '/' });
var Baseball = mongoose.model('Baseball', mlbSchema);
module.exports = Baseball;
