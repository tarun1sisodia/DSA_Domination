//Mirror Triangle

function mirrorRightTriangle(n) {
    let stars = "";
    let spaces = "";

    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            spaces += "_"
            // console.log("_");

        }
        console.log(spaces);
        for (let j = 1; j <= i; j++) {
            stars += "*";
            // console.log("*");
        }
        console.log(stars);

    }
}
mirrorRightTriangle(5);
