var mongoose = require('mongoose');

//Database configuration
if( process.env.PORT) {
  mongoose.connect("mongodb://admin:password@ds061365.mlab.com:61365/sports-app");
} else {
  mongoose.connect('mongodb://localhost:27017/sports-app');
}
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

module.exports = db;
