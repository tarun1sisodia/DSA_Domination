let name = "Tarun";

console.log(name.length);

console.log(name.charAt(0));

//Convert a string into a lowercase string.

let lower = name.toLowerCase();

console.log(lower);

//To UpperCase.

let upper = name.toUpperCase();

console.log(upper);

//Slice 

let piece = name.slice(-1, 2); // Does Not return any output.
let piece2 = name.slice(0, 2);
console.log(piece);

let subString = name.substring(-1, 3);
console.log(subString);

let index = name.indexOf("run", 2);

console.log(index);

let include = name.includes("r", 3);

console.log(include);

let splt = name.split("");
console.log(splt);

let repl = name.replace("run", "cam");

console.log(repl);


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));

function sum(n) {
    if (n === 0) return; //here we are stopping the function.
    else
        sum(n - 1);
    console.log(n);
}
sum(5);

