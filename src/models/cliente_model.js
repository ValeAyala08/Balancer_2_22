const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nombre:        {type: String , required: false},
    email:         {type: String , required: false},
    fecha_creacion:{type: String , required: false},
    fecha_edicion: {type: String , required: false}
    },
    {versionKey: false}
);

module.exports = mongoose.model("clientes", clienteSchema);
