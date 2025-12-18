const prompt = require('prompt-sync')();

const flowerArray = ['Rose', 'Tulip', 'Daisy', 'Sunflower', 'Lily', 'Hyacinth', 'Iris', 'Daffodil', 'Poppy', 'Marigold'];

let favoriteFlowers = [, , ,];

const questions = 5;

const askQuestions = () => {
  let counter = 0;

  for (let i = 0; i < questions; i++) {
    const index = Math.floor(Math.random() * flowerArray.length);
    const question = prompt(`${i + 1}. Do you like the flower ${flowerArray[index]} (y/n)?`);

    if (favoriteFlowers.includes(flowerArray[index]) && question === 'y') {
      console.log(`It is true! Your favorite flower is ${flowerArray[index]}`);
      counter++;
    } else if (favoriteFlowers.includes(flowerArray[index]) && question === 'n') {
      console.log(`Liar! You like ${flowerArray[index]}`);
      counter++;
    } else if (!favoriteFlowers.includes(flowerArray[index]) && question === 'n') {
      console.log(`True, you don't like ${flowerArray[index]}`);
    } else if (!favoriteFlowers.includes(flowerArray[index]) && question === 'y') {
      console.log(`Liar, you don't like ${flowerArray[index]}`);
    }
  }
  console.log(`We found ${counter} flowers that you like.`);
}

for (let i = 0; i < favoriteFlowers.length; i++) {
  favoriteFlowers[i] = prompt(`${i + 1}. Write your favorite flower's name: `);
}

askQuestions();