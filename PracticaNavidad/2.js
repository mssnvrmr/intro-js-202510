const prompt = require('prompt-sync')();

const temperaturaActual = Number(prompt('Ingrese la temperatura actual: ')); 

console.log(`${temperaturaActual > 25 ? 'Usa ropa liviana. Hace calor.' : 'Usa ropa pesada. Hace frio.'}`);