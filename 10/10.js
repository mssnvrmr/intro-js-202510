const prompt = require('prompt-sync')();

const precio = prompt('Ingrese el precio del producto: ');
const descuento = prompt('Ingrese el porcentaje de descuento: ');

console.log(`Precio con descuento: ${parseFloat(precio) - (parseFloat(precio) * parseFloat(descuento) / 100)}`);