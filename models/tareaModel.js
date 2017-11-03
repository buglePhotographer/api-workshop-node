'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TareaSchema = new Schema({
  nombre: {
    type: String,
    required: 'Ingrese nombre de la tarea'
  },
  fecha_creacion: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: [{
      type: String,
      enum: ['pendiente', 'en curso', 'completada']
    }],
    default: ['pendiente']
  }
});

module.exports = mongoose.model('Tareas', TareaSchema);