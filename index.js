// Initialize express, handlebars, and paths for setting up the server
var express = require('express');
var path = require('path');
var app = express();
var env = require('dotenv').config()

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 17590);


// various routes to render the different webpages
app.get('/', function(req, res){
	res.render('home')
});

app.get('/blog', function(req, res){
	res.render('blog')
});

app.get('/projects', function(req, res){
  res.render('projects')
});

app.get('/about', function(req, res){
  res.render('about')
});

app.get('/contact', function(req, res){
  res.render('contact')
});


// handle 404 responses
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// handle 500 responses
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

// tell Express to listen at which port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
