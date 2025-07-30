// X Pattern 
let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = " ";
    let stars = " ";
    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            stars += "*";
        }
        else
            stars += spaces
    }
    // stars += "\n";
    console.log(stars);
}