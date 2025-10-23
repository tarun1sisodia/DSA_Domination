import readline from "readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter N: ", (n) => {
  n = +n;
  r1.question("Enter K: ", (k) => {
    let oddCount = Math.ceil(n / 2);
    if (k <= oddCount) {
      console.log(2 * k - 1);
    } else {
      console.log(2 * (k - oddCount));
    }
    r1.close();
  });
});
