const prompt = require('prompt-sync')();

function calcularBono(monto) {
  const porcentajeBono = 10;
  return monto * (porcentajeBono / 100);
}

const sueldo = Number(prompt('Ingrese el sueldo del empleado: '));

console.log(`El monto del bono navideño es de: ${calcularBono(sueldo)}`);