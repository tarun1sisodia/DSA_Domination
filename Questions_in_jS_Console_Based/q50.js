//Mirror Triangle

function mirrorRightTriangle(n) {
    let stars = "";
    let spaces = ".";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            stars += spaces;
            // console.log("_");

        }
        for (let k = 1; k <= i; k++) {
            stars += "*";
            // console.log("*");
        }
        // console.log(spaces);
        console.log(stars);

    }
}
// mirrorRightTriangle(5);


let n = 5;

let pattern = "";
for (let i = 0; i < n; i++) {
    for (let spaces = 0; spaces < i; spaces++) {
        pattern += " ";
    }
    for (let stars = 0; stars < n - i; stars++) {

        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);