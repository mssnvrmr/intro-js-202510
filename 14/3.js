const prompt = require('prompt-sync')();

const edad = Number(prompt('¿Cuál es su edad? '));

const clasificarEdad = (edad) => {
  switch (true) {
    case edad > 0 && edad <= 13:
      return 'Niño';
    case edad > 13 && edad < 18:
      return 'Adolescente';
    case edad >= 18 && edad < 65:
      return 'Adulto';
    case edad >= 65:
      return 'Anciano';
    default:
      return 'Ser Inexistente';
  }
}

console.log(`Usted es un ${clasificarEdad(edad)}`);