const btnVer = document.getElementById("btn-ver");
const contenedor = document.getElementById("div-contenedor");
const titCargado = document.getElementById("tit-cargado");
const artCargado = document.getElementById("artista-cargado");
const imagen = document.getElementById("img-cargada");
const anio = document.getElementById("anio-cargado");
const discos = require("../discos.json");

btnVer.addEventListener("click", function () {
  const listaDiscos = JSON.parse(discos);

  const xhr = new XMLHttpRequest();

  for (i = 0; i <= listaDiscos.lenght; i++) {
    if (tituloIngresado === listaDiscos[i].titulo) {
      console.log(ok);
    }
  }

  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);
  });
  xhr.open("GET", "/disco");
  xhr.send();
});
