var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  author: String,
  img: {
    data: Buffer,
    contentType: String
  },
  content: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
