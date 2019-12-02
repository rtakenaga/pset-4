const readlineSync = require("readline-sync");

//Set variables
var height = 0;
var space = "##";
var opposite = "##"


console.log();
//Prompt
do {
      height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

//Compute
var secondHeight = height;
var thirdHeight = height;

while (secondHeight > 1) {
      space = " " + space
      --secondHeight
}
while (thirdHeight > 1) {
      opposite = opposite + " "
      --thirdHeight
}

console.log("\n" + space + "  " + opposite)
//Display
while (height > 1) {
    var space1 = space.replace(" #", "##")
    var opposite1 = opposite.replace("# ", "##")

    console.log(space1 + "  " + opposite1)
    --height
    var space = space1
    var opposite = opposite1
}

console.log()
