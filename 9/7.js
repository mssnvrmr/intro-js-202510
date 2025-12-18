const prompt = require('prompt-sync')();

const peso = Number(prompt('Ingrese su peso en kg: '));

console.log(`${peso} kg son ${peso * 2.20462} libras`);