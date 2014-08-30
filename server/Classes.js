var mongoose = require('mongoose');
var School = require('./Schools');

module.exports = mongoose.model('Class', {
  school : School,
  title : String,
  yes : { type: Number, min: 0 },
  no : { type: Number, min: 0 }
});

