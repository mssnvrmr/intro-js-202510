const prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

const base = Number(prompt('Ingrese la base del triángulo: '));
const altura = Number(prompt('Ingrese la altura del triángulo: '));

console.log(`El área del triángulo es ${calcularAreaTriangulo(base, altura)}`);