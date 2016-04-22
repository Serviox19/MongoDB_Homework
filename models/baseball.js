var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mlbSchema = new Schema({
  image: String,
  title: String,
  publishInfo: String,
  link: String
});

var Baseball = mongoose.model('Baseball', mlbSchema);
module.exports = Baseball;
