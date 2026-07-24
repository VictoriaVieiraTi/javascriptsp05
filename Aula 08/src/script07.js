// Exercício 6: Calcule a área de um quadrado de acordo com os dados informados pelo usuário.

alert("Área de quadrado");

let ladoQuadrado = parseFloat(prompt("Informe o valor de um lado do quadrado: "));

// let areaQuadrado = ladoQuadrado * ladoQuadrado;
// let areaQuadrado = ladoQuadrado ** 2;
let areaQuadrado = Math.pow(ladoQuadrado, 2);

alert("A área total do quadrado é: " + areaQuadrado);
