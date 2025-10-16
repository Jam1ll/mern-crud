import React, { useEffect, useState } from "react"; //ya viene instalado en el package.json
import UsuarioIndividual from "./UsuarioIndividual";
import axios from "axios";

//crear un componente
function ListaUsuarios() {
  //
  // Hook: funciones especiales de React que facilitan el uso de modelos en los componentes
  //
  const [dataUsuarios, setDataUsuario] = useState([]); //lista vacia

  //1. usar axios para obtener la data
  useEffect(() => {
    axios
      .get("api/usuario/obtener-usuarios")
      .then((res) => {
        console.log(res.data);
        setDataUsuario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //si no, devuelve una lista vacia ([])

  //2. mapear lista de usuarios en un objeto de tipo usuario (UsuarioIndividual)
  const list = dataUsuarios.map((usuario) => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {list}
    </div>
  );
}

//exportar componente
export default ListaUsuarios;
