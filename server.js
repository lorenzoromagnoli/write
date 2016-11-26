var express = require('express');
var app = express();

// set the view engine to ejs

app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// public folder to store assets
app.use(express.static(__dirname + '/'));

// routes for app
app.get('/', function(req, res) {
  res.render('index.html');
});

// listen on port 8000 (for localhost) or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);
