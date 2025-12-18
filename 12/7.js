const matriz = [];

for (let i = 0; i < 5; i++) {
  const fila = [];
  for (let j = 0; j < 5; j++) {
    fila.push(Math.floor(Math.random() * 100) + 1);
  }
  matriz.push(fila);
}

const sumarMatriz = (matriz) => {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
};

console.log('Matriz 5x5:');
matriz.forEach(fila => console.log(fila.join('\t')));

// Display the sum
console.log(`\nLa suma de todos los números es: ${sumarMatriz(matriz)}`);

