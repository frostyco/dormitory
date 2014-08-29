var fs = require("fs");
var express = require("express");
var app = express();
var less = require("less");

var amazonBase = "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=";



app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + "/../client"));

app.get("/api/books", function(req, res) {
  var books = {
    "1": {
      "title": "Tonal Harmony",
      "isbn": "1234567891011",
      "schools": {
        1: ["MUS301"],
        2: ["MUS100"]
      },
      "yes":102,
      "no":20
    }
  };
  res.json(books);
});

app.get("/api/books/:books_id", function(req, res) {
  res.json({});
});

app.post("/api/books", function(req, res) {
  //need to create from mongoose schema
  console.log(req.body.text);
});

app.get("*.css", function(req, res) {
  var path = __dirname + "/../client" + req.url.slice(0,-3)+"less";
  fs.readFile(path, "utf8", function(err, data) {
    console.log(data);
    if (err) throw err;
    less.render(data, function(err, css) {
      if (err) throw err;
      res.header("Content-type", "text/css");
      res.send(css);
    });
  });
});

var server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
