const { Console } = require('console');
const express = require('express');
const mongoose = require ("mongoose");
require ("dotenv").config();

const clienteRoutes = require("./routes/cliente");

const app = express();
const port =process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', clienteRoutes);

// router
app.get("/", (req, res) => {
    res.send("Bienvenido");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listenig on port ', port));
