const express = require("express");
const app = express();
const path = require("path");
const discos = require("./discos.json");
const PUERTO = 4042;

//Mildware para recursos estaticos
app.use(express.static(`${__dirname}/cliente`));

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "cliente/inicio.html"));
});

app.get("/disco", function (req, res) {
  let listaDiscos = discos;
  if (req.query.artista) {
    listaDiscos = listaDiscos.filter(function (elemento) {
      if (elemento.artista.includes(req.query.artista)) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (req.query.titulo) {
    listaDiscos = listaDiscos.filter(function (elemento) {
      if (elemento.titulo.includes(req.query.titulo)) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (req.query.lanzamiento) {
    listaDiscos = listaDiscos.filter(function (elemento) {
      if (elemento.lanzamiento.includes(req.query.lanzamiento)) {
        return true;
      } else {
        return false;
      }
    });
  }
  res.sendFile(discos);
});

app.listen(PUERTO, function () {
  console.log(`Iniciando servidor en el puerto ${PUERTO}`);
});
