//Llamado a la libreria prompt-sync
const prompt = require('prompt-sync')();

//Ingreso de datos por parte del usuario
const numero = Number(prompt('Ingrese un número para determinar si es par o impar: '));

/* 
  Condicion para determinar si el número es par o impar.
  Se evalua si el numero se puede divir entre 2, si es asi, es par, si no, es impar.
*/
if (numero % 2 === 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}