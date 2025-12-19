const prompt = require('prompt-sync')();

const nombre = prompt('Ingrese su nombre: ');
const edad = Number(prompt('Ingrese su edad: '));
const peso = Number(prompt('Ingrese su peso en kg: '));

console.log(`Su informacion es:\nNombre: ${nombre}\nEdad: ${edad}\nPeso: ${peso} kg`);