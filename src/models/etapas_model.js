const mongoose = require('mongoose');

const etapasSchema = mongoose.Schema(
  {
    nombre:        {type: String , 
      enum:['Anteproyecto', 'Entrega parcial 1', 'Entrega parcial 2', 'Entrega final'], 
      required: true},
    fecha_creacion:{type: String , required: true},
    fecha_edicion: {type: String , required: true}
  },
  {versionKey: false}
);
module.exports = mongoose.model("etapas", etapasSchema);
