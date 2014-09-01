var mongoose = require('mongoose');
var School = require('./Schools');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('Class', {
  title : String,
  school : ObjectId,
  yes : { type: Number, min: 0 },
  no : { type: Number, min: 0 }
});

