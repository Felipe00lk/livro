const folhas = document.querySelectorAll(".folha");
const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let folhaAtual = 0;

function mostrarFolha(index) {
  folhas.forEach((folha, i) => {
    folha.classList.remove("ativa");
    if (i === index) {
      folha.classList.add("ativa");
    }
  });
}

btnAvancar.addEventListener("click", () => {
  if (folhaAtual < folhas.length - 1) {
    folhaAtual++;
    mostrarFolha(folhaAtual);
  }
});

btnVoltar.addEventListener("click", () => {
  if (folhaAtual > 0) {
    folhaAtual--;
    mostrarFolha(folhaAtual);
  }
});
