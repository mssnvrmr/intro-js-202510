const postres = ['Turrón', 'Pan Dulce', 'Garrapiñada'];

console.log(`Lista inicial:${postres}`);

postres.push('Helado')

console.log(`Lista con nuevo postre: ${postres}`);

console.log(`Postre eliminado: ${postres.splice(2, 1)}`);

console.log(`Lista final: ${postres}`);