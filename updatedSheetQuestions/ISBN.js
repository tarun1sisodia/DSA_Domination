
function ISBNNumber(n) {
    let count = 0;
    let num = n;
    let remainder = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    if (count === 10) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            let digit = n % 10;

        }
    }


}