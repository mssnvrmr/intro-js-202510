const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Ingrese un número: '));
const numero2 = Number(prompt('Ingrese un número: '));

if (numero1 > numero2) {
  console.log('El primer número es mayor que el segundo');
} else {
  console.log('El segundo número es mayor que el primero');
}