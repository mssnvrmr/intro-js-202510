const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingrese un número: '));

if (numero === 0) {
  console.log('El número es cero');
} else if (numero > 0) {
  console.log('El número es positivo');
} else {
  console.log('El número es negativo');
}