const readlineSync = require("readline-sync");
//Set variables
let number = 0;
let x = 1;
let y = 0;
let finalResult = "";

console.log();
//Prompt
do {
      number = Number(readlineSync.question("Positive integer: "));
} while (number <= 0 || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) || !Number.isInteger(number));
//Compute
while (x <= Math.floor(Math.sqrt(number))) {

    if (x <= number) {
      y = number % x
      if (x === Math.floor(Math.sqrt(number))) {
        finalResult = finalResult + x + ". "
        break;
      } else if (y === 0) {
        finalResult = finalResult + x + ", " + (number / x) + ", "
      }
      x++
    }
}
//Display
console.log("\n" + finalResult + "\n");
