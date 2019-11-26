const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
let number = 0

console.log();

do {
  number = Number(readlineSync.question("Non-negative integer:"));
}while (n > MAX || !Number.isInteger(n) || n < 0);

let boolean = true
