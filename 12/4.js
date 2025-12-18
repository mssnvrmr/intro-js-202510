const prompt = require('prompt-sync')();

let notas = [, , , , ,];

for (let i = 0; i < notas.length; i++) {
  notas[i] = Number(prompt(`Ingrese la nota #${i + 1}: `));
}

console.log(`Las notas son: ${notas}`);
