//Modulos requeridos para el proyecto
const express = require("express");
const cors = require("cors"); //Para evitar restricciones entre llamadas de sitios
const ruta = express.Router(); //Trae el metodo router de express para hacer los endpoints
const conex = require("./bdatos.js");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //La trae por defecto NODE JS me permite usar async/await opcion a fetch

ruta.use(express.json());
ruta.use(cors());
ruta.options("*", cors());

//Traemos los registros de la BD
ruta.get("/api/registro", (req, res) => {
  conex.query("SELECT * FROM registro", (error, respuesta) => {
    if (error) {
      throw error;
    } else {
      res.send(respuesta);
    }
  });
});

//Enviamos el registro a la BD
ruta.post("/Registro/enviar", async (req, res) => {
  try {
    let data = {
      FECHA: req.body.FECHA,
      PREGUNTA2: req.body.PREGUNTA1,
      PREGUNTA3: req.body.PREGUNTA1,
      PREGUNTA4: req.body.PREGUNTA1,
      CALIFICACION: req.body.CALIFICACION,
    };
    conex.query("INSERT INTO registro SET ?", data, (error, respuesta) => {
      //res.send("insercion exitosa !");
      console.log(respuesta);
      res.send(true).status(201);
    });
  } catch (error) {
    console.log(error);
    // res.send.status(404).error;
  }
});

module.exports = ruta;
