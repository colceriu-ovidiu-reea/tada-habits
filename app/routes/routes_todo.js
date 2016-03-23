// load the todo model
var Todo = require('../models/todo');
var express = require("express");
var multer = require("multer");

var router = express.Router();

// api ------------------------------

// get all todos --------------------
router.get('/todos', function(req, res) {

  Todo.find(function(err, todos) {
    if (err)
      res.send(err);

    res.json(todos);
  });

});

// create a todo --------------------
router.post('/todos', function(req, res) {

  Todo.create({
    text : req.body.text,
    done: false
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
        if (err)
            res.send(err);

        res.json(todos);
    });
  });

});

// delete a todo -------------------
// router.delete('/todos/:todo_id', function(req, res) {
router.delete('/todos', function(req, res) {
  Todo.remove({
    // _id: req.params.todo_id
    _id: req.body.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
        if (err)
            res.send(err);

        res.json(todos);
    });
  });
});

module.exports = router;
