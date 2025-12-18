const prompt = require('prompt-sync')();

const semanas = 4;
const dias = 7;
let gastos = [];


for (let s = 0; s < semanas; s++) {
  let gastosSemana = [];
  for (let d = 0; d < dias; d++) {
    gastosSemana.push(Number(prompt(`Ingrese el gasto del día ${d + 1} de la semana ${s + 1}: `)));
  }
  gastos.push(gastosSemana);
}

function calcularGastoTotal(mes) {
  let gastoTotal = 0;
  for (let s = 0; s < semanas; s++) {
    for (let d = 0; d < dias; d++) {
      gastoTotal += mes[s][d];
    }
  }
  return gastoTotal;
}

function calcularSemanaConMasGastos(mes) {
  let semanaConMasGastos = 0;
  let gastoTotal = 0;
  for (let s = 0; s < semanas; s++) {
    let gastoSemana = 0;
    for (let d = 0; d < dias; d++) {
      gastoSemana += mes[s][d];
    }
    if (gastoSemana > gastoTotal) {
      gastoTotal = gastoSemana;
      semanaConMasGastos = s;
    }
  }
  return semanaConMasGastos;
}

console.log(`El gasto total es ${calcularGastoTotal(gastos)}`);
console.log(`La semana con mas gastos es ${calcularSemanaConMasGastos(gastos)}`);