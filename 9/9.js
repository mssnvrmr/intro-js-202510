const prompt = require('prompt-sync')();

const pi = 3.14159;

const radio = Number(prompt('Ingrese el radio del círculo: '));

console.log(`El área del círculo es ${pi * (radio ** 2)}`);