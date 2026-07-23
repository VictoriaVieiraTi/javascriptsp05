// Exemplo do laço de repetição for
let frutas = ["Banana", "Maçã", "Limão", "Laranja"];
let frutasTamanho = frutas.length;

for (let contadora = 0; contadora < frutasTamanho; contadora++) {
  console.log("Fruta " + (+contadora + 1) + ": " + frutas[contadora]);
}
