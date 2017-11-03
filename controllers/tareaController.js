'use strict';

const mongoose = require('mongoose');
const Tarea = mongoose.model('Tareas');

exports.list = function(req, res) {
    Tarea.find({}, function(err, tarea) {
    if (err)
      res.send(err);
    res.json(tarea);
  });
};


exports.create = function(req, res) {
  let nueva_tarea = new Tarea(req.body);
  nueva_tarea.save(function(err, tarea) {
    if (err)
      res.send(err);
    res.json(tarea);
  });
};


exports.get = function(req, res) {
  Tarea.findById(req.params.idTarea, function(err, tarea) {
    if (err)
      res.send(err);
    res.json(tarea);
  });
};


exports.update = function(req, res) {
  Tarea.findOneAndUpdate({_id: req.params.idTarea}, req.body, {new: true}, function(err, tarea) {
    if (err)
      res.send(err);
    res.json(tarea);
  });
};


exports.delete = function(req, res) {
  Tarea.remove({
    _id: req.params.idTarea
  }, function(err, tarea) {
    if (err)
      res.send(err);
    res.json({ mensaje: 'Tarea borrada' });
  });
};