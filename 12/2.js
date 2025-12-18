const prompt = require('prompt-sync')();

const contrasenia = '1234';
let res;

do {
  res = prompt('Ingrese la contraseña: ');
} while(res !== contrasenia);

console.log('Contraseña correcta');