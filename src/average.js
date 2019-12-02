const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
//Set variables
let int = 0;
let sum = 0;
total = 0

console.log();
//Prompt
while (int > MAX || !Number.isInteger(int) || int !== -1) {
  int = Number(readlineSync.question("Non-negative integer: "));

//Compute
  if (int !== -1) {
    sum = sum + int;
    total = total + 1
  }
}

let print = (sum / total).toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});

//Display
console.log("\n" + print + ".");
console.log();
