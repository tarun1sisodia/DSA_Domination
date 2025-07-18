//Reverse for loop. Print n to 1

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter no. to Reverse..', (input) => {
    const n = parseInt(input);
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
    sc.close();
});