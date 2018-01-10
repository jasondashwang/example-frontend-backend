var express = require('express');
var path = require('path');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');

app.use(volleyball);
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

app.listen(8000, function () {
  console.log(chalk.magenta('Server is running on port 8000'));
});
