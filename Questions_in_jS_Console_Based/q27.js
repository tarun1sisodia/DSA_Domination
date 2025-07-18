//Sum up to n terms.

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Sum upto your Number Just like Fabonacci..', (input) => {

    const n = parseInt(input);

    if (n == 0) return "Zero";

    else if (n == 1) return "1";

    if (n > 1) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i;
            console.log(sum);

        }
    }
    
    sc.close();
});