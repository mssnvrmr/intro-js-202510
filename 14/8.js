const prompt = require('prompt-sync')();

const contador = 100;

const num1 = Number(prompt('Ingrese el primer número: '));
const num2 = Number(prompt('Ingrese el segundo número: '));

const esMultiploDe = (num1, num2) => {
  return num1 % num2 === 0;
}

const backEnd = (num1, num2) => {
  for (let i = 0; i < contador; i++) {
    if (esMultiploDe(i, num1)) {
      console.log('Back');
    } else if (esMultiploDe(i, num2)) {
      console.log('End');
    } else {
      console.log(i);
    }
  }
}

console.log(backEnd(num1, num2));