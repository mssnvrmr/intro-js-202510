const prompt = require('prompt-sync')();

const deportista = {
  nombre: 'Oyajitchi',
  energia: 100,
  experiencia: 0,
}

const entrenarHoras = (horas) => {
  deportista.energia -= (horas * 5);
  deportista.experiencia += (horas * 2);
}

while (deportista.energia > 0) {
  const horas = Number(prompt('¿Cuántas horas quieres entrenar? '));
  if (horas * 5 > deportista.energia) {
    console.log(`${deportista.nombre} solo tiene ${deportista.energia} de energia restante, siendo un máximo de ${deportista.energia / 5} horas disponibles para seguir entrenando.`);
    continue;
  }
  entrenarHoras(horas);
  console.log(`${deportista.nombre} ha entrenado ${horas} horas, ahora tiene ${deportista.energia} de energia restante y ${deportista.experiencia} de experiencia acumulada.`);
}
