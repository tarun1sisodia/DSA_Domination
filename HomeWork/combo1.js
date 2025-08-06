//use a range of numbers and find the palindrome values between it and also armstrong, and also prime , even and odd values and there sum.

function hardOne(a, b) {
    let copyA = a;
    let copyB = b;
    let digit = 0;
    let rev = 0;
    let armstrong = 0;
    let count = 0;

    while (a < b) {
        a = Math.floor(a / 10);
        count++;
    }

    for (let i = copyA; i <= b; i++) {
        digit = Math.floor(copyA % 10);
        rev = rev * 10 + digit;
        armstrong = digit ** count;
        copyA = copyA % 10;
    }
    if (copyA === rev) console.log(`Palindrome: ${copyA} & CopyA: ${copyA}`);

    console.log(`ArmStrong: ${armstrong}`);
    console.log(`Reverse: ${rev} & Real: ${copyA}`);
}
hardOne(11, 153);