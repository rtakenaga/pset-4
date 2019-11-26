const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


let lowerBound = 1;
let upperBound = 0;
let sum = 0;
let x = 0;

console.log();
while (lowerBound > upperBound || lowerBound < MIN || upperBound > MAX || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (lowerBound % 2 === 0) {
  for (let i = lowerBound; i <= upperBound; i = i + 2) {
    sum = sum + i;
  }
} else {
  for (let i = lowerBound +1; i <= upperBound; i = i + 2) {
    sum = sum + i;
  }
}

sum = (sum).toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 2});

console.log("\n" + sum + ".");
