var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type:String,
    unique:true
  }
  //Have the Schema take an array named "Comments" which consists of an array of ObjectIds from the Comment Collection
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
