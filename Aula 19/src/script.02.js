// Array global
const frutas = ["Banana", "Maçã", "Melão", "Jabuticaba"];

// Utilizando o método at()
console.log(frutas);

let exMetodoAt = frutas.at(2);

console.log(exMetodoAt);

console.log("");

// Utilizando o método join()
let exMetodoJoin = frutas.join(" | ");

console.log(exMetodoJoin);

console.log("");

// Utilizando o método pop()
console.log(frutas);

let exMetodoPop = frutas.pop();

console.log(frutas);

console.log("");

// Utilizando o método push()
console.log(frutas);

let exMetodoPush = frutas.push("Laranja");

console.log(frutas);

console.log("");

// Uitlizando o método shift()
let exMetodoShift = frutas.shift();

console.log(exMetodoShift);

console.log(frutas);

console.log("");

// Utilizando o método unshift()
frutas.unshift("Melancia");

console.log(frutas);

console.log("");

// Utilizando o método concat()
const novasFrutas = ["Uva", "Pêra", "Carambola", "Pêssego"];

const minhasFrutas = frutas.concat(novasFrutas);

console.log(minhasFrutas);

console.log("");

// Utilizando o método copyWithin()
minhasFrutas.copyWithin(2, 0);

console.log(minhasFrutas);

console.log("");

// Utilizando o método flat()
const matriz = [[1, 2], [3, 4], [5, 6]];

console.log(matriz);

const arraySimples = matriz.flat();

console.log(arraySimples);

console.log("");

// Utilizando o método flatMap()
const novoArray = arraySimples.flatMap((item) => { return [item, item * 10] });

console.log(novoArray);

console.log("");

// Utilizando o método splice()
console.log(frutas);

let itensRemovidos = frutas.splice(1, 2, "Toranja", "Tangerina");

console.log(frutas);
console.log(itensRemovidos);

frutas.splice(1, 1);

console.log(frutas);

console.log("");

// Utilizando o método toSpliced()
const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];

let exMetodoToSpliced = meses.toSpliced(0, 2);

console.log(meses);
console.log(exMetodoToSpliced);

console.log("");

// Utilizando o método slice()
const novoMeses = meses.slice(1);

console.log(novoMeses);
















