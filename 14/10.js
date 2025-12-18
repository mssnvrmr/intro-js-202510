const prompt = require('prompt-sync')();

const floresArray = ['Rosa', 'Tulipan', 'Margarita', 'Girasol', 'Lirio', 'Jacinto', 'Iris', 'Narciso', 'Amapola', 'Calendula'];

let floresFavoritas = [, , ,];

const preguntas = 5;

const askQuestions = () => {
  let contador = 0;

  for (let i = 0; i < preguntas; i++) {
    const indice = Math.floor(Math.random() * floresArray.length);
    const respuesta = prompt(`${i + 1}. ¿Te gusta la flor ${floresArray[indice]}? (s/n)?`);

    if (floresFavoritas.includes(floresArray[indice]) && respuesta === 's') {
      console.log(`¡Es verdad! Tu flor favorita es ${floresArray[indice]}`);
      contador++;
    } else if (floresFavoritas.includes(floresArray[indice]) && respuesta === 'n') {
      console.log(`¡Miente! Te gusta ${floresArray[indice]}`);
      contador++;
    } else if (!floresFavoritas.includes(floresArray[indice]) && respuesta === 'n') {
      console.log(`¡Es verdad! No te gusta ${floresArray[indice]}`);
    } else if (!floresFavoritas.includes(floresArray[indice]) && respuesta === 's') {
      console.log(`¡Miente! Te gusta ${floresArray[indice]}`);
    }
  }
  console.log(`Encontramos ${contador} flores que te gustan.`);
}

for (let i = 0; i < floresFavoritas.length; i++) {
  floresFavoritas[i] = prompt(`Escribe el nombre de tu flor favorita #${i + 1}: `);
}

askQuestions();