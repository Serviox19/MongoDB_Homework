var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
  comment: {
    type: String
  }
});

var Comment = mongoose.model('Comment', commentsSchema);
module.exports = Comment;
