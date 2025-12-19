let num1 = 5;
let num2 = 10;
let temporal;

console.log(`numero 1: ${num1}\nnumero 2: ${num2}`);

temporal = num1;
num1 = num2;
num2 = temporal;

console.log(`numero 1: ${num1}\nnumero 2: ${num2}`);