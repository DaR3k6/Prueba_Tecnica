const express = require("express");
const app = express(); //creamos nuestra aplicacion llamando el metodo constructor de express

//usamos las rutas de usuarios
app.use("/", require("./modules/usuarios.js")); //redirigimos al modulo rutas  donde se redirige el modulo
//usamos las rutas de registro de visitas
app.use("/", require("./modules/registro.js")); 
app.listen("3300", () => {
  console.log("Aplicacion ejecutandose en : http://localhost:3300");
});