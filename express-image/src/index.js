var Chance = require("chance");
var chance = new Chance();
var express = require('express');
var app = express();


app.get('/test', function (req, res) {
  res.send('hey aldo testerino!');
})


app.get('/', function (req, res) {
  res.send('hey aldo!');
})



app.listen(3000, function () {
  console.log('Accept HTTP requests on port 3000.');
})