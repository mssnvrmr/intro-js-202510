const prompt = require('prompt-sync')();

const age = Number(prompt('What is your age? '));

const ageClassifier = (age) => {
  switch (true) {
    case age > 0 && age <= 13:
      return 'Child';
    case age > 13 && age < 18:
      return 'Teen';
    case age >= 18 && age < 65:
      return 'Adult';
    case age >= 65:
      return 'Senior Citizen';
    default:
      return 'Invalid age';
  }
}

console.log(`You are a ${ageClassifier(age)}`);