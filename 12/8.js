const matriz = [];
let contador = 1;

for (let i = 0; i < 10; i++) {
  const fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(contador);
    contador++;
  }
  matriz.push(fila);
}

function sumarRojo(matriz) {
  let contador = 0;
  let suma = 0;
  for (let r = 0; r < matriz.length; r++) {
    for (let c = 0; c < matriz[r].length; c++) {
      if (c === contador) {
        suma += matriz[r][c];
      }
    }
    contador++;
  }
  return suma;
}

function sumarVerde(matriz) {
  let contador = 9;
  let suma = 0;
  for (let r = 0; r < matriz.length; r++) {
    for (let c = 0; c < matriz[r].length; c++) {
      if (c === contador) {
        suma += matriz[r][c];
      }
    }
    contador--;
  }
  return suma;
}

console.log(`Suma roja: ${sumarRojo(matriz)}`);
console.log(`Suma verde: ${sumarVerde(matriz)}`);