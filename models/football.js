var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var nflSchema = new Schema({
  image: {
    type: String,
    unique: true
  },
  title: {
    type: String,
    unique: true
  },
  publishInfo: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  }
});

nflSchema.plugin(uniqueValidator, { message: '/' });
var Football = mongoose.model('Football', nflSchema);
module.exports = Football;
