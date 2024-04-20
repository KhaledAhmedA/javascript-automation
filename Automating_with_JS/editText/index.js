// edit text files app
const fs = require("fs");

let fileString = fs.readFileSync("input.txt").toString();
console.log(fileString);

// fill out the initials
fileString = fileString.replace(/K:/g, "Khaled: ");
fileString = fileString.replace(/E:/g, "Engineer: ");


// add line number
const charArray = fileString.split("");
let lineNumber = 1;
let i;
for (i = 0; i < charArray.length; i++) {
  const prevChar = charArray[i - 1];

  if (prevChar === '\n' || !prevChar) {
    charArray[i] = String(lineNumber) + ". " + charArray[i];
    lineNumber++;
  }
};

fileString = charArray.join("");

fs.writeFileSync("output.txt", fileString);
