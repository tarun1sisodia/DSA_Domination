// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });


sc.question('Enter The Principal Amount:', (userPrincipal) => {
    sc.question('Enter the Rate Of Interest:', (userRate) => {
        sc.question('Enter the Time:', (userTime) => {
            sc.question('Enter number of times interest compounded per year (n): ', (userCompound) => {
                callCI(userPrincipal, userRate, userTime, userCompound);
                sc.close();
            });
        });
    });
});

function callCI(userPrincipal, userRate, userTime, userCompound) {
    const P = parseFloat(userPrincipal);
    const R = parseFloat(userRate);
    const T = parseFloat(userTime);
    const N = parseFloat(userCompound);
    //Eq-1
    const A = Math.round(P * Math.pow((1 + R / (N * 100)), N * T));
    //Eq-2
    const CI = Math.round(A - P);

    console.log(`Amount: ${A} , CI: ${CI}`);
}