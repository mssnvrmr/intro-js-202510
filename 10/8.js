const prompt = require('prompt-sync')();

const celsius = prompt('Ingrese la temperatura en grados Celsius: ');

console.log(`${parseFloat(celsius)} grados Celsius son ${parseFloat(celsius) * 9/5 + 32} grados Fahrenheit`);