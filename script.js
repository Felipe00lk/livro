
const folhas = document.querySelectorAll(".folha");
const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let folhaAtual = 0;

btnAvancar.addEventListener("click", () => {
  if (folhaAtual < folhas.length) {
    folhas[folhaAtual].classList.add("virada");
    folhaAtual++;
  }
});

btnVoltar.addEventListener("click", () => {
  if (folhaAtual > 0) {
    folhaAtual--;
    folhas[folhaAtual].classList.remove("virada");
  }
});
