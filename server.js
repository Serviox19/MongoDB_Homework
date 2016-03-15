var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

//routes
var routes = require('./routes/index');
app.use('/', routes);

//set up handlebars layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + "/public"));


//Database configuration
mongoose.connect('mongodb://localhost/sports_page');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});
///////// End Database Config ///////



app.listen(PORT, function(req, res) {
  console.log("App Listening on PORT:" + PORT);
});


