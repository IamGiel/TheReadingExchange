var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.saveBook = function(req, res) {

  User.findOneAndUpdate({'email': req.body.email}, {$push: {'books': req.body.book}}, {upsert: true, new: true})
  .exec(function(err, response) {
      res.status(200).json(response);
    });
}

module.exports.getLenders = function(req, res) {
    let isbn = String(req.params.isbn);
    User
    .find({
      "books.industryIdentifiers.identifier": isbn
    })
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }


module.exports.getProfileBooks = function(req, res) {
    let id = String(req.params.id);
    User
    .findOne({_id: req.params.id})
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }

  module.exports.startDeal = function(req, res) {
    console.log(req.body, 'this is the deal info in the database call ')
    User.updateOne(
      { 'email': req.body.lenderEmail, "books.industryIdentifiers.identifier": req.body.isbn},
      { $set: { "books": { "deal" : {"status": res.body.status}}}},
      { upsert: true })
    .exec(function(err, response) {
        res.status(200).json(response);
      });

    User.updateOne(
      { 'email': req.body.lenderEmail, "books.industryIdentifiers.identifier": req.body.isbn},
      { $set: { "books": { "deal" : {"status": res.body.status}}}},
      { upsert: true })
    .exec(function(err, response) {
        res.status(200).json(response);
      });
}