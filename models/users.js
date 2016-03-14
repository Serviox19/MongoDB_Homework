var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  comments: [{
      type: Schema.ObjectId,
      ref: 'Comment'
  }]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
