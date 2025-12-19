const prompt = require('prompt-sync')();

const presupuesto = 5000.32 

const precioRegalo = Number(prompt('Ingrese el precio del regalo: '));

if (precioRegalo > presupuesto) {
  console.log('Se sale del presupuesto.');
} else {
  console.log('¡Comprado!');
}