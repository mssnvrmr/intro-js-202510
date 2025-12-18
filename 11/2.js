const prompt = require('prompt-sync')();

console.log('Semaforo');
console.log('a. Rojo \n b. Amarillo \n c. Verde');
const color = prompt('Ingrese una letra del menu: ');

if (color === 'a') {
  console.log('Alto, no puedes avanzar');
} else if (color === 'b') {
  console.log('Precaucion, preparate para detenerte');
} else if (color === 'c') {
  console.log('Avanzar con seguridad');
} else {
  console.log('Opcion no valida');
}