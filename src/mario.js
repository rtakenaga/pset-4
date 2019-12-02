const readlineSync = require("readline-sync");
//Set variables
var height = 0;
var space = "##";

console.log();
//Prompt
do {
    height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

//Compute
let secondHeight = height;

while (secondHeight > 1) {
    space = " " + space
  --secondHeight
}

console.log("\n" + space)
//Display
while (height > 1) {
  var space1 = space.replace(" #", "##")
  console.log(space1)
  --height
  var space = space1
}
console.log()
