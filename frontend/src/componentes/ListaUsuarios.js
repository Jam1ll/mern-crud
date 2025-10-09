import React from "react"; //ya viene instalado en el package.json
import UsuarioIndividual from "./UsuarioIndividual";

//crear un componente
function ListaUsuarios() {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <UsuarioIndividual />
    </div>
  );
}

//exportar componente
export default ListaUsuarios;
