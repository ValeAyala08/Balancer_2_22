const {Schema, mongoose} = require('mongoose');

const proyectoSchema = mongoose.Schema(
  {
    titulo:        {type: String , required: true},
    fecha_inicio:  {type: String , required: true},
    fecha_entrega: {type: String , required: true},
    valor:         {type: String , required: true},
    fecha_creacion:{type: String , required: true},
    fecha_edicion: {type: String , required: true},
    cliente:       {type: Schema.Types.ObjectId, ref: "clientes"},
    tipo_proyecto: {type: Schema.Types.ObjectId, ref: "tipoproyectos"},
    universidad:   {type: Schema.Types.ObjectId, ref: "universidades"},
    etapa_proyecto:{type: Schema.Types.ObjectId, ref: "etapas"}
  },
  {versionKey: false}
);
module.exports = mongoose.model("proyecto", proyectoSchema);