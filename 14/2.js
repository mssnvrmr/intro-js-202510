const prompt = require('prompt-sync')();

const cantidadNotas = 5;
let notas = [];

for (let i = 0; i < cantidadNotas; i++) {
  notas.push(Number(prompt(`Ingrese la nota ${i + 1}? `)));
}

const promedio = notas.reduce((acc, curr) => acc + curr, 0) / cantidadNotas;

console.log(`El promedio de las notas es ${promedio}`);