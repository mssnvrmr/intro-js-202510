const prompt = require('prompt-sync')();

const value = Number(prompt('What is the product´s value? '));

const tax = Number(prompt('What is the tax rate? '));

const calculateTotal = (value, tax) => {
    return value + (value * (tax / 100));
};

console.log(`The price total with tax is ${calculateTotal(value, tax)}`);
