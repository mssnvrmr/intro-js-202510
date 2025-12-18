const prompt = require('prompt-sync')();

const counter = 100;

const num1 = Number(prompt('Ingrese el primer numero: '));
const num2 = Number(prompt('Ingrese el segundo numero: '));

const isMultipleOf = (num1, num2) => {
  return num1 % num2 === 0;
}

const backEnd = (num1, num2) => {
  for (let i = 0; i < counter; i++) {
    if (isMultipleOf(i, num1)) {
      console.log('Back');
    } else if (isMultipleOf(i, num2)) {
      console.log('End');
    } else {
      console.log(i);
    }
  }
}

console.log(backEnd(num1, num2));