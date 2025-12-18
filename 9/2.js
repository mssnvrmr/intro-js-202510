const prompt = require('prompt-sync')();

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 10;

const numero = Number(prompt('Ingrese un número: '));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log('El número está en el rango');
} else {
  console.log('El número no está en el rango');
}