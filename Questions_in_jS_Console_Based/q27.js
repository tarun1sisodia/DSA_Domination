//Sum up to n terms.

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Sum upto your Number Just like Fabonacci..', (input) => {

    const n = parseInt(input);

    if (n === 0) return "Zero";

    else if (n === 1) return "1";

    if (n > 1) {
        //sum is zero but as the value of i increase it will add .
        let sum = 0;

        /*
        for (let i = 0; i <= n; i++) {
            
        //Main Logic...
        sum += i;
        
    }
    */
        sum = n * (n + 1) / 2;
        console.log(sum);
    }

    sc.close();
});

