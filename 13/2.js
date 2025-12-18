const prompt = require('prompt-sync')();

function encontrarMayor(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const num1 = Number(prompt('Ingrese el primer número: '));
const num2 = Number(prompt('Ingrese el segundo número: '));

console.log(`El número mayor es ${encontrarMayor(num1, num2)}`);