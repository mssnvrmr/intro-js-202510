const prompt = require('prompt-sync')();

const contarHasta = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

const numero = Number(prompt('Ingrese un número hasta el cual desea contar: '));

contarHasta(numero);