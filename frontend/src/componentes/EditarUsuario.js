import React from "react"; //ya viene instalado en el package.json
import { useParams } from "react-router-dom";

//crear un componente
function EditarUsuario() {
  //
  // Hook
  //
  const params = useParams();

  return (
    <div>
      <h2>Editar un usuario</h2>
      <h3>El id del usuario es: {params.idUsuario}</h3>
    </div>
  );
}

//exportar componente
export default EditarUsuario;
