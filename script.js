
const paginas = document.querySelectorAll(".pagina");
const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let paginaAtual = 0;

// Ordem correta (empilhamento)
paginas.forEach((pagina, index) => {
  pagina.style.zIndex = paginas.length - index;
});

btnAvancar.addEventListener("click", () => {
  if (paginaAtual < paginas.length) {
    paginas[paginaAtual].classList.add("virada");
    paginaAtual++;
  }
});

btnVoltar.addEventListener("click", () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    paginas[paginaAtual].classList.remove("virada");
  }
});
