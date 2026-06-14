ReverseofNUm(1121);

function ReverseofNUm(n) {
    if (n > 0) {
        let rev = 0;
        let copyN = n;

        while (n > 0) {
            digit = Math.floor(n % 10);
            rev = rev * 10 + digit;
            n = Math.floor(n / 10);
        }
        if (copyN === rev)
            console.log(`Palindrome`);
        else
            console.log(`Not Palindrome`);
    }
}