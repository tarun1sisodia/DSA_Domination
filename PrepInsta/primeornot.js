const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question("Enter your Number:", (a) => {
    let n = parseInt(a);
    checkPrime(n);
    sc.close();
});

function checkPrime(n) {
    let isPrime = false;
    let count = 0;
    if (n === 2) {
        isPrime = true;
        console.log(`${n} always ${isPrime}`);
    }
    else {
        if (n <= 1)
            console.log('N is 1');

        if (n === 2)
            console.log(`N is ${n}`);

        let newN = Math.floor(Math.sqrt(n));

        for (let i = 1; i <= newN; i++) {
            if (n % i === 0) {
                console.log('Its not a prime number');

                count++;
            }
            // else
            //     console.log(`Its a prime`);


        }
        if (count === 2)
            console.log(`${count} so its a prime`);

    }
}