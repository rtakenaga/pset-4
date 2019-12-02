const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
//Set variables
let integer = 0;
let print = 0;

console.log();
//Prompt
while (integer <= 0 || integer > MAX || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}
//Compute

while (integer > 0) {
  let i = integer % 10;
  integer = Math.floor(integer / 10);

  if (i % 2 === 1) {
    print = i + print;
  }
}

//Display
console.log("\n" + print + ".")
