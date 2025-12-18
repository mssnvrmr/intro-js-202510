const prompt = require('prompt-sync')();

console.log('Lados del triángulo');

const lado1 = Number(prompt('Ingrese el primer lado: '));
const lado2 = Number(prompt('Ingrese el segundo lado: '));
const lado3 = Number(prompt('Ingrese el tercer lado: '));

if (lado1 === lado2 && lado2 === lado3) {
  console.log('El triángulo es equilátero');
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log('El triángulo es isósceles');
} else {
  console.log('El triángulo es escaleno');
}