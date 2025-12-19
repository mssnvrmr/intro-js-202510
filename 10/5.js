const prompt = require('prompt-sync')();

const primerNumero = 10;
const segundoNumero = 20;

const resultadoSuma = primerNumero + segundoNumero;
const resultadoResta = primerNumero - segundoNumero;
const resultadoMultiplicacion = primerNumero * segundoNumero;
const resultadoDivision = primerNumero / segundoNumero;

console.log(`Resultado de la suma: ${resultadoSuma}`);
console.log(`Resultado de la resta: ${resultadoResta}`);
console.log(`Resultado de la multiplicacion: ${resultadoMultiplicacion}`);
console.log(`Resultado de la division: ${resultadoDivision}`);