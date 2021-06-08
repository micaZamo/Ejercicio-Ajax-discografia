const tit = document.getElementById("titulo");
const lanz = document.getElementById("lanzamiento");
const art = document.getElementById("artista");
const divCont = document.getElementById("div-contenedor");
const btnVer = document.getElementById("btn-ver");
const titCargado = document.getElementById("tit-cargado");
const artCargado = document.getElementById("artista-cargado");
const anio = document.getElementById("anio-cargado");
const imagen = document.getElementById("img-cargada");

btnVer.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    const disco = JSON.parse(xhr.responseText);
    for (let i = 0; i < disco.length; i++) {
      const discoi = disco[i];
      titCargado.textContent = discoi.titulo;
      artCargado.textContent = discoi.artista;
      anio.textContent = discoi.lanzamiento;
      imagen.src = discoi.tapa;
    }
  });
  let filtros = "";
  if (tit.value) {
    filtros += "titulo" + titulo;
  }

  if (art.value) {
    filtros += (filtros ? "&" : " ") + "artista" + artista;
  }

  if (lanz.value) {
    filtros += (filtros ? "&" : " ") + "lanzamiento" + lanzamiento;
  }
  xhr.open("GET", "/discos" + filtros);
  xhr.send();
});
