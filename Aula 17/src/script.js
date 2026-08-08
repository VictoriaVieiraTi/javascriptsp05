// Alterando valor de atributo com o JavaScript
const elemento = document.querySelector(".ex1");

elemento.src = "ferrari.jpg";

// Exemplo de conteúdo dinâmico em elemento do HTML
const elemento2 = document.querySelector(".ex2");

elemento2.innerHTML = "Data de agora: " + Date();