var express = require("express");

var app = express();
// var jquery = require('jquery');
// var bootstrap = require('bootstrap');
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.listen(3000);
console.log("Have fun at port 3000");
