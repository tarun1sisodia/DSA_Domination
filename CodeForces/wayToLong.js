let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = +input[0];

for (let i = 1; i <= n; i++) {
  let word = input[i].trim(); 
  let len = word.length;

  if (len > 10) {
    // Abbreviate: first + (len-2) + last
    console.log(word[0] + (len - 2) + word[len - 1]);
  } else {
    // Print as is
    console.log(word);
  }
}
