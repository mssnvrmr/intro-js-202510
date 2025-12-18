const prompt = require('prompt-sync')();

const convertirFahrenheitACelsius = (celsius) => {
  return (celsius * 9/5) + 32;
}

const celsius = Number(prompt('Ingrese la temperatura en Celsius: '));

console.log(`${celsius} Celsius son ${convertirFahrenheitACelsius(celsius)} Fahrenheit`);
