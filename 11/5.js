const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Ingrese el primer numero: '));
const numero2 = Number(prompt('Ingrese el segundo numero: '));


if (numero1 > numero2) {
  console.log('El primer numero debe ser menor que el segundo');
} else {
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
      console.log(`${i}`);
    }
  }
}
