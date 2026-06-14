// Accept a number and digit if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

function palindrome(n) {
    if (n === 0 || n === 1) return 'Not Applicable.';
    let digit = 0;
    let reverse = 0;
    let original = n;
    while (n > 0) {
        // Getting the last digit of numbers.
        digit = n % 10;
        //Now Reversing the  0*10+digit.
        reverse = reverse * 10 + digit;
        //now reminder..
        n = Math.floor(n / 10);
    }
    console.log(reverse);
    if (original === reverse) {
        console.log("Yes Palindrome h .");
    } else {
        console.log("Nhi h Palidrome");
    }

}
// palindrome(12)
palindrome(121)