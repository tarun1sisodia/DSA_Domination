

//Accept two numbers and print the greatest between them

const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin, output: process.stdout
});

sc.question('Enter the A: ', (a) => {
    sc.question('Enter the B: ', (b) => {
        console.log(`Sum of A & B is:  ${parseFloat(a) + parseFloat(b)}`);
        sc.close();
    });
});


