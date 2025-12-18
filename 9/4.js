const prompt = require('prompt-sync')();
const nombre = 'Veronica';

const res = prompt('Ingrese su nombre: ');

if (res === nombre) {
  console.log('Bienvenida Veronica');
} else {
  console.log('Nombre incorrecto');
}