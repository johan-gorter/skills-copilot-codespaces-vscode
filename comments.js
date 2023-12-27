// Create web server

var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');

// GET /comments
// Get a list of comments
router.get('/', function(req, res, next) {
  Comments.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// POST /comments
// Create a new comment
router.post('/', function(req, res, next) {
  var comment = new Comments(req.body);
  comment.save(function(err, comment) {
    if (err) {
      return next(err);
    }
    res.status(201).json(comment);
  });
});

// GET /comments/:id
// Get a comment by ID
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// PUT /comments/:id
// Update a comment
router.put('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    comment.content = req.body.content;
    comment.save(function(err, comment) {
      if (err) {
        return next(err);
      }
      res.json(comment);
    });
  });
});

// DELETE /comments/:id
// Delete a comment
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

module.exports = router;