var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nbaSchema = new Schema({
  image: String,
  title: String,
  publishInfo: String,
  link: String
});

var Basketball = mongoose.model('Basketball', nbaSchema);
module.exports = Basketball;
