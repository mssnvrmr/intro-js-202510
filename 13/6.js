const prompt = require('prompt-sync')();

const convertirHorasAMinutos = (horas) => {
  return horas * 60;
}

const horas = Number(prompt('Ingrese el número de horas: '));

console.log(`${horas} horas son ${convertirHorasAMinutos(horas)} minutos`);