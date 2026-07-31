// Introdução a função
function primeiraFuncao() {
  return "Somente a dor coletiva gera união.";
}

let ativaFuncao = primeiraFuncao();

console.log(ativaFuncao);

console.log("");

function adicao(a, b) {
  return a + b;
}

let soma1 = adicao(5, 6);
let concatenacao1 = adicao("Olá, ", "SP05!");

console.log(soma1);
console.log(concatenacao1);

console.log("");

function nomeCompleto(primeiroNome, ultimoNome) {
  return primeiroNome + " " + ultimoNome;
}

console.log(nomeCompleto("Richard", "Oliveira"));