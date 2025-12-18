const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingrese un número positivo para hacer un bucle: '));

for (let i = 0; i < numero; i++) {
  console.log(i+1);
}