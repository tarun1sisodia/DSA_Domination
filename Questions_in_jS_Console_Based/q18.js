//Accept three numbers and print the greatest among them.

let a = parseFloat(prompt('A:'));
let b = parseFloat(prompt('B:'));
let c = parseFloat(prompt('C:'));

// let a = 16;
// let b = 13;
// let c = 56;
(() => {
    if (a > b && b > c) {
        alert('A', a, b, c,);
        // console.log('A', a, b, c,);
    }
    else if (b > c && c > a) {
        // console.log('B', a, b, c,);
        alert('B', a, b, c,);
    }
    else {
        // console.log('C', a, b, c,);
        alert('C', a, b, c,);

    }
})();