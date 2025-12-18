const prompt = require('prompt-sync')();

const students = 5;
let grades = [];

for (let i = 0; i < students; i++) {
  grades.push(Number(prompt(`What is the grade of the student ${i + 1}? `)));
}

const average = grades.reduce((acc, curr) => acc + curr, 0) / students;

console.log(`The average of the grades is ${average}`);