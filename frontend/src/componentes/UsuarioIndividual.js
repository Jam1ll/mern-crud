import React from "react"; //ya viene instalado en el package.json
import { Link } from "react-router-dom";

//crear un componente
function UsuarioIndividual({ usuario }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{usuario.idUsuario}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
            <li className="list-group-item">{usuario.telefono}</li>
          </ul>
          <Link to={`/editar-usuario/${usuario.idUsuario}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          &nbsp;
          <button className="btn btn-danger">Eliminar</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

//exportar componente
export default UsuarioIndividual;
