//take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter Number to Print table..', (input) => {
    const n = parseInt(input);
    for (let i = 0; i <= 10; i++) {
        console.log(`${n}*${i}=> ${n * i}`);
        sc.close();
    }
});