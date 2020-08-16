var db = require('../models');

exports.getTodos = (req, res) => {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (error) {
            res.send(error);
        });
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (error) {
            res.send(error);
        });
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(foundTodo => {
            res.json(foundTodo);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

exports.deleteTodo = (req, res) => {
    db.Todo.remove({ _id: req.params.todoId })
        .then(function () {
            res.json({ message: 'We deleted it!' });
        })
        .catch(function (error) {
            res.send(error);
        })
}

module.exports = exports;