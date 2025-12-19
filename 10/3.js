const prompt = require('prompt-sync')();

const edadMinima = 18;
const edadMaxima = 99;

const edad = prompt('Ingrese su edad: ');

if (parseInt(edad) >= edadMinima && parseInt(edad) <= edadMaxima) {
  console.log('Usted puede participar en la encuesta');
} else {
  console.log('Usted no puede participar en la encuesta');
}