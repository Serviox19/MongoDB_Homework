var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var nbaSchema = new mongoose.Schema({
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

nbaSchema.plugin(uniqueValidator, { message: '/' });
var Basketball = mongoose.model('Basketball', nbaSchema);
module.exports = Basketball;
