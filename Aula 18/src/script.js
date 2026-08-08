// Exemplo de evento com addEventListener()
const botao1 = document.querySelector("#ex2-btn");
const paragrafo1 = document.querySelector("#ex2-p");

function mostrarData() {
  paragrafo1.innerHTML = Date();
}

botao1.addEventListener("click", mostrarData);

// Exemplo de evento com mouseover e mouseout
const ex3Div = document.querySelector("#ex3-div");
const ex3P = document.querySelector("#ex3-p");

ex3Div.addEventListener("mouseover", () => {
  ex3P.innerHTML = "O mouse está sobre a caixa.";
  ex3P.style.color = "green";
});

ex3Div.addEventListener("mouseout", () => {
  ex3P.innerHTML = "O mouse está fora da caixa.";
  ex3P.style.color = "darkred";
});

// Exemplo de evento mousemove em página
const ex4P = document.querySelector("#ex4-p");

document.addEventListener("mousemove", function (evento) {
  ex4P.innerHTML = `
  X: ${evento.clientX}
  <br>
  Y: ${evento.clientY}
  `;
});

// Exemplo de evento keydown
const campo = document.querySelector("#ex5-campo");
const ex5P = document.querySelector("#ex5-p");

campo.addEventListener("keydown", function (evento) {
  ex5P.innerHTML = `A tecla informada no campo foi: ${evento.key}`;
});

// Exemplo de remoção de evento com o removeEventListener()
const btnAdicionar = document.querySelector("#adicionar");
const btnRemover = document.querySelector("#remover");
const btnTestar = document.querySelector("#testar");
const ex6P = document.querySelector("#ex6-p");

function adicionarTexto() {
  ex6P.innerHTML += "SP05 ";
}

btnAdicionar.addEventListener("click", function() {
  btnTestar.addEventListener("click", adicionarTexto);
});

btnRemover.addEventListener("click", function() {
  btnTestar.removeEventListener("click", adicionarTexto);
});

// Exemplo de bloqueio em evento com o preventDefault()
const link = document.querySelector("#ex7-link");
const ex7P = document.querySelector("#ex7-p");

link.addEventListener("click", function(evento) {
  evento.preventDefault();
  ex7P.innerHTML = "O link foi bloqueado.";
});












