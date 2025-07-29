
/*

*  
* *  
* * *  
* * * *  
* * * * *  

*/

const { log } = require("node:console");

//This is for X pattern
function XPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            i === j || i + j == n + 1 ? console.log("*") : console.log("");
        }
    }
}

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let n = 5;

for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num += j + " ";

    }
    console.log(num);
}

