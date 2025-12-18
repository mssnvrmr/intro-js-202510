const prompt = require('prompt-sync')();

const condicion1 = true;
const condicion2 = false;

const valor1 = prompt('Ingrese el primer valor (true o false): ');
const valor2 = prompt('Ingrese el segundo valor (true o false): ');

console.log(valor1 && condicion1);
console.log(valor2 && condicion2);
console.log(valor1 || condicion1);
console.log(valor2 || condicion2);
console.log(!valor1);
console.log(!valor2);