const prompt = require('prompt-sync')();

const productos = Number(prompt('¿Cuántos productos compró? '));
let preciosProductos = [];

for (let i = 0; i < productos; i++) {
  preciosProductos.push(Number(prompt(`¿Cuál es el precio del producto #${i + 1}? `)));
}

const total = preciosProductos.reduce((acc, curr) => acc + curr, 0);

const calcularDescuento = () => {
  switch (true) {
    case total >= 1000:
      return total * 0.1;
    case total >= 500:
      return total * 0.05;
    default:
      return 0;
  }
};

console.log(`El precio total de todos los productos es ${total}.`);
if (calcularDescuento() > 0) {
  console.log(`Usted tiene un descuento de ${calcularDescuento()}, haciendo el total a pagar: ${total - calcularDescuento()}`);
} else {
  console.log('Usted no es elegible para un descuento.');
}