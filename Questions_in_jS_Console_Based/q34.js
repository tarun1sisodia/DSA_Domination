//34 Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

let count = 0;

const SeparateNumber = function (n) {
    let save = 0;
    while (n > 0) {
        save = n % 10;
        console.log(save);
        n = Math.floor(n / 10);
        console.log(n);
        if (n === 0) break;
    }
}


SeparateNumber(123);


