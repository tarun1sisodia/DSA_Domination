//Print natural number up to n.

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('How much Money you want..', (n) => {
    n = parseInt(n);
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    sc.close();
});


