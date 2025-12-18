const prompt = require('prompt-sync')();

const modelos = ['Fiat', 'Ford', 'Chevrolet', 'Honda', 'Hyundai', 'Volkswagen', 'Nissan', 'Toyota', 'Volvo', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Nissan', 'Toyota', 'Volvo', 'Mercedes-Benz', 'Audi', 'BMW', 'Fiat'];

const ultimaAparicionModeloAuto = (modelo) => {
  const ultimaAparicion = modelos.lastIndexOf(modelo);
  if (ultimaAparicion === -1) {
    return 'Modelo no encontrado';
  }
  return ultimaAparicion + 1;
}

const modelo = prompt('Ingrese el modelo de auto a buscar: ');

console.log(ultimaAparicionModeloAuto(modelo));