const prompt = require('prompt-sync')();

function esPar(numero) {
  return numero % 2 === 0;
}

const numero = Number(prompt('Ingrese un número: '));

console.log(`El número ${numero} es ${esPar(numero) ? 'par' : 'impar'}`);