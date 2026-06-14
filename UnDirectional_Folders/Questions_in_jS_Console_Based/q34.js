//34 Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

let count = 0;

const SeparateNumber = function (n) {
    let save = 0;
    while (n > 0) {
        //Eq-1
        save = n % 10; // kya reminder bacha
        // Eq-2
        n = Math.floor(n / 10); // kitne bar ja rha h.

        console.log(save);

        if (n === 0) break;

    }
}


SeparateNumber(123);


