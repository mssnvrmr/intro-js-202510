const prompt = require('prompt-sync')();

const num1 = Number(prompt('Ingrese el primer número: '));
const num2 = Number(prompt('Ingrese el segundo número: '));
const num3 = Number(prompt('Ingrese el tercer número: '));

if (num1 > num2 && num1 > num3) {
  console.log('El primer número es el mayor');
} else if (num2 > num1 && num2 > num3) {
  console.log('El segundo número es el mayor');
} else {
  console.log('El tercer número es el mayor');
}
