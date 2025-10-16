//tomar modulo express
const express = require("express");

//instanciar el router de express
const router = express.Router();

//tomar modulo mongoose
const mongoose = require("mongoose");

//inicializar schema de bd
const schema = mongoose.Schema;

//definir schema con un hashmap/libreria
const schemaUsuario = new schema({
  idUsuario: String,
  nombre: String,
  email: String,
  telefono: String,
});

//asignar schema a un modelo llamado 'usuarios'
const ModeloUsuario = mongoose.model("usuarios", schemaUsuario);

//
// API ENDPOINTS
//

//
// GET
//

router.get("/obtener-usuarios", async (req, res) => {
  try {
    //guardar los datos en una variable
    const response = await ModeloUsuario.find({}); //recordar el await
    res.json(response); //en vez de res.send(usuarios), ya que es mejor .json() para APIs

    //en caso de error
  } catch (error) {
    console.error("error al obtener usuarios: ", error);
    res.status(500).json({ errorMessage: "error al obtener usuarios" });
  }
});

//
// POST
//

router.post("/agregar-usuario", async (req, res) => {
  try {
    //se intenta crear el modelo con los datos recibidos (req)
    const nuevoUsuario = new ModeloUsuario({
      idUsuario: req.body.idUsuario,
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
    });

    //se usa await porque es una funcion asincrona
    await nuevoUsuario.save();

    res.json({ message: "Usuario agregado correctamente" });
    //si hay un error, se atrapa y muestra
  } catch (error) {
    console.error("Error al guardar el usuario:", error);
    res.status(500).json({ errorMessage: "Error al agregar usuario" });
  }
});

//exportar router para que los endpoints estén disponibles en los componentes de React
module.exports = router;
