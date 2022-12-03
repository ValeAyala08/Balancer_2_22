const mongoose = require('mongoose');

const tipoProyectoSchema = mongoose.Schema(
  {
    nombre:          {type: String,
      enum:['ensayo', 'articulo', 'monografia', 'trabajo final de pregrados', 
      'trabajo final de especializacion'], required: true},
    fecha_creacion:  {type: String   , required: true},
    fecha_edicion:   {type: String   , required: true}
  },
  {versionKey: false}
);
module.exports = mongoose.model("tipoproyectos", tipoProyectoSchema);