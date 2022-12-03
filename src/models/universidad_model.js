const mongoose = require('mongoose');

const universidadSchema = mongoose.Schema(
  {
    nombre:         {type: String , required: true},
    direccion:      {type: String , required: true},
    telefono:       {type: String , required: true},
    fecha_creacion: {type: String  , required: true},
    fecha_edicion:  {type: String   , required: true}
  },
  {versionKey: false}
);
module.exports = mongoose.model("universidades", universidadSchema);