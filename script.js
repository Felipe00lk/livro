const botao = document.getElementById("passar");
const paginaDireita = document.getElementById("paginaDireita");

botao.addEventListener("click", () => {
  paginaDireita.classList.toggle("virada");
});
S