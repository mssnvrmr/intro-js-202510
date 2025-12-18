const prompt = require('prompt-sync')();

let flag = true;

const determinarOrigen = (marca) => {
  switch (marca) {
    case '1':
    case '2':
    case '3':
      return 'Nacional';
    default:
      return 'Importado';
  }
}

while (flag) {
  console.log('--------------------------------');
  console.log('Lista de marcas de autos');
  console.log('1. Fiat');
  console.log('2. Ford');
  console.log('3. Chevrolet');
  console.log('4. Honda');
  console.log('5. Hyundai');
  console.log('6. Otro (escriba la marca)');
  console.log('0. Salir');
  
  let opcion = prompt('Escriba el numero que determine la marca de su auto: ');
  
  if (opcion === '0') {
    flag = false;
    console.log('Saliendo del programa...');
    break;
  }

  if (opcion === '6') {
    opcion = prompt('Escriba la marca de su auto: ');
  }
  
  console.log(`El auto es ${determinarOrigen(opcion)}`);
}
