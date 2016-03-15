var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  image: String,
  title: String,
  publishInfo: String,
  link: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
