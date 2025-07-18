//Factorial of a number

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Facotrial of a Number..', (input) => {
    const n = parseInt(input);
    factorial(n);
    sc.close();
});

function factorial(n) {
    if (n == 0 || n == 1) return 1;
    else if (n > 1) {
        return n * factorial(n - 1);
    }
    return n;
}

