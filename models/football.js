var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nflSchema = new Schema({
  image: String,
  title: String,
  publishInfo: String,
  link: String
});

var Football = mongoose.model('Football', nflSchema);
module.exports = Football;
