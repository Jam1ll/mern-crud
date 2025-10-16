//
// server.js es la zona central del backend
//

// Esta constante trae la herramienta que se usará para desarrollar el backend (EXPRESS.JS)
const express = require("express");

// Esta constante crea una instancia de la aplicación.
// 'app' le dirá al backend qué hacer cuando se usen rutas.
const app = express();

const cors = require("cors");
app.use(cors());

// Esta constante importa el archivo que conecta a la base de datos
const archivoDb = require("./conexion");

// Esta constante importa el conjunto de instrucciones (router)
// que se usará para las peticiones de un modelo (usuario, en este caso)
const rutaUsuario = require("./rutas/usuario");

//Importar body parser

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

// Esta función monta el router en /api/usuario.
// Esto significa que si el cliente hace una petición usando esa ruta,
// El backend va a conectar /api/usuario con los endpoints de /rutas/usuario
// EJEMPLO: Si hay un GET listAll, la ruta completa sería: api/usuario/listAll
app.use("/api/usuario", rutaUsuario);

// Este es un endpoint base.
// Es lo que el server muestra si se inicia sin alguna ruta (http://localhost:5000/)
app.get("/", (req, res) => {
  res.send("Bienvenidos al servidor backend Node.js. Corriendo...");
});

//
// configuración de un server básico
//

port = 5000;

//el servidor escuchará en el puerto 5000
app.listen(port, function () {
  console.log(`El servidor está corriendo correctamente en el puerto ${port}`);
});
