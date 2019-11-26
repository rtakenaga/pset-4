
const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let int = 0;
let sum = 0;
total = 0

console.log();

while (int > MAX || !Number.isInteger(int) || int !== -1) {
  int = Number(readlineSync.question("Non-negative integer: "));

  if (int !== -1) {
    sum = sum + int;
    total = total + 1
  }
}

let print = (sum / total).toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + print + ".");
