// Operador lógico && (and)
let a = 10;
let b = 4;

let operadorLogicoEx1 = (a > 2 && b < 10);
let operadorLogicoEx2 = (a > 2 && b > 10);

console.log(operadorLogicoEx1);
console.log(operadorLogicoEx2);

console.log("");

// Operador lógico || (ou)
let c = 3;
let d = -55;

let operadorLogicoEx3 = (c > 0 || d > 0);

console.log(operadorLogicoEx3);

console.log("");

// Operador lógico ! (not)
let e = 8;
let f = 12;

let operadorLogicoEx4 = (e == f);
let operadorLogicoEx5 = !(e == f);


console.log(operadorLogicoEx4);
console.log(operadorLogicoEx5);

console.log("");

// Operador lógico ?? (Coalescência nula)
let g = null;
let h = "texto";

let operadorLogicoEx6 = g ?? h;

console.log(operadorLogicoEx6);



