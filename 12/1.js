const prompt = require('prompt-sync')();

let res = 0;
let total = 0
while (res >= 0) {
  res = Number(prompt('Ingrese un número: '));

  if (res > 0) {
    total += res;
  }
}

console.log(`El total de los números ingresados es ${total}`);