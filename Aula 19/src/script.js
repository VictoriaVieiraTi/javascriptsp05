// Utilizando contrutor de objetos para instanciar novos objetos

function Pessoa(primeiroNome, ultimoNome, idade, corDeOlho) {
  this.primeiroNome = primeiroNome;
  this.ultimoNome = ultimoNome;
  this.idade = idade;
  this.corDeOlho = corDeOlho;
}

const pai = new Pessoa("Anael", "Souza", 67, "Castanho");

const filho = new Pessoa("Fabrício", "Araújo", 22, "Azul");

Pessoa.prototype.nacionalidade = "Brasileira";

console.log(pai);
console.log(filho);

console.log("");

console.log(pai.nacionalidade)

console.log("");

// Exemplo de método em construtor de objetos
function Cachorro(nome, raca, tempoDeVida) {
  this.nome = nome;
  this.raca = raca;
  this.tempoDeVida = tempoDeVida;
  this.latir = function() {
    return this.nome + " " + "latiu: au au.";
  };
}

const meuCachorro = new Cachorro("Snoop", "SRD", "10 meses");

const seuCachorro = new Cachorro("Nina", "Poodle", "3 anos");

seuCachorro.mudarTempoDeVida = function (novoTempoDeVida) {
  this.tempoDeVida = novoTempoDeVida;
};

console.log(meuCachorro);
console.log(meuCachorro.latir());

console.log("");

seuCachorro.mudarTempoDeVida("2 anos");

console.log(seuCachorro);








