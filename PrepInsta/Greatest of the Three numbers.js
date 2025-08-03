greatest(4, 4, 2);

function greatest(a, b, c) {
    if (a === b || b === c || a===c) {
        console.log(`All numbers are Equal`);

    }
    else if (a > b && a > c) {
        console.log(`${a} is Greater`);

    }
    else if (b > a && b > c) {
        console.log(`${b} is Greater`);
    }
    else
        console.log(`${c} is Greater`);
}