// Exemplo método charAt()
let ex1CharAt = "hello world";
let primeiroCaractere = ex1CharAt.charAt(0);

console.log(`O primeiro caractere de "${ex1CharAt}" string é: ${primeiroCaractere}`);

console.log("");

// Exemplo método charCodeAt()
let ex1CharCodeAt = "hello world";
let codigoCaractere = ex1CharCodeAt.charCodeAt(0);

console.log(codigoCaractere);

console.log("");

// Exemplo método codePointAt()
let ex1CodePointAt = "hello world";
let codigoPontoUnicode = ex1CodePointAt.codePointAt(0);

console.log(codigoPontoUnicode);

console.log("");

// Exemplo método at()
const nome = "Richard";
let terceiroCaractere = nome.at(2);

console.log(`O terceiro caractere do nome Richard é: ${terceiroCaractere}`);

console.log("");

// Utilizando [] para acessar "itens" em uma lista/array
let fruta = "Morango";
let letraM  = fruta[0];

console.log(`A primeira letra da palavra morango é: ${letraM}`);

console.log("");

// Exemplo do método concat()
let texto1 = "Olá";
let texto2 = "SP05";
let textoConcatenado = texto1.concat(", ", texto2);

console.log(textoConcatenado);

console.log("");

// Exemplo do método slice()
let stringFrutas = "Maçã, Banana, Laranja";
let frutaUnica = stringFrutas.slice(6);

console.log(frutaUnica);

// let frutasString = new String(stringFrutas);
// console.log(frutasString);

console.log("");

// Exemplo do método substring()
let stringFrutas2 = "Maçã, Banana, Laranja";
let frutaUnica2 = stringFrutas2.substring(14, 21);

console.log(frutaUnica2);

console.log("");

// Exemplo do método substr()
let stringFrutas3 = "Maçã, Banana, Laranja";
let frutaUnica3 = stringFrutas3.substr(0, 4);

console.log(frutaUnica3);

console.log("");

// Exemplo do método toLowerCase() e toUpperCase()
let primeiroNome = "Richard";
let segundoNome = "Cesar";
let nomeCompleto = primeiroNome.concat(" ", segundoNome);

let nomeCompletoLowerCase = nomeCompleto.toLowerCase();
let nomeCompletoUpperCase = nomeCompleto.toUpperCase();

console.log(nomeCompletoLowerCase);
console.log(nomeCompletoUpperCase);

console.log("");

// Exemplo do método isWellFormed()
let helloWorld1 = "Hello World!";
let helloWorld2 = "Hello World \uD800";

console.log(helloWorld1.isWellFormed());
console.log(helloWorld2.isWellFormed());

console.log("");

// Exemplo do método trim(), trimStart() e trimEnd()
let textoComEspaco = "     SP05     ";

let textoSemEspaco = textoComEspaco.trim();

let textoSemEspacoInicial = textoComEspaco.trimStart();

let textoSemEspacoFinal = textoComEspaco.trimEnd();

console.log(textoComEspaco);
console.log(textoSemEspaco);
console.log(textoSemEspacoInicial);
console.log(textoSemEspacoFinal);

console.log("");

// Exemplos dos métodos padStart() e padEnd()
let textoSemPad = "SP05";

let textoPadInicial = textoSemPad.padStart(8, "-");
let textoPadFinal = textoSemPad.padEnd(8, "-");

console.log(textoPadInicial);
console.log(textoPadFinal);

console.log("");

// Exemplo do método repeat()
let textoSemRepeat = "Olá, SP05!";

let textoComRepeat = textoSemRepeat.repeat(3);

console.log(textoComRepeat);

console.log("");

// Exemplo do método replace()
let textoSemReplace = "Somente o amor coletivo gera união.";
let textoComReplace = textoSemReplace.replace("o amor coletivo", "a dor coletiva");

console.log(textoSemReplace);
console.log(textoComReplace);

console.log("");

// Exemplo do método replaceAll()
let textoReplaceAll = "Eu amo motos. Motos são muito legais. Motos são interessantes.";

textoReplaceAll = textoReplaceAll.replaceAll("Motos", "Carros");
textoReplaceAll = textoReplaceAll.replaceAll("motos", "carros");

console.log(textoReplaceAll);

console.log("");

// Exemplo do método split()
let textoSemSplit = "Bebam água!";

const arrayTextoComSplit = textoSemSplit.split("");
const arrayTextoComSplit2 = textoSemSplit.split(" ");

console.log(arrayTextoComSplit);
console.log(arrayTextoComSplit2);








 