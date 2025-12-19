const prompt = require('prompt-sync')();

const peso = prompt('Ingrese su peso en kg: ');
const altura = prompt('Ingrese su altura en m: ');

console.log(`IMC: ${parseFloat(peso) / (parseFloat(altura) ** 2)}`);