const prompt = require('prompt-sync')();

let nombres = [, , , , ,];

for (let i = 0; i < nombres.length; i++) {
  nombres[i] = prompt(`Ingrese el nombre #${i + 1}: `);
}

const buscarNombre = prompt('Ingrese el nombre a buscar: ');

if (nombres.includes(buscarNombre)) {
  console.log(`El nombre ${buscarNombre} se encuentra en la lista`);
} else {
  console.log(`El nombre ${buscarNombre} no se encuentra en la lista`);
}