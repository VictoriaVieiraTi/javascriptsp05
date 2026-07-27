// Exercício 8: Calcule a área de um trapézio de acordo com os dados informados pelo usuário.

alert("Área de trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio: "));

let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio: "));

let alturaTrapezio = parseFloat(prompt("Informe o valor da altura do trapézio: "));

let areaTrapezio = (baseMaior + baseMenor) * alturaTrapezio / 2;

alert("A área total do trapézio é: " + areaTrapezio);

    