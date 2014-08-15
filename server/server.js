var fs = require("fs");
var app = require('express')();
var less = require("less");

app.get('/', function(req, res){
  res.render('/home');
});

app.get("*.less", function(req, res) {
  var path = __dirname + req.url;
  fs.readFile(path, "utf8", function(err, data) {
    if (err) throw err;
    less.render(data, function(err, css) {
      if (err) throw err;
      res.header("Content-type", "text/css");
      res.send(css);
    });
  });
});


var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
