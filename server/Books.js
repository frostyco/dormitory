var Book = mongoose.model('Book', {
  title : String,
  isbn : String,
  schools : [School],
  yes : { type: Number, min: 0 },
  no : { type: Number, min: 0 }
});

