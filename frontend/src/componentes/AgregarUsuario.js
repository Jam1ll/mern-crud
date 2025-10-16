import React, { useState } from "react"; //ya viene instalado en el package.json
import uniqid from "uniqid";
import axios from "axios";

//crear un componente
function AgregarUsuario() {
  //
  //Hooks
  //
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //
  //
  //

  //metodo para insercion de datos
  function agregarUsuario() {
    var usuario = {
      idUsuario: uniqid(),
      nombre: nombre,
      email: email,
      telefono: telefono,
    };
    console.log(usuario);
    axios
      .post("/api/usuario/agregar-usuario", usuario)
      .then((res) => {
        const data = res.data;
        if (data) {
          console.log(data);
          alert("datos guardados");
        }
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <h2 className="mt-4">Crear nuevo usuario</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            ></input>
          </div>

          <button onClick={agregarUsuario} className="btn btn-success">
            Guardar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}

//exportar componente
export default AgregarUsuario;
