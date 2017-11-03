'use strict';
module.exports = function(app) {
  const listaTareas = require('../controllers/tareaController');

  // listaTareas Routes
  app.route('/tareas') //explicar middleware con login o hasPermission de alguna manera
    .get(listaTareas.list)
    .post(listaTareas.create);


  app.route('/tareas/:idTarea')
    .get(listaTareas.get)
    .put(listaTareas.update)
    .delete(listaTareas.delete);
};