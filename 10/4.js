const verdadero = true;
const texto = 'Aloha';
const numero = 123;
const nada = null;

console.log(`Operacion: ${numero} + 4 = ${numero + 4}\nConcatenacion: ${texto} + ' mundo' = ${texto + ' mundo'}`);

if (verdadero) {
  console.log('Booleano: Verdadero');
} else {
  console.log('Booleano: Falso');
}

if (nada === null) {
  console.log('Verificacion: si es Null');
} else {
  console.log('Verificacion: no es Null');
}