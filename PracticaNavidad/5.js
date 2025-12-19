const prompt = require('prompt-sync')();

const regaloSorpresa = "Perfume";

let adivinarRegalo = '';

while (adivinarRegalo !== regaloSorpresa) {
  adivinarRegalo = prompt('Adivina el regalo sorpresa: ');

  if (adivinarRegalo === regaloSorpresa) {
    console.log('¡Felicitaciones! Adivinaste el regalo sorpresa');
    break;
  }

  console.log('Fallaste');
}