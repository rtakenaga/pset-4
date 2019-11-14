const readlineSync = require("readline-sync");


const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


let lowBound = 1;
let upBound = 0;
let sum = 0;
let x = 0;


while (lowBound > upBound){

  const lowBound = Number(readlineSync.question("Lower bound: "));
  const upBound = Number(readlineSync.question("Upperbound: "));

  if (lowBound < MIN || upBound > MAX){
    console.log ("\nInvalid");
  }
}

if
