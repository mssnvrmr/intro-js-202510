const saludoGlobal = 'Hola desde el scope global';

function monstrarMensaje() {
  const saludoLocal = 'Hola desde el scope local';
  console.log(saludoLocal);
  console.log(saludoGlobal);
}

monstrarMensaje();