var task = require("../models/model");

// var People = task.model('task');

module.exports = {
  listAllTasks: function(req, res) {
    task
      .find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: function(req, res) {
    console.log(req.body);
    task
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  showOne: function(req, res) {
    task
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: function(req, res) {
    console.log(req.body);
    task
      .findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true }
      )
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  remove: function(req, res) {
    task
      .remove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
};
