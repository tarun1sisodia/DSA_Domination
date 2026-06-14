/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    let rev = 0;
    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x); //only works with positive number;
    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }
    rev *= sign; //restore the sign..
    if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
        return 0;
    }
    return rev;
};

console.log(reverse(-123));
