var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  publishInfo: String,
  img: {
    data: Buffer,
    contentType: String
  },
  link: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
