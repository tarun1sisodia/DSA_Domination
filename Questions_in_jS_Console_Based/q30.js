//Print the all factors of a number (Ex: 50 -> 1 , 2 , 5 , 10 , 25 ,50)

/*
const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Sum of All Factors.: ', (userValue) => {
    let factors = parseInt(userValue);
    Factor(factors);
    sc.close();
});
*/

/**
 * Prints all factors of a given number `n` to the console.
 * Iterates from 1 up to n/2 and prints each divisor, then prints `n` itself.
 *
 * @param {number} n - The number for which to find and print all factors.
 */
function Factor(n) {
    // i =1 islye h kyunki hum factors 1 se start krte h 0 ka koi use hi nhi h..
    //n/2 se milta h 2nd or we can say half value. last value and half function bach jata h execute hone se.

    for (let i = 1; i <= n / 2; i++) {
        
        if (n % i === 0) {
            console.log(i);
        }

    }
    console.log(n);

}
Factor(50);
