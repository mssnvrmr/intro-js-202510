const prompt = require('prompt-sync')();

const items = Number(prompt('How many items did you buy? '));
let itemsPrice = [];

for (let i = 0; i < items; i++) {
  itemsPrice.push(Number(prompt(`What is the price of the item ${i + 1}? `)));
}

const total = itemsPrice.reduce((acc, curr) => acc + curr, 0);

const calculateDiscount = () => {
  switch (true) {
    case total >= 1000:
      return total * 0.1;
    case total >= 500:
      return total * 0.05;
    default:
      return 0;
  }
};

console.log(`The total price of all items is ${total}.`);
if (calculateDiscount() > 0) {
  console.log(`You have a discount of ${calculateDiscount()}, making the final amount to pay: ${total - calculateDiscount()}`);
} else {
  console.log('You are not elegible for a discount.');
}