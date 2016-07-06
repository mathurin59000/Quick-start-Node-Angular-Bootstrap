var express = require('express');
var helmet = require('helmet');

var app = express();   //Initialisation de l'application
app.use(helmet());    //protége l'application de certaines des vulnérabilités bien connues du Web -> http://expressjs.com/fr/advanced/best-practice-security.html

//configuration
//var config = require('./config.json')[app.get('env')];
//app.use(express.errorHandler(config.errorHandlerOptions));

app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});