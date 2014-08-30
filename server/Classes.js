var mongoose = require('mongoose');

module.exports = mongoose.model('Class', {
  school : String,
  title : String,
  yes : { type: Number, min: 0 },
  no : { type: Number, min: 0 }
});

