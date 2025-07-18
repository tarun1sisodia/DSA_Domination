//Check if the number is Prime or not.

function primeNumber(n) {
    if (n <= 1) {
        console.log(n + " is not a prime number");
        return;
    }
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
            console.log(n + " is not a prime number");
            return;
        }
    }
    console.log(n + " is a prime number");
}
primeNumber(12);