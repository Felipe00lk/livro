const paginas = document.querySelectorAll(".pagina");
const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let paginaAtual = 0;

function mostrarPagina(index) {
  paginas.forEach((pagina, i) => {
    pagina.classList.remove("ativa");
    if (i === index) {
      pagina.classList.add("ativa");
    }
  });
}

btnAvancar.addEventListener("click", () => {
  if (paginaAtual < paginas.length - 1) {
    paginaAtual++;
    mostrarPagina(paginaAtual);
  }
});

btnVoltar.addEventListener("click", () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    mostrarPagina(paginaAtual);
  }
});
