const prompt = require('prompt-sync')();

const intentos = 3;
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log('Adivina el numero secreto');

for (let i = 0; i < intentos; i++) {
  const numero = Number(prompt(`Intento #${i+1}: `));
  if (numero === numeroSecreto) {
    console.log('¡Felicitaciones! Adivinaste el numero secreto');
    break;
  } else {
    console.log('Fallaste');
  }
}

console.log(`El numero secreto era ${numeroSecreto}`);