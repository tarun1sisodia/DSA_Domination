sumOfDigits(121);

function sumOfDigits(n) {
    if (n > 0) {
        let sum = 0;
        let digit = 0;

        while (n > 0) {
            digit = Math.floor(n % 10);
            sum += digit;
            n = n / 10;
        }
        console.log(sum);

    }
}