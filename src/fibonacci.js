const readlineSync = require("readline-sync");

//Set variables
let integer = 0;

let x = 0;
let y = 1;
let sum = 1;

console.log();

//Prompt
while (integer > 78 || integer <= 0 || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Non-negative integer: "));
}

//Compute
for (var i = 2; i <= integer; i++){
  sum = x + y;
       x = y;
       y = sum;
}


sum = (sum).toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 0});

//Display
console.log("\n" + sum + ".")
