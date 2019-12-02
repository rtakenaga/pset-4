const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger = 0

console.log();
//Prompt
do {
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger > MAX || !Number.isInteger(nonNegativeInteger) || nonNegativeInteger < 0);

let boolean = true
//Compute
  if (nonNegativeInteger===1){
    boolean = false
  }
  else if(nonNegativeInteger === 2){
    boolean = true
  }

  else{
    for(var x = 2; x < nonNegativeInteger; x++){
      if(nonNegativeInteger % x === 0){
        boolean = false
      }
   }
  }
//Display
if (boolean === false){
  console.log("\nNot prime.")
} else if (boolean === true){
  console.log ("\nPrime.")
}
console.log();
