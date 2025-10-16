import axios from "axios";
import React, { useEffect, useState } from "react"; //ya viene instalado en el package.json
import { useParams } from "react-router-dom";

//crear un componente
function EditarUsuario() {
  //
  // Hook
  //
  const params = useParams();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //
  //
  //

  useEffect(() => {
    axios
      .post("/api/usuario/obtener-data-usuario", {
        idUsuario: params.idUsuario,
      })
      .then((res) => {
        console.log(res.data[0]); //primera coincidencia
        //rellenar formulario con datos recibidos
        const data = res.data[0];
        if (data) {
          setNombre(data.nombre);
          setEmail(data.email);
          setTelefono(data.telefono);
        }
      });
  }, []);

  function editarUsuario() {
    const usuario = {
      idUsuario: params.idUsuario,
      nombre: nombre,
      email: email,
      telefono: telefono,
    };
    //peticion con axios
    axios
      .post("/api/usuario/actualizar-usuario", usuario)
      .then((res) => {
        const data = res.data;
        if (data) {
          console.log(data);
          alert("datos editados exitosamente");
        }
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h2>Editar un usuario</h2>
      <div className="container">
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
                type="text"
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
            <button onClick={editarUsuario} className="btn btn-warning">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//exportar componente
export default EditarUsuario;
