var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  author: String,
  img: {
    data: Buffer,
    contentType: String
  },
  content: String
});

var article = mongoose.model('article', articleSchema);
module.exports = article;
