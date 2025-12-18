const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Ingrese el primer número: '));
const numero2 = Number(prompt('Ingrese el segundo número: '));
console.log(`Operaciones disponibles: \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. Division`);
const operacion = Number(prompt('Ingrese el número de la operación a realizar: '));

switch (operacion) {
  case 1:
    console.log(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
    break;
  case 2:
    console.log(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`);
    break;
  case 3:
    console.log(`La multiplicacion de ${numero1} y ${numero2} es ${numero1 * numero2}`);
    break;
  case 4:
    console.log(`La division de ${numero1} y ${numero2} es ${numero1 / numero2}`);
    break;
  default:
    console.log('Operación no válida');
}