# Aplicación CRUD de Usuarios (Stack MERN)

Este es un proyecto educativo diseñado para demostrar las operaciones básicas **CRUD** (Crear, Leer, Actualizar, Eliminar) utilizando el stack **MERN**: MongoDB, Express, React y Node.js.

La aplicación permite gestionar una lista de usuarios, donde se puede agregar nuevos usuarios, ver la lista completa, editar la información de un usuario existente y eliminarlo.

> 💡 **Sugerencia:** Graba un GIF corto que muestre cómo funciona la aplicación (agregando, editando y eliminando un usuario) y ponlo aquí. Esto hace que tu proyecto sea mucho más atractivo.

-----

## 🛠️ Tecnologías Utilizadas

El proyecto está dividido en dos partes principales: el cliente (frontend) y el servidor (backend).

### **Backend**

  * **Node.js:** Entorno de ejecución para JavaScript en el servidor.
  * **Express:** Framework para construir la API REST de forma sencilla.
  * **MongoDB:** Base de datos NoSQL para almacenar la información de los usuarios.
  * **Mongoose:** Librería para modelar los datos de la aplicación para MongoDB.
  * **Nodemon:** Herramienta que reinicia el servidor automáticamente al detectar cambios en el código.

### **Frontend**

  * **React:** Librería para construir la interfaz de usuario.
  * **React Router Dom:** Para manejar las rutas de la aplicación (ej: `/`, `/agregar-usuario`).
  * **Axios:** Cliente HTTP para realizar las peticiones a la API del backend.
  * **Bootstrap:** Framework de CSS para dar estilos de forma rápida y responsiva.

-----

## ✨ Características

  * **Crear:** Añadir nuevos usuarios a la base de datos a través de un formulario.
  * **Leer:** Listar todos los usuarios existentes en la página principal.
  * **Actualizar:** Editar la información de un usuario específico.
  * **Eliminar:** Borrar un usuario de la lista y de la base de datos.

-----

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### **Pre-requisitos**

Asegúrate de tener instalado lo siguiente:

  * [Node.js](https://nodejs.org/) (versión 16 o superior)
  * [MongoDB](https://www.mongodb.com/try/download/community) (o una cuenta en MongoDB Atlas)

### **Pasos**

1.  **Clona el repositorio:**

    ```sh
    git clone https://github.com/Jam1ll/mern-crud.git
    cd mern-crud
    ```

2.  **Configuración del Servidor (Backend):**

      * Navega a la carpeta del servidor e instala las dependencias:
        ```sh
        cd server
        npm install
        ```
      * Crea un archivo `.env` en la raíz de la carpeta `/server` y añade tu URI de conexión a MongoDB:
        ```
        MONGO_URI=tu_string_de_conexion_a_mongodb
        PORT=5000
        ```
      * Inicia el servidor:
        ```sh
        npm run dev
        ```
      * El servidor backend estará corriendo en `http://localhost:5000`.

3.  **Configuración del Cliente (Frontend):**

      * Abre una nueva terminal. Desde la raíz del proyecto, navega a la carpeta del cliente e instala las dependencias:
        ```sh
        cd client
        npm install
        ```
      * Inicia la aplicación de React:
        ```sh
        npm start
        ```
      * La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

¡Y listo\! Ya puedes interactuar con la aplicación en tu entorno local.

-----

## 📂 Estructura del Proyecto

```
mern-crud/
├── client/         # Código del Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
├── server/         # Código del Backend (Node/Express)
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

-----

## 📝 Endpoints de la API

La API del backend expone las siguientes rutas:

| Método HTTP | Ruta                        | Descripción                       |
|-------------|-----------------------------|-----------------------------------|
| `GET`       | `/api/usuario/obtener-data` | Obtiene la lista de todos los usuarios. |
| `POST`      | `/api/usuario/agregar-usuario`| Crea un nuevo usuario.            |
| `POST`      | `/api/usuario/obtener-data-usuario` | Obtiene los datos de un usuario específico por su ID. |
| `PUT`       | `/api/usuario/actualizar-usuario` | Actualiza un usuario existente. |
| `POST`      | `/api/usuario/eliminar-usuario` | Elimina un usuario por su ID. |

-----

## 🔮 Posibles Mejoras

Este es un proyecto base. Algunas ideas para extenderlo son:

  - [ ] Implementar validación de datos en el backend y en los formularios del frontend.
  - [ ] Añadir un sistema de autenticación de usuarios (login/registro).
  - [ ] Mejorar la interfaz de usuario con animaciones o un diseño más avanzado.
  - [ ] Contenerizar la aplicación con Docker.
  - [ ] Desplegar el proyecto en una plataforma como Heroku, Vercel o Netlify.
