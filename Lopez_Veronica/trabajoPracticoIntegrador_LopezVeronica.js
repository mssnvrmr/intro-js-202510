// Llamado a la libreria prompt-sync
const prompt = require('prompt-sync')();

/* 
  Consigna 1) Estructura de datos
  A) array de objetos llamado libros que contenga 10 libros
*/
let libros = [
  {
    id: 1,
    titulo: '11/22/63',
    autor: 'Stephen King',
    anio: 2011,
    genero: 'Suspenso',
    disponible: false,
  }, {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    anio: 1949,
    genero: 'Ciencia ficción',
    disponible: false,
  }, {
    id: 3,
    titulo: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    anio: 1953,
    genero: 'Ciencia ficción',
    disponible: false,
  }, {
    id: 4,
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    anio: 1813,
    genero: 'Romance',
    disponible: false,
  }, {
    id: 5,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anio: 1967,
    genero: 'Novela',
    disponible: true,
  }, {
    id: 6,
    titulo: 'Los 101 dalmatas',
    autor: 'Dodie Smith',
    anio: 1986,
    genero: 'Ficción',
    disponible: false,
  }, {
    id: 7,
    titulo: 'El alquimista',
    autor: 'Paulo Coelho',
    anio: 1988,
    genero: 'Novela',
    disponible: false,
  }, {
    id: 8,
    titulo: 'El arte de la guerra',
    autor: 'Sun Tzu',
    anio: 500,
    genero: 'Estrategia',
    disponible: false,
  }, {
    id: 9,
    titulo: 'El gato negro',
    autor: 'Edgar Allan Poe',
    anio: 1843,
    genero: 'Terror',
    disponible: false,
  }, {
    id: 10,
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    anio: 2003,
    genero: 'Suspenso',
    disponible: false,
  }
];

/* 
  Consigna 1) Estructura de datos
  B) Array de objetos llamado usuarios que contenga 5 usuarios
*/
let usuarios = [
  {
    id: 1,
    nombre: 'Juan Perez',
    email: 'juan.perez@gmail.com',
    librosPrestados: [1, 4],
  },
  {
    id: 2,
    nombre: 'Maria Gomez',
    email: 'maria.gomez@gmail.com',
    librosPrestados: [2, 6],
  },
  {
    id: 3,
    nombre: 'Pedro Rodriguez',
    email: 'pedro.rodriguez@gmail.com',
    librosPrestados: [3, 8],
  },
  {
    id: 4,
    nombre: 'Ana Lopez',
    email: 'ana.lopez@gmail.com',
    librosPrestados: [9],
  },
  {
    id: 5,
    nombre: 'Carlos Rodriguez',
    email: 'carlos.rodriguez@gmail.com',
    librosPrestados: [7, 10],
  },
];

// Bandera para salir del programa
let salir = false;

/*
  Función auxiliar para Consigna 2, punto A.
  Función para validar la existencia de un libro.
  @param {Object} libroAVerificar - Objeto de libro a verificar
  @returns {boolean} - True si el libro existe, false si no existe
*/
const verificarExistenciaLibro = (libroAVerificar) => {
  /* 
    Itera por el array de libros para comparar cada libro con el libro que se está intentando agregar.
    Verifica que todos los atributos de libroAVerificar coincidan con un libro en el array.
  */
  return libros.some((libro) => {
    // Verificar que todos los atributos de libroAVerificar coincidan
    return Object.keys(libroAVerificar).every((key) => {
      // Para strings, comparar en minúsculas para evitar errores de mayúsculas/minúsculas
      if (typeof libroAVerificar[key] === 'string' && typeof libro[key] === 'string') {
        return libro[key].toLowerCase() === libroAVerificar[key].toLowerCase();
      }
      // Para otros tipos, comparación directa
      return libro[key] === libroAVerificar[key];
    });
  });
}

/*
  Función auxiliar para Consigna 2, punto A & Consigna 3, punto A.
  Función para generar un id único para un nuevo libro o usuario
  @param {Array} array - Array a revisar
  @returns {number} - ID único
*/
const generarId = (array) => {
  // Se obtiene el id más alto del array
  const idMaximo = Math.max(...array.map((item) => item.id));
  // Se retorna el id más alto + 1
  return idMaximo + 1;
}

/*
  Función auxiliar para Cosigna 2, punto A
  Función para procesar los datos de un libro
  @returns {string} - Mensaje de éxito o error
*/
const procesarLibro = () => {
  // Se imprimen los prompts para la toma de datos del nuevo libro
  console.log('\n**Datos del nuevo libro**\n');
  const titulo = prompt('Ingrese el título: ').trim();
  const autor = prompt('Ingrese el autor: ').trim();
  const anio = Number(prompt('Ingrese el año de publicación: ').trim());
  const genero = prompt('Ingrese el género: ').trim();
  // Verificar si el libro ya existe antes de agregarlo
  if (verificarExistenciaLibro({ titulo: titulo, autor: autor, anio: anio })) {
    return `\n**El libro ${titulo} que intenta ingresar ya existe**\n`;
  }
  // Pasar los datos procesados a la función para agregar el libro
  return agregarLibro(generarId(libros), titulo, autor, anio, genero);
}

/*
  Consigna 2) Funciones de gestión de libros
  A) Función para agregar un libro al arreglo de libros
  @param {number} id - ID del libro
  @param {string} titulo - Título del libro
  @param {string} autor - Autor del libro
  @param {number} anio - Año de publicación del libro
  @param {string} genero - Género del libro
  @returns {string} - Mensaje de éxito
*/
const agregarLibro = (id, titulo, autor, anio, genero) => {
  // Con los datos procesados, se crea un nuevo objeto libro para agregarlo al arreglo de libros.
  const libroNuevo = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true,
  }
  //Agegar el libro nuevo al arreglo de libros
  libros.push(libroNuevo);
  // Retornar un mensaje de éxito.
  return `\n**Libro ${libroNuevo.titulo} agregado correctamente**\n`;
}

/*
  Función auxiliar para Consigna 2, punto B
  Función para imprimir el menú de búsqueda por criterio
  @returns {void}
*/
const imprimirMenuBusquedaCriterio = () => {
  // Se inicializa una variable como null para limpiar el estado anterior y evitar errores.
  let opcion = null;
  // Bucle para iterar hasta que la opcion sea 0.
  do {
    console.log('\n*Criterios de búsqueda*\n');
    console.log('1. Por Id');
    console.log('2. Por título');
    console.log('3. Por autor');
    console.log('4. Por año de publicación');
    console.log('5. Por género');
    console.log('6. Si está disponible');
    console.log('7. Si no está disponible');
    console.log('0. Regresar al menú principal\n');
    // Se solicita al usuario que ingrese el número del criterio de búsqueda segun el menu impreso.
    const opcion = Number(prompt('Ingrese el número del criterio de búsqueda: '));
    // Switch para determinar la opcion seleccionada y retornar el mensaje correspondiente.
    switch (opcion) {
      case 1:
        return buscarLibro('id', Number(prompt('Ingrese el ID del libro a buscar: ').trim()));
      case 2:
        return buscarLibro('titulo', prompt('Ingrese el título del libro a buscar: ').trim().toLowerCase());
      case 3:
        return buscarLibro('autor', prompt('Ingrese el autor del libro a buscar: ').trim().toLowerCase());
      case 4:
        return buscarLibro('anio', Number(prompt('Ingrese el año de publicación del libro a buscar: ').trim()));
      case 5:
        return buscarLibro('genero', prompt('Ingrese el género del libro a buscar: ').trim().toLowerCase());
      case 6:
        return buscarLibro('disponible', true);
      case 7:
        return buscarLibro('disponible', false);
      case 0:
        return `\nRegresando al menú principal...\n`;
      default:
        return `\nOpción no válida\n`;
    }
  } while (opcion !== 0);
}

/*
  Consigna 2) Funciones de gestión de libros
  B) Función de búsqueda linear para buscar un libro mediante un criterio y un valor
  @param {string} criterio - Criterio de búsqueda
  @param {string} valor - Valor de búsqueda
  @returns {string} - Mensaje de éxito o error
*/
const buscarLibro = (criterio, valor) => {
  // Se inicializa un array vacío para almacenar los libros encontrados.
  let librosEncontrados = [];

  // Bucle para iterar por el array de libros.
  for (let i = 0; i < libros.length; i++) {
    const valorLibro = libros[i][criterio];
    // Condiciones para buscar el libro por disponibilidad
    if (criterio === 'disponible') {
      if (valorLibro === valor) {
        // Si el libro dentro del array bajo el criterio parametrizado coincide con el valor dado, entonces se guarda en el array de libros encontrados.
        librosEncontrados.push(libros[i]);
      }
    } else if (criterio === 'anio' || criterio === 'id') {
      // Para id y anio, se comparan como números
      if (Number(libros[i][criterio]) === Number(valor)) {
        // Si el libro dentro del array bajo el criterio parametrizado coincide con el valor dado, entonces se guarda en el array de libros encontrados.
        librosEncontrados.push(libros[i]);
      }
    } else {
      // Para otros criterios, se comparan como strings
      if (valorLibro && String(valorLibro).trim().toLowerCase() === String(valor).trim().toLowerCase()) {
        // Si el libro dentro del array bajo el criterio parametrizado coincide con el valor dado, entonces se guarda en el array de libros encontrados.
        librosEncontrados.push(libros[i]);
      }
    }
  }

  // Condiciones para imprimir un mensaje específico dependiendo de la cantidad de libros encontrados.
  if (librosEncontrados.length === 1) {
    return `\n**Libro encontrado:**\n${imprimirLibros(librosEncontrados)}\n`;
  } else if (librosEncontrados.length > 1) {
    return `\n**Libros encontrados:**\n${imprimirLibros(librosEncontrados)}\n`;
  }
  // Si no se encontró ningún libro, se retorna un mensaje de error.
  return `\n**No se encontró ningún libro con la información proporcionada**\n`;
}

/*
  Función auxiliar para Consigna 2, punto C
  Función para imprimir el menú de ordenamiento
  @returns {void}
*/
const imprimirMenuOrdenamiento = () => {
  // Se inicializa una variable como null para limpiar el estado anterior y evitar errores.
  let opcion = null;
  // Bucle para iterar hasta que la opción sea 0.
  do {
    // Se imprime el menú de ordenamiento.
    console.log('\nCriterios de ordenamiento\n');
    console.log('1. Por título');
    console.log('2. Por año de publicación');
    console.log('0. Regresar al menú principal\n');
    // Se solicita al usuario que ingrese una opción según el menú impreso.
    const opcion = Number(prompt('Ingrese el número del criterio de ordenamiento: '));
    // Se procesa la opción ingresada por el usuario y se retorna el mensaje correspondiente.
    switch (opcion) {
      case 1:
        return ordenarLibros('titulo');
      case 2:
        return ordenarLibros('anio');
      case 0:
        return `\nRegresando al menú principal...\n`;
      default:
        return `\nOpción no válida\n`;
    }
  } while (opcion !== 0);
}

/*
  Consigna 2) Funciones de gestión de libros
  C) Función de ordenamiento burbuja para ordenar los libros por un criterio
  @param {string} criterio - Criterio de ordenamiento
  @returns {string} - Mensaje de éxito
*/
const ordenarLibros = (criterio) => {
  // Para legibilidad, se separaron las funciones de ordenamiento por criterio en específico
  switch (criterio) {
    case 'titulo':
      return ordenarPorTitulo();
    case 'anio':
      return ordenarPorAnio();
    default:
      return `\nHubo un error al ordenar los libros.\n`;
  }
}

/*
  Función auxiliar para Consigna 2, punto C
  Función de ordenamiento burbuja para ordenar los libros por título alfabéticamente
  @returns {string} - Mensaje de éxito
*/
const ordenarPorTitulo = () => {
  // Se obtiene la longitud del array de libros
  const n = libros.length;
  // Se inicializa una variable para controlar el intercambio de libros
  let intercambio;

  do {
    intercambio = false;
    for (let i = 0; i < n - 1; i++) {
      // Se compara el título del libro actual con el título del libro siguiente.
      if (libros[i].titulo.localeCompare(libros[i + 1].titulo) > 0) {
        // Se intercambian los libros si están en el orden incorrecto.
        const temporal = libros[i];
        libros[i] = libros[i + 1];
        libros[i + 1] = temporal;
        intercambio = true;
      }
    }
  } while (intercambio); // Continua el bucle hasta que no haya más intercambios.

  return `\n**Libros ordenados por título alfabéticamente correctamente.**\n${imprimirLibros(libros)}`;
}

/*
  Función auxiliar para Consigna 2), punto C
  Función de ordenamiento burbuja para ordenar los libros año de publicación
  @returns {string} - Mensaje de éxito
*/
const ordenarPorAnio = () => {
  // Se obtiene la longitud del array de libros
  let n = libros.length;
  // Se inicializa una variable para controlar el intercambio de libros
  let intercambio;

  for (let i = 0; i < n - 1; i++) {
    intercambio = false;
    // Bucle para comparar e intercambiar los libros.
    for (let j = 0; j < n - 1 - i; j++) {
      // Se compara la propiedad 'anio' de los libros adyacentes.
      if (libros[j].anio > libros[j + 1].anio) {
        // Se intercambian los libros si están en el orden incorrecto.
        let temporal = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temporal;
        intercambio = true;
      }
    }
    // Si ya no se intercambiaron más libros, se termina el bucle.
    if (!intercambio) {
      break;
    }
  }
  return `\n**Libros ordenados por año de publicación correctamente.**\n${imprimirLibros(libros)}`;
}

/*
  Consigna 2) Funciones de gestión de libros
  D) Función para borrar un libro por su ID.
  @param {number} id - ID del libro a borrar
  @returns {string} - Mensaje de éxito o error
*/
const borrarLibro = (id) => {
  // Se busca el libro a borrar por su ID.
  const libroABorrar = libros.find((libro) => libro.id === id);
  // Si se encuentra el libro
  if (libroABorrar) {
    // Se evalúa si está prestado
    if (!libroABorrar.disponible) {
      // Si está prestado, hacer un map cuyo resultado se va a guardar en el mismo array de usuarios (para actulizarlo)
      usuarios = usuarios.map((usuario) => {
        // Por el array librosPrestados de cada usuario, va a evaluarse la existencia del valor al id a borrar, y se retorna el índice donde se encuentra
        const indiceEncontrado = usuario.librosPrestados.indexOf(libroABorrar.id)
        // Si retorna un índice
        if (indiceEncontrado !== -1) {
          // Se borra el libro prestado del arreglo de librosPrestados perteneciente al usuario
          usuario.librosPrestados.splice(indiceEncontrado, 1)
        }
        return usuario
      })
    }
    libros = libros.filter((libro) => libro.id !== libroABorrar.id);
    return `\n**Libro ${libroABorrar.titulo} borrado correctamente**\n`;
  } else {
    // Si no se encuentra el libro, se retorna un mensaje de error.
    return `\n**No se encontró ningún libro con el ID ${id}**\n`;
  }
}

/*
  Función auxiliar para muchas Consignas que deben imprimir los libros después de procesados.
  Función para formatear el array de libros en un formato legible
  @returns {string} - String formateado con la información de los libros
*/
const imprimirLibros = (librosAImprimir) => {
  // Se inicializa una variable resultado como string vacío para almacenar la información de los libros.
  let resultado = '';
  // Se itera por cada libro del array libros y se agrega la información de cada libro al resultado.
  librosAImprimir.forEach((libro, index) => {
    resultado += `\n${index + 1}) ID: ${libro.id} - ${libro.titulo} - ${libro.autor} (${libro.anio})`;
    resultado += `\n   Género: ${libro.genero} | Disponible: ${libro.disponible ? 'Sí' : 'No'}\n`;
  });
  return resultado;
}

/*
  Función auxiliar para Consigna 3, punto A
  Función para procesar los datos de un usuario
  @returns {string} - Mensaje de éxito o error
*/
const procesarUsuario = () => {
  // Se imprimen los prompts para la toma de datos del nuevo usuario
  console.log('\n**Datos del nuevo usuario**\n');
  const nombre = prompt('Ingrese el nombre: ').trim();
  const email = prompt('Ingrese el email: ').trim();

  // Verificar si el usuario ya existe antes de agregarlo
  if (verificarExistenciaUsuario(email)) {
    return `\n**Este usuario ya está registrado**\n`;
  }
  // Pasar los datos procesados a la función para registrar el usuario
  return registrarUsuario(nombre, email);
}

/*
  Función auxiliar para Consigna 3, punto A
  Función para validar la existencia de un usuario a base de su email.
  @param {string} emailUsuario - Email del usuario a verificar
  @returns {boolean} - True si el usuario existe, false si no existe
*/
const verificarExistenciaUsuario = (emailUsuario) => {
  return usuarios.some((usuario) => usuario.email === emailUsuario);
}

/*
  Consigna 3) Gestión de usuarios
  A) Función para agregar un usuario al arreglo de usuarios
  @param {Object} usuario - Objeto del usuario a registrar
  @returns {string} - Mensaje de éxito
*/
const registrarUsuario = (nombre, email) => {
  // Se crea un nuevo objeto usuario con los datos procesados, incluyendo una función que genera un id único para el usuario.
  const usuarioNuevo = { id: generarId(usuarios), nombre: nombre, email: email, librosPrestados: [] }
  // Se agrega el nuevo usuario al arreglo de usuarios.
  usuarios.push(usuarioNuevo);
  // Se retorna un mensaje de éxito.
  return `\n**Usuario ${usuarioNuevo.nombre} registrado correctamente**\n`;
}

/*
  Consigna 3) Gestión de usuarios
  B) Función para formatear el array de usuarios en un formato legible
  @returns {string} - String formateado con la información de los usuarios
*/
const mostrarTodosLosUsuarios = () => {
  // Se inicializa una variable resultado como string vacío para almacenar la información de los libros.
  let resultado = ''
  // Se itera por cada usuario del array usuarios y se agrega la información de cada usuario al resultado.
  usuarios.forEach((usuario, index) => {
    resultado += `\n${index + 1}) ID: ${usuario.id} - Nombre: ${usuario.nombre} - Email: ${usuario.email}`
    // La logica para imprimir la informacion de los libros prestados se separa para ser reusada en otras funciones.
    resultado += imprimirLibrosPrestadosAUsuario(usuario.id);
  });
  return resultado;
}

/*
  Función auxiliar para Consigna 3, punto A
  Función para obtener la información de los libros prestados a un usuario
  @param {number} idUsuario - Indice del usuario en el array de usuarios
  @returns {string} - String formateado con la información de los libros prestados
*/
const imprimirLibrosPrestadosAUsuario = (idUsuario) => {
  // Se inicializa una variable resultado como string vacío para almacenar la información de los libros.
  let resultado = '';
  // Se obtiene primero el usuario por su id. Luego a ese resultado de find se le aplica un map a su atributo de librosPrestados, en el cual se busca el titulo de cada libro prestado en el array de libros.
  const librosPrestados = usuarios.find((usuario) => usuario.id === idUsuario).librosPrestados.map((id) => libros.find((libro) => libro.id === id).titulo).join(', ');
  // Si el array de libros prestados no está vacío, se agrega la información de los libros prestados al resultado.
  if (librosPrestados.length > 0) {
    resultado += `\n   Libros prestados: ${librosPrestados}\n`;
  } else {
    // Si el array de libros prestados está vacío, se retorna un mensaje sobre el estado vacío del array.
    resultado += `\n   Libros prestados: No se le ha prestado ningún libro\n`;
  }
  // Se retorna el resultado.
  return resultado;
}

/*
  Consigna 3) Gestión de usuarios
  C) Función para buscar un usuario por su email
  @param {string} email - Email del usuario a buscar
  @returns {string} - Mensaje de éxito o error
*/
const buscarUsuario = (email) => {
  let resultado = '';
  // Se busca el usuario por su email, normalizando el string para evitar errores de comparación.
  const usuario = usuarios.find((usuario) => usuario.email.toLowerCase() === email.toLowerCase());
  // Si se encuentra el usuario, se retorna un mensaje de éxito con la información del usuario y los libros prestados.
  if (usuario) {
    resultado += `\n**Usuario encontrado**\n\nID: ${usuario.id} - Nombre: ${usuario.nombre} - Email: ${usuario.email}`;
    resultado += imprimirLibrosPrestadosAUsuario(usuario.id);
    return resultado;
  } else {
    // Si no se encuentra el usuario, se retorna un mensaje de error.
    return `\n**No se encontró ningún usuario con el email: ${email}**\n`;
  }
}

/*
  Consigna 3) Gestión de usuarios
  D) Función para borrar un usuario por su nombre y email
  @param {string} nombre - Nombre del usuario a borrar
  @param {string} email - Email del usuario a borrar
  @returns {string} - Mensaje de éxito o error
*/
const borrarUsuario = (nombre, email) => {
  // Se busca el usuario a borrar por su nombre y email, normalizando los strings para evitar errores de comparación.
  const usuarioABorrar = usuarios.find((usuario) => usuario.email.toLowerCase() === email && usuario.nombre.toLowerCase() === nombre);
  // Si se encuentra el usuario, se borra.
  if (usuarioABorrar) {
    // Validar si el usuario tiene libros prestados y si los tiene, se retorna un mensaje de error.
    if (usuarioABorrar.librosPrestados.length > 0) {
      return `\n**Usuario ${nombre} tiene libros por regresar y no puede ser borrado**\n`;
    } else {
      // Se borra el usuario del arreglo de usuarios usando el metodo de filer, que lo que hace es filtrar el arreglo sin el usuario con el id del usuario que se desea borrar.
      usuarios = usuarios.filter((usuario) => usuario.id !== usuarioABorrar.id);
      return `\n**Usuario ${nombre} borrado correctamente**\n`;
    }
  } else {
    // Si no se encuentra el usuario, se retorna un mensaje de error.
    return `\n**No se encontró ningún usuario con el nombre: ${nombre} ni email: ${email}**`;
  }
}

/*
  Consigna 4) Sistema de préstamos
  A) Función para prestar un libro a un usuario
  @param {number} idUsuario - ID del usuario al que se presta el libro
  @param {number} idLibro - ID del libro a prestar
  @returns {string} - Mensaje de éxito o error
*/
const prestarLibro = (idLibro, idUsuario) => {
  // Se busca el usuario mediante el id del usuario.
  const usuario = usuarios.find((usuario) => usuario.id === idUsuario);
  // Se busca el libro mediante el id del libro.
  const libro = libros.find((libro) => libro.id === idLibro);
  // Si se encuentra el usuario y el libro
  if (usuario && libro) {
    // Valida si el libro está disponible
    if (libro.disponible) {
      // Se agrega el id del libro al array de libros prestados al usuario.
      usuario.librosPrestados.push(idLibro);
      // Se marca el libro como no disponible.
      libro.disponible = false;
      // Se retorna un mensaje de éxito.
      return `\n**Libro ${libro.titulo} prestado a usuario ${usuario.nombre} correctamente**\n`;
    } else {
      // Se retorna un mensaje de error.
      return `\n**El libro ${libro.titulo} no está disponible**\n`;
    }
  } else {
    // Si no se encuentra el usuario se retorna un mensaje de error.
    if (!usuario) {
      return `\n**No se encontró ningún usuario con el ID: ${idUsuario}**\n`;
      // Si no se encuentra el libro se retorna un mensaje de error.
    } else if (!libro) {
      return `\n**No se encontró ningún libro con el ID: ${idLibro}**\n`;
    } else {
      // Si no se encuentra el usuario ni el librose retorna un mensaje de error.
      return `\n**El libro con el ID: ${idLibro} no existe. El usuario con el ID: ${idUsuario} no existe.**\n`;
    }
  }
}

/*
  Consigna 4) Sistema de préstamos
  B) Función para que un usuario regrese un libro prestado
  @param {number} idLibro - ID del libro a devolver
  @param {number} idUsuario - ID del usuario que devuelve el libro
  @returns {string} - Mensaje de éxito o error
*/
const devolverLibro = (idLibro, idUsuario) => {
  // Se busca el usuario mediante el id del usuario.
  const usuario = usuarios.find((usuario) => usuario.id === idUsuario);
  // Se busca el libro mediante el id del libro.
  const libro = libros.find((libro) => libro.id === idLibro);
  // Si se encuentra el libro y el usuario
  if (libro && usuario) {
    // Verifica si el libro está disponible
    if (libro.disponible) {
      return `\n**El libro ${libro.titulo} no está prestado**\n`;
    }
    // Verifica si el libro está prestado al usuario
    if (usuario.librosPrestados.includes(idLibro)) {
      // Se elimina el libro del usuario.
      usuario.librosPrestados = usuario.librosPrestados.filter((libro) => libro !== idLibro);
      // Se marca el libro como disponible.
      libro.disponible = true;
      return `\n**Libro ${libro.titulo} devuelto por el usuario ${usuario.nombre} correctamente**\n`;
    } else {
      return `\n**El libro ${libro.titulo} no lo tiene el usuario ${usuario.nombre}**\n`;
    }
  } else {
    // Si no se encuentra el libro se retorna un mensaje de error.
    if (!libro) {
      return `\n**No se encontró ningún libro con el ID: ${idLibro}**\n`;
    } else if (!usuario) {
      // Si no se encuentra el usuario se retorna un mensaje de error.
      return `\n**No se encontró ningún usuario con el ID: ${idUsuario}**\n`;
    }
    // Si no se encuentra el usuario ni el libro se retorna un mensaje de error.
    return `\n**El libro con el ID: ${idLibro} no existe. El usuario con el ID: ${idUsuario} no existe.**\n`;
  }
}

/*
  Consigna 5) Sistema de reportes
  A) Función para generar un reporte de libros
  @returns {string} - Mensaje de éxito
*/
const generarReporteLibros = () => {
  // Declarar e inicializar variable para almacenar el reporte.
  let reporte = '';
  //Cantidad total de libros. Se lee el largo del arreglo que alberga libros y se le suma 1.
  reporte += `\n* Cantidad total de libros: ${libros.length}`;
  //Cantidad de libros prestados. Se reduce el arreglo mediante una funcion que valida la propiedad 'disponible' de cada libro, sumando los que no estén disponibles.
  reporte += `\n* Cantidad de libros prestados: ${libros.reduce((total, libro) => !libro.disponible ? total + 1 : total, 0)}`;
  //Cantidad de libros por genero. Para legibilidad se separa en otra función.
  reporte += `\n* Cantidad de libros por género: ${librosPorGenero()}`;
  // Libro más antiguo. Se hace un find sobre el arreglo de libros, donde su año sea el resultado de la función Math.min, al cual se le envia un mapa del arreglo de libros para obtener el año de cada libro y este retorne el menor año. Al resultado de esto se obtiene el título del libro encontrado.
  reporte += `\n* Libro más antiguo: ${libros.find((libro) => libro.anio === Math.min(...libros.map((libro) => libro.anio))).titulo}`;
  // Libro más nuevo. Se hace un find sobre el arreglo de libros, donde su año sea el resultado de la función Math.max, al cual se le envia un mapa del arreglo de libros para obtener el año de cada libro y este retorne el mayor año. Al resultado de esto se obtiene el título del libro encontrado.
  reporte += `\n* Libro más nuevo: ${libros.find((libro) => libro.anio === Math.max(...libros.map((libro) => libro.anio))).titulo}\n`;
  // Se retorna el reporte.
  return reporte;
}

/*
  Funcion auxiliar para Consignia 5, punto A
  Función para generar un reporte de cantidad de libros por género
  @returns {string} - Reporte de libros por género
*/
const librosPorGenero = () => {
  // Variable para almacenar el reporte
  let librosPorGenero = '';
  // Se mapea el arreglo de libros para obtener el género de cada libro. El resultado se filtra usando el metodo indexOf para verificar si el índice del género iterado es el mismo que el índice obtenido del método filter. Si no es, significa que el género es repetido y se ignora.
  const generos = libros.map((libro) => libro.genero).filter((genero, index, self) => self.indexOf(genero) === index);
  // Itera por cada género y acumula una cadena que imprime el nombre del género y el resultado de un filtro al arreglo de libros, donde se filtra que el género del libro iterado sea igual al género que se está iterando, de ser así, se suma.
  generos.forEach((genero) => {
    librosPorGenero += `\n- ${genero}: ${libros.filter((libro) => libro.genero === genero).length}`;
  });
  // Se retorna la cadena acumulada.
  return librosPorGenero;
}

/*
  Consigna 6) Identificación Avanzada de libros
  A) Función para identificar libros por palabras
  @returns {string} - Mensaje de éxito
*/
const librosConPalabrasEnTitulo = () => {
  // Filtrar libros cuyo título contiene más de una palabra alfabética y retornar solo los títulos
  const librosIdentificados = libros.filter((libro) => {
    // Dividir el título en palabras
    const palabras = libro.titulo.split(' ');
    // Contar cuántas palabras son alfabéticas (solo letras, sin números ni caracteres especiales)
    let palabrasAlfabeticas = 0;
    for (let i = 0; i < palabras.length; i++) {
      // Para legibilidad, se crea una función para verificar si una palabra es alfabética.
      if (esPalabraAlfabetica(palabras[i])) {
        palabrasAlfabeticas++;
      }
    }
    // Retornar true si hay más de una palabra alfabética
    return palabrasAlfabeticas > 1;
    //Esto extrae solo los titulos de cada objeto libro que cumplen la condicion del filtro.
  });
  // Si se encontraron libros con más de una palabra alfabética, se retorna el mensaje de éxito con la información de los libros identificados.
  if (librosIdentificados.length > 0) {
    return `\n**Libros identificados**\n${imprimirLibros(librosIdentificados)}\n`;
  } else {
    return `\n**No se encontraron libros con más de una palabra alfabética**\n`;
  }
}

/*
  Función auxiliar para Consigna 6, punto A
  Función para verificar si un carácter es una letra alfabética
  @param {string} caracter - Carácter a verificar
  @returns {boolean} - True si el carácter es una letra alfabética, false si no es una letra alfabética
*/
const esLetra = (caracter) => {
  // Se obtiene el código ASCII del carácter.
  const codigo = caracter.charCodeAt(0);
  // Se verifica si el código ASCII está entre 65 y 90 (A-Z) o entre 97 y 122 (a-z).
  return (codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122);
};

/*
  Función auxiliar para Consigna 6, punto A
  Función para verificar si una palabra es alfabética
  @param {string} palabra - Palabra a verificar
  @returns {boolean} - True si la palabra es alfabética, false si no es alfabética
*/
const esPalabraAlfabetica = (palabra) => {
  // Si la palabra no tiene letras, se retorna false.
  if (palabra.length === 0) return false;
  // Se itera por cada letra de la palabra y se verifica si es una letra alfabética.
  for (let i = 0; i < palabra.length; i++) {
    if (!esLetra(palabra[i])) {
      return false;
    }
  }
  return true;
};

/*
  Consigna 7) Cálculos Estadísticos
  A) Función para calcular estadísticas
  @returns {string} - Mensaje de éxito
*/
const calcularEstadisticas = () => {
  let estadisticas = '';
  //Promedio de años de publicacion de los libros usando math
  estadisticas += `\n* Promedio de años de publicación de los libros: ${promedioAnios()}`;
  // Año de publicacion más frecuente, leer el disclaimer que dejé sobre la funcion de anioMasFrecuente. Si el resultado viene vacío se imprime la string de vacío.
  estadisticas += `\n* Año de publicación más frecuente: ${anioMasFrecuente() || 'No hay un año de publicación recurrente'}`;
  // Diferencia de años entre el libro más antiguo y el más nuevo usando math
  estadisticas += `\n* Diferencia de años entre el libro más antiguo y el más nuevo: ${diferenciaAnios()}\n`;
  return estadisticas;
}

/*
  Función auxiliar para Consigna 7, punto A
  Función para calcular el promedio de años de publicación de los libros
  @returns {number} - Promedio de años de publicación de los libros
*/
const promedioAnios = () => {
  // Se le aplica redondeo al resultado del mapeo del arreglo de libros, donde se convierte cada atributo anio a un numero y se reduce el arreglo sumando los valores de los atributos anio para ser dividido por el largo del arreglo.
  return Math.round(libros.map((libro) => Number(libro.anio)).reduce((total, anio) => total + anio, 0) / libros.length);
}

/* Disclaimer: Entiendo que hay que usar Math para resolver esto pero es que no es posible bajo la lógica definida. "Año de publicación más frecuente" implica que hay un número repetido en un grupo de números, y no es necesario hacer ningún tipo de evaluación matemática (ninguna que ofrezca Math) para determinar qué número se repite. No le hallo sentido en forzar el uso de Math en esta función. Pero si piensan quitarme puntos porque no usé math, adelante. Apreciaría que expliquen claramente cuál era la intención de esta función para aplicarlo en un futuro. */

/*
  Función auxiliar para Consigna 7, punto A
  Función para obtener el año de publicación más frecuente
  @returns {number} - Año de publicación más frecuente
*/
const anioMasFrecuente = () => {
  // Iterar el arreglo de libros por cada libro y retornar el atributo anio de cada libro encontrado, generando un arreglo de anios. A ese resultado se aplica un find que retorna el anio con mas repeticiones, que es obtenido a traves de un filtro que filtra el arreglo de anios y retorna el anio que se repite mas veces.
  return libros.map((libro) => libro.anio).find((anio) => libros.map((libro) => libro.anio).filter((a) => a === anio).length > 1);
}

/*
  Función auxiliar para Consigna 7, punto A
  Función para calcular la diferencia de años entre el libro más antiguo y el más nuevo
  @returns {number} - Diferencia de años entre el libro más antiguo y el más nuevo
*/
const diferenciaAnios = () => {
  //Obtener lista de años al extraer el año de cada libro a traves de un map aplicado al objeto libros
  const anios = libros.map((libro) => libro.anio)
  // El operador spread (...) es usado para expandir el arreglo en sus elementos individuales sin necesidad de hacer un bucle para pasarles el valor uno a uno a los métodos Math.max y Math.min. Se resta el máximo y mínimo obtenidos de los operadores Math .max y .min, el resultado es la diferencia.
  return Math.max(...anios) - Math.min(...anios);
}

/*
  Consigna 8) Manejo de Cadenas
  A) Función para normalizar los datos
  @returns {string} - Mensaje de éxito
*/
const normalizarDatos = () => {
  // Iterar por cada libro y normalizar atributos segun la especificación dada.
  libros.forEach((libro) => {
    // .toUpperCase vuelve mayúsculas todos los caracteres del string al que se le aplica.
    libro.titulo = libro.titulo.toUpperCase();
    // Trim elimina espacios en blanco al inicio y final
    libro.autor = libro.autor.trim();
  });
  // Iterar por cada usuario y normalizar atributos segun la especificación dada.
  usuarios.forEach((usuario) => {
    // .toLowerCase vuelve minúsculoa todos los caracteres del string al que se le aplica.
    usuario.email = usuario.email.toLowerCase();
  });
  // Se retorna un mensaje de éxito.
  return `\n**Datos normalizados correctamente**\n`;
}

/*
  Función auxiliar para Consigna 9, punto A
  Función para imprimir el menú principal
  @returns {void}
*/
const imprimirMenuPrimario = () => {
  console.log('**Bienvenido a la biblioteca**\n');
  console.log('1. Agregar libro');
  console.log('2. Buscar libro');
  console.log('3. Ordenar libros');
  console.log('4. Borrar libro');
  console.log('5. Registrar usuario');
  console.log('6. Mostrar todos los usuarios');
  console.log('7. Buscar usuario');
  console.log('8. Borrar usuario');
  console.log('9. Prestar libro');
  console.log('10. Devolver libro');
  console.log('11. Generar reporte de libros');
  console.log('12. Identificar libros por palabras');
  console.log('13. Calcular estadísticas');
  console.log('14. Normalizar datos');
  console.log('15. Mostrar libros');
  console.log('0. Salir\n');
}

/*
  Consigna 9) Interfaz de Usuario por Consola
  A) Función para mostrar el menú principal
  @returns {void}
*/
const menuPrincipal = () => {
  do {
    // Imprimir el menú principal
    imprimirMenuPrimario();
    // Inicializar variable como null limpiar el estado anterior y evitar errores.
    let opcion = null;
    opcion = Number(prompt('Ingrese un número del proceso que desea realizar: '));
    // Procesar la opción seleccionada
    switch (opcion) {
      case 1: // Agregar libro
        // Para mantener un código más legible, se separó la obtención de datos en procesarLibro()
        console.log(procesarLibro());
        break;
      case 2: // Buscar libro
        // Para controlar la entrada de datos, se crea funcion para imprimir un menu de opciones controladas.
        console.log(imprimirMenuBusquedaCriterio());
        break;
      case 3: // Ordenar libros
        // Para mantener un código más legible, se crea una función para imprimir el menú de ordenamiento
        console.log(imprimirMenuOrdenamiento());
        break;
      case 4: // Borrar libro
        console.log(borrarLibro(Number(prompt('Ingrese el ID del libro a borrar: '))));
        break;
      case 5: // Registrar usuario
        // Para mantener un código más legible, se separó la obtención de datos en procesarUsuario()
        console.log(procesarUsuario());
        break;
      case 6: // Mostrar todos los usuarios
        console.log(mostrarTodosLosUsuarios());
        break;
      case 7: // Buscar usuario
        console.log(buscarUsuario(prompt('Ingrese el email del usuario a buscar: ').trim().toLowerCase()));
        break;
      case 8: // Borrar usuario
        console.log(borrarUsuario(prompt('Ingrese el nombre del usuario a borrar: ').trim().toLowerCase(), prompt('Ingrese el email del usuario a borrar: ').trim().toLowerCase()));
        break;
      case 9: // Prestar libro
        console.log(prestarLibro(Number(prompt('Ingrese el ID del libro a prestar: ')), Number(prompt('Ingrese el ID del usuario al que desea prestarle el libro: '))));
        break;
      case 10: // Devolver libro
        console.log(devolverLibro(Number(prompt('Ingrese el ID del libro a devolver: ')), Number(prompt('Ingrese el ID del usuario que desea devolver el libro: '))));
        break;
      case 11: // Generar reportede libros
        console.log(generarReporteLibros());
        break;
      case 12: // Identificar libros por palabras
        console.log(librosConPalabrasEnTitulo());
        break;
      case 13: // Calcular estadisticas
        console.log(calcularEstadisticas());
        break;
      case 14: // Normalizar datos
        console.log(normalizarDatos());
        break;
      case 15: // Mostrar libros
        console.log(`\n**Lista de libros**\n${imprimirLibros(libros)}\n`);
        break;
      case 0: // Salir del program
        salir = true;
        console.log('Saliendo del programa...');
        break;
      default: // Si una opción no forma parte del menú, se reimprime el menú
        console.log('Opción no válida');
        break;
    }
  } while (!salir);
}

menuPrincipal();