const prompt = require('prompt-sync')();

let contadorImpares = 0;
const res = Number(prompt('Ingrese un número: '));

for (let i = 0; i < res; i++) {
  if (i % 2 !== 0) {
    contadorImpares++;
  }
}

console.log(`Se encontraron ${contadorImpares} números impares`);