const frase = "Javascript es un lenguaje poderoso y versatil";

const crearArray = (frase) => frase.split(" ");
const masDeCinco = (array) => array.filter(palabra => palabra.length > 5);
const manosDeCinco = (array) => array.filter(palabra => palabra.length <= 5);

console.log(masDeCinco(crearArray(frase)));
console.log(manosDeCinco(crearArray(frase)));