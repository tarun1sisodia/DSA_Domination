
armstrong(153);
function armstrong(n) {
    let copyN = n;

    // Step 1: Count digits
    let count = String(n).length;

    // Step 2: Calculate Armstrong sum
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit ** count;
        n = Math.floor(n / 10);
    }

    // Step 3: Compare
    if (sum === copyN) {
        console.log(`${copyN} is an Armstrong number`);
    } else {
        console.log(`${copyN} is NOT an Armstrong number`);
    }
}

// Example
armstrong(153); // Armstrong
armstrong(123); // Not Armstrong
