/*
//Sum of two integers

let a = 10;
let b = 20;

console.log(a + b);
*/

//By using IIFE.
((a, b) => console.log(a + b))(10, 20);

//By Using closures.

function sumParent(a, b) {
    a, b;
    return console.log(a + b);
}
sumParent(100, 200);

