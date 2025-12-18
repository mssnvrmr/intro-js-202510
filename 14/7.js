const prompt = require('prompt-sync')();

const libro1 = {
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  anioPublicacion: 1943,
}

const libro2 = {
  titulo: '1984',
  autor: 'George Orwell',
  anioPublicacion: 1949,
}

const libros = [libro1, libro2];

const mostrarLibros = (libros) => {
  libros.forEach((libro, index) => {
    console.log(`Libro ${index + 1}`);
    console.log(`Título: ${libro.titulo}\nAutor: ${libro.autor}\nAño de publicación: ${libro.anioPublicacion}`);
    console.log('--------------------------------');
  });
}

mostrarLibros(libros);