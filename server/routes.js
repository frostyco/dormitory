var Book = require('./Books');
var Class = require('./Classes');
var School = require('./Schools');

module.exports = function(app) {
  // Books
  // index
  app.get("/api/books", function(req, res) {
    Book.find(function (err, books) {
      if (err) { res.send(err); }
      res.json(books);
    });
  });

  // show
  app.get("/api/books/:books_id", function(req, res) {
    Book.find({ _id: req.params.book_id }, function (err, book) {
      if (err) { res.send(err); }
      res.json(book);
    });
  });

  // create
  app.post("/api/books", function(req, res) {
    console.log(req.body);

    Book.create({
      title : req.body.title,
      isbn : req.body.isbn,
      classes : req.body.classes
    }, function(err, book) {
      if (err) { res.send(err); }

      // get and return all the books after you create another
      Book.find(function(err, books) {
        if (err) { res.send(err); }
        res.json(books);
      });
    });
  });

  // delete
  app.delete('/api/books/:book_id', function(req, res) {
    Book.remove({
      _id : req.params.book_id
    }, function(err, book) {
      if (err) { res.send(err); }

      // get and return all the books after you create another
      Book.find(function(err, books) {
        if (err) { res.send(err); }
        res.json(books);
      });
    });
  });

  // Classes
  // index
  app.get("/api/classes", function(req, res) {
    Class.find(function (err, classes) {
      if (err) { res.send(err); }
      res.json(classes);
    });
  });

  // show
  app.get("/api/classes/:class_id", function(req, res) {
    Class.find({ _id: req.params.class_id }, function (err, klass) {
      if (err) { res.send(err); }
      res.json(klass);
    });
  });

  // create
  app.post("/api/classes", function(req, res) {
    console.log(req.body);

    Class.create({
      school : req.body.school,
      title : req.body.title,
      yes : req.body.yes,
      no : req.body.no,
    }, function(err, klass) {
      if (err) { res.send(err); }

      // get and return all the classes after you create another
      Class.find(function(err, classes) {
        if (err) { res.send(err); }
        res.json(classes);
      });
    });
  });

  // delete
  app.delete('/api/classes/:class_id', function(req, res) {
    Class.remove({
      _id : req.params.class_id
    }, function(err, klass) {
      if (err) { res.send(err); }

      // get and return all the classes after you create another
      Class.find(function(err, classes) {
        if (err) { res.send(err); }
        res.json(classes);
      });
    });
  });

  // Schools
  // index
  app.get("/api/schools", function(req, res) {
    School.find(function (err, schools) {
      if (err) { res.send(err); }
      res.json(schools);
    });
  });

  // show
  app.get("/api/schools/:school_id", function(req, res) {
    School.find({ _id: req.params.school_id }, function (err, school) {
      if (err) { res.send(err); }
      res.json(school);
    });
  });

  // create
  app.post("/api/schools", function(req, res) {
    console.log(req.body);

    School.create({

    }, function(err, school) {
      if (err) { res.send(err); }

      // get and return all the schools after you create another
      School.find(function(err, schools) {
        if (err) { res.send(err); }
        res.json(schools);
      });
    });
  });

  // delete
  app.delete('/api/schools/:school_id', function(req, res) {
    School.remove({
      _id : req.params.school_id
    }, function(err, school) {
      if (err) { res.send(err); }

      // get and return all the schools after you create another
      School.find(function(err, schools) {
        if (err) { res.send(err); }
        res.json(schools);
      });
    });
  });
}
