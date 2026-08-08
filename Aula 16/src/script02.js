// Acessando elemento do HTML com o JavaScript
const meuH3 = document.getElementById("ex1");

meuH3.innerHTML = "Exemplo de acesso ao elemento";

console.log(meuH3);

console.log("");

// Pegando elemento pelo nome da tag getElementByTagName()
const elemento = document.getElementsByTagName("p");

console.log(elemento[0]);

console.log("");

// Pegando elemento pelo nome da classe getElementsByClassName()
const elemento2 = document.getElementsByClassName("ex3");

console.log(elemento2[0]);

console.log("");

// Pegando elemento pelo seletor querySelector()
const elemento3 = document.querySelector(".ex4");
const elemento4 = document.querySelector("#ex5");

console.log(elemento3);
console.log(elemento4);

console.log("");

// Pegando todos os elementos que possuírem o mesmo seletor querySelectorAll()
const elemento5 = document.querySelectorAll(".ex6");

console.log(elemento5[1]);

console.log("");

// Alterando conteúdo de elemento com a propriedade innerHTML
const elemento6 = document.querySelector(".ex7");

elemento6.innerHTML = "Olá, SP05!";