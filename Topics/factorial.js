//fatorial

function factorialSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            // console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}
factorialSum(50);


function reverse(n) {
    let copyN = n;
    let rev = 0;
    while (n > 0) {
        let digit = (n % 10);
        // console.log(n);
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    if (rev === copyN) {
        console.log(`Palindrom h`);
    }
}
reverse(121);

function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        let digit = Math.floor(n % 10);
        sum = sum + digit;
        n = n / 10;
    }
    console.log(sum);
}

sumOfDigits(99);

//Making it more advance iwth using strong number concept in this ..
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function isStrongNumber(num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sum === original; // because it will return only true and false answer nothing more than it. keep in mind everyLIne.
}

// Example
console.log(isStrongNumber(145)); // true
console.log(isStrongNumber(2));   // true (2! = 2)
console.log(isStrongNumber(123)); // false


function automorphic(n) {
    let square = n * n;
    let temp = n;
    let count = 0;

    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    let lastdigits = square % Math.pow(10, count);

    return lastdigits === n;
}
console.log(automorphic(5));
