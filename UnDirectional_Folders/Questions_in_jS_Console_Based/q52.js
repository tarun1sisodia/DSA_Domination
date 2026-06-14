//

// let n = +prompt("Enter height of V pattern (min 3):");
let n = 5;
let pattern = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
        if (j === i || j === (2 * n - 2 - i)) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

console.log(pattern);
