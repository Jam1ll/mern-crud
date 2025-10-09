//tomar express de la librería instalada
const express = require("express");

//inicializar express
const app = express();

//importar conexion a mongodb
const archivoDb = require("./conexion");

app.get("/", (req, res) => {
  res.send("Bienvenidos al servidor backend Node.js. Corriendo...");
});

//
// configurar server básico
//

port = 5000;

//el servidor escuchará en el puerto 5000
app.listen(port, function () {
  console.log(`El servidor está corriendo correctamente en el puerto ${port}`);
});
