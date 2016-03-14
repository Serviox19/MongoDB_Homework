var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  comment: String,
  user: Schema.ObjectId
});

var Comment = mongoose.model('Comment', CommentsSchema);
module.exports = Comment;
