//Strong number using methods.

// console.log(factorial(3));

function strongNumber(n) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}

//Here we are making a factorial code where we are finding the factorial of the number.
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


console.log(strongNumber(145));