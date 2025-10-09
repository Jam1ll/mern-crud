//tomar de mongoose
const mongoose = require("mongoose");

//establecer conexion
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

//inicializar objeto de conexion
const db = mongoose.connection;

//si la conexion es exitosa...
db.on("connected", () => {
  console.log("conexion correcta a mongodb");
});

//si la conexion ha fallado...
db.on("error", () => {
  console.log("error correcta a mongodb");
});

//exportar
module.exports = mongoose;
