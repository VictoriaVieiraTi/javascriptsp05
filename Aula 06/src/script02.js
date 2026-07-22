// Exemplo de switch (escolha caso)

let diaSemana;
let data = new Date().getDay();

switch (data) {
  case 0:
    diaSemana = "Domingo";
    break;
  
  case 1: 
    diaSemana = "Segunda-feira";
    break;

  case 2:
    diaSemana = "Terça-feira";
    break;

  case 3:
    diaSemana = "Quarta-feira";
    break;

  case 4:
    diaSemana = "Quinta-feira";
    break;

  case 5: 
    diaSemana = "Sexta-feira";
    break;

  case 6:
    diaSemana = "Sábado";
    break;
}

console.log("Hoje é: " + diaSemana);

console.log("");

let diaSemanaEx2;
let dataEx2 = new Date().getDay();

switch (dataEx2) {
  case 6:
    diaSemanaEx2 = "Sábado";
    break;

  case 3:
    diaSemanaEx2 = "Quarta-feira";
    break;

  default:
    diaSemanaEx2 = "O dia procurado não foi encontrado.";
}

console.log(diaSemanaEx2);
