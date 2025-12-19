const frase = "Los gatos son geniales";
const encontrar = "gatos";

const palabraEncontrada = frase.slice(frase.indexOf(encontrar), frase.indexOf(encontrar) + encontrar.length);

console.log(palabraEncontrada);
