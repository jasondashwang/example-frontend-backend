var express = require('express');
var path = require('path');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');

app.use(volleyball); // logging middleware
app.use(bodyParser.json()); // body parsing middleware

app.use('/api', require('./api')); // api routes

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
}); // anything that is not the matching URI to anything we declared in api or files in public, we will default to sending the index.html

app.listen(8000, function () {
  console.log(chalk.magenta('Server is running on port 8000'));
});
