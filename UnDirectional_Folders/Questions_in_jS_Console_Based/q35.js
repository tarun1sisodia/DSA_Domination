//35 Sum of digits of a number (Ex: 936 = 18)


const sumOfDigits = function (n) {

    let save = 0;

    while (n > 0) {
        
        save = save + (n % 10);
        
        n = Math.floor(n / 10);
       
    }
    console.log("Sum of digits =", save);
}
sumOfDigits(12367);