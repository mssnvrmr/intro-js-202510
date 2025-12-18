const prompt = require('prompt-sync')();

const valor = Number(prompt('¿Cuál es el valor del producto? '));
const impuesto = Number(prompt('¿Cuál es la tasa de impuestos? '));

const calcularTotal = (valor, impuesto) => {
    return valor + (valor * (impuesto / 100));
};

console.log(`El precio total con impuestos es ${calcularTotal(valor, impuesto)}`);
