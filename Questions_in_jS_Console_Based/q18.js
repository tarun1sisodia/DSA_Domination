//Accept three numbers and print the greatest among them.

// let a = parseFloat(prompt('A:'));
// let b = parseFloat(prompt('B:'));
// let c = parseFloat(prompt('C:'));

let a = 1;
let b = 3;
let c = 5;
(() => {
    if (a > b && b > c) {
        alert('A', a, b, c,);
    }
    else if (b > c && a > c) {
        alert('B', a, b, c,);
    }
    else {
        alert('C', a, b, c,);

    }
})();