
const folhas = document.querySelectorAll(".folha");
let folhaAtual = 0;

avancar.addEventListener("click", () => {
  if (folhaAtual < folhas.length) {
    folhas[folhaAtual].classList.add("virada");
    folhaAtual++;
  }
});

voltar.addEventListener("click", () => {
  if (folhaAtual > 0) {
    folhaAtual--;
    folhas[folhaAtual].classList.remove("virada");
  }
});
