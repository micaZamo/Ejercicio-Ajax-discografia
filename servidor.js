const express = require("express");
const app = express();
const path = require("path");
const discos = require("./discos.json");
const PUERTO = 4040;

//Mildware para recursos estaticos
app.use(express.static(`${__dirname}/cliente`));

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "cliente/inicio.html"));
});

app.get("/disco", function (req, res) {
  const listaDiscos = JSON.parse(discos);
  const tituloIngresado = req.body.titulo;
  const artistaIngresado = req.body.artista;
  const anioIngresado = req.body.lanzamiento;

  let tituloFiltrado = listaDiscos.filter(function (elemento) {
    if (elemento.titulo === tituloIngresado) {
      return true;
    } else {
      return false;
    }
  });

  res.send(listaDiscos);
});

app.listen(PUERTO, function () {
  console.log(`Iniciando servidor en el puerto ${PUERTO}`);
});
