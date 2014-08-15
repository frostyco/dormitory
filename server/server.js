var fs = require("fs");
var express = require("express");
var app = express();
var less = require("less");

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + "/../client"));

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
