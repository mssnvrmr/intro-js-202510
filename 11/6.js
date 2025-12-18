const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingrese un número: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}