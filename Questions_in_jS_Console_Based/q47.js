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

/*

*  
* *  
* * *  
* * * *  
* * * * *  

*/

//This is for X pattern
function XPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            i === j || i + j == n + 1 ? console.log("*") : console.log("");
        }
    }
}

