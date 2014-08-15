var app = require('express')();

app.get('/', function(req, res){
  res.render('/home');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
