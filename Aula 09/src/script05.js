// Exemplo de tamanho de string
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let tamanhoString = string.length;

console.log("O comprimento da string é: " + tamanhoString);

console.log("");

// Exemplos de caracteres de escape
let ex1CaractereEscape = "Somente a dor \"coletiva\" gera união.";
console.log(ex1CaractereEscape);

console.log("");

let ex2CaractereEscape = 'Somente a \'dor\' coletiva gera união.';
console.log(ex2CaractereEscape);

console.log("");

let ex3CaractereEscape = "Inserindo barra invertida em uma string: \\";
console.log(ex3CaractereEscape);

console.log("");

// Exemplo de template string
let ex1TemplateString = 
`
  Somente a dor
  coletiva gera
  a união.
`;

console.log(ex1TemplateString);

console.log("");

// Exemplo de string como objeto
let ex1StringObjeto = new String("Olá, SP05!");

console.log(ex1StringObjeto);

console.log("");

// Exemplo de interpolação de string
let primeiroNome = "Richard";
let segundoNome = "Cesar";

let boasVindas = `Bem-vindo ${primeiroNome} ${segundoNome}!`;

console.log(boasVindas);




