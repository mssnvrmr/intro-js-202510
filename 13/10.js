const prompt = require('prompt-sync')();

function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

const numero = Number(prompt('Ingrese un número para calcular su factorial: '));

console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`);
