const readline = require("readline");
const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question("Enter no.", (n) => {
    let a = parseInt(n);
    evenOrOdd(a);
    sc.close();
});

function evenOrOdd(a) {
    a % 2 == 0 ? console.log(
        `Even: ${a}`) : console.log(
            ` Odd: ${a}`);
}

// 📌 Why it's O(1)

// Ek modulus operation → constant time

// Ek comparison → constant time

// Ek print statement → constant time
// Total: O(1)

