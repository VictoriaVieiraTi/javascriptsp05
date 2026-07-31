// Exemplo do método indexOf()
let texto = "Por favor localize a palavra 'localize' na string";

let localizeIndexOf = texto.indexOf("localize");

console.log(localizeIndexOf);

console.log("");

// Exemplo do método lastIndexOf()
let texto2 = "Por favor localize a palavra 'localize' na string";

let localizeLastIndexOf = texto2.lastIndexOf("localize");

console.log(localizeLastIndexOf);

console.log("");

// Exemplo do método search()
let texto3 = "Somente a dor coletiva gera união.";

let texto3Search = texto3.search("união");

console.log(texto3Search);

console.log("");

// Exemplo método match()
let texto4 = "Nasceu o sol, no mar o azol";

// let texto4Match = texto4.match("ol");
let texto4Match = texto4.match(/ol/g);

console.log(texto4Match);

console.log("");

// Exemplo método matchAll()
let texto5 = "Eu amo carros. Carros são muito legais. Carros são úteis";

let texto5MatchAll = texto5.matchAll("Carros");

console.log(Array.from(texto5MatchAll));

console.log("");

// Exemplo método includes()
let texto6 = "Somente a dor coletiva gera união";

let texto6Includes = texto6.includes("coletiva");

console.log(texto6Includes);

console.log("");

// Exemplo método startsWith()
let texto7 = "Ser ou não ser? Eis a questão.";

let texto7StartsWith = texto7.startsWith("Ser");

console.log(texto7StartsWith);

console.log("");

// Exemplo método endsWith()
let texto8 = "Com grandes poderes vem grandes responsabilidades";

let texto8EndsWith = texto8.endsWith("responsabilidades");

console.log(texto8EndsWith);


alert("ANAEL");



