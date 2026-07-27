// Exercício 10: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("Idade em dias");

let anosIdade = parseInt(prompt("Informe quantos anos completos você tem: "));
let mesesIdade = parseInt(prompt("Informe quantos meses se passaram desde o seu último aniversário: "));
let diasIdade = parseInt(prompt("Informe quantos dias se passaram desde que você completou mais um mês após seu aniversário: "));

let anosEmDias = anosIdade * 365;
let mesesEmDias = mesesIdade * 30;

let idadeEmDias = anosEmDias + mesesEmDias + diasIdade;

alert(`A sua idade em dias é de: ${idadeEmDias} dias.`);

