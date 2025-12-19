const productos =["Laptop", "Teclado", "Mouse", "Monitor"];

const comprobarExistencia = (item) => {
  return productos.includes(item) ? `El producto ${item} existe` : `El producto ${item} no existe`;
};

const agregarProducto = (item) => {
  productos.push(item);
  return `El producto ${item} se ha agregado al inventario`;
}

const eliminarProducto = () => {
  productos.shift();
  return 'El primer producto se ha eliminado del inventario';
}

const imprimirProductos = () => {
  return productos.join(", ");
}

console.log(agregarProducto("Impresora"));
console.log(comprobarExistencia("Tablet"));
console.log(eliminarProducto());
console.log(imprimirProductos());