var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  comment: String,
  article: Schema.ObjectId
});

var Comment = mongoose.model('Comment', CommentsSchema);
module.exports = Comment;
