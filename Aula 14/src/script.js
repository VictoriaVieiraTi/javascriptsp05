// Exemplo de variável recebendo função
function rodar(funcao) {
  return funcao();
} 

const dizerOla = function () {
  return "Olá, SP05!"
};

console.log( rodar(dizerOla) );

console.log("");

// Hoisting de funções
let resultadoFuncao = adicao(5, 6);

console.log(resultadoFuncao);

function adicao(a, b) {
  return a + b;
}

console.log("");

// Exemplo de arrow function
let multiplicar = (a, b) => (a * b);

let exibirResultado = multiplicar(6, 5);

console.log(exibirResultado);

console.log("");

let saudacao = () => "Olá, SP05!";

console.log(saudacao());

console.log("");

// Exemplo de arrow function com um parâmetro
let nome = "Richard";

let saudacaoNome = nm => "Olá, " + nm + "!";

console.log( saudacaoNome(nome) );




