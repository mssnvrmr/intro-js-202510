const prompt = require('prompt-sync')();

const horaActual = -7;

const mostrarSaludo = (hora) => {
  return hora >= 0 && hora < 12 ? 'Buenos días' : hora >= 12 && hora < 18 ? 'Buenas tardes' : hora >= 18 && hora < 24 ? 'Buenas noches' : 'Hora inválida';
}

console.log(mostrarSaludo(horaActual));