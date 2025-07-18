//Print the sum of all even & odd numbers in a range separately.
/*
const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Range to Get Even and Odd: ', (userRange) => {
    let range = parseInt(userRange);
    rangeNumber(range);
    sc.close();
});

*/
function rangeNumber(range) {
    //Intial is 0..
    let even = 0;
    let odd = 0;

    for (let i = 0; i < range; i++) {
        //if found even then the current i or loop iteration value will be added to even = even +i;
        if (i % 2 == 0) {
            even += i;
        }
        //if found odd then the current i or loop iteration value will be added to odd = odd +i;
        if (i % 2 != 0) {
            odd += i;
        }

        // console.log(`I: ${i} `);

    }
    console.log(`Even: ${even}`);
    console.log(`Odd: ${odd}`);

    // return "Pass";

}
rangeNumber(2);