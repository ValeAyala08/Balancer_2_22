const express = require("express");
const clienteSchema = require("../models/cliente_model");

const EtapasSchema = require("../models/etapas_model");
const proyectoSchema = require("../models/proyecto_model");
const tipoProyectoSchema = require("../models/tipoProyecto_model");
const universidadSchema = require("../models/universidad_model");

const router = express.Router();
/* 
C - Crear      | POST
R - Leer       | GET
U - Actualizar | PUT 
D - Eliminar   | DELETE 
*/

// Listar clientes
router.get('/listarCliente', (req, res) => {
  clienteSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

module.exports = router;