const prompt = require('prompt-sync')();

function concatenarNombres(nom, ape) {
  return nom + ' ' + ape;
}

const nombre = prompt('Ingrese el primer nombre: ');
const apellido = prompt('Ingrese el apellido: ');

console.log(`El nombre completo es ${concatenarNombres(nombre, apellido)}`);