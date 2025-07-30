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
mirrorRightTriangle(5);
