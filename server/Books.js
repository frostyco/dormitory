var mongoose = require('mongoose');
var Class = require('./Classes');

module.exports = mongoose.model('Book', {
  title : String,
  isbn : String,
  classes : [Class]
});

