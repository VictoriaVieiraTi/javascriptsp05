// Exemplo de else (senão)

const hora = new Date().getHours();
let saudacao;

if (hora < 18) {
  saudacao = "Bom dia!";
} else {
  saudacao = "Boa noite!";
}

console.log(saudacao);

console.log("");

// Exemplo de else if (senão se)
let tempo = 21;
let saudacao2;

if (tempo < 10) {
  saudacao2 = "Bom dia!";
} else if (tempo < 18) {
  saudacao2 = "Boa tarde!";
} else {
  saudacao2 = "Boa noite!";
}

console.log(saudacao2);

console.log("");

// Exemplo de if ternário (condição lógica ternária)
let idade = 56;

let texto = (idade < 18) ? "Você é menor de idade." : "Você é maior de idade.";

console.log(texto);
