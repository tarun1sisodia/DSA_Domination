//Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter A: ', (userA) => {
    sc.question('Enter B: ', (userB) => {
        swap(userA, userB);
        sc.close()
    });
});

const swap = function (userA, userB) {

    let a = parseInt(userA);
    let b = parseInt(userB);

    console.log(`A: ${a}, B: ${b}`);
    
    //Eq=1
    a = a + b;
    //Eq=2
    b = a - b;
    //Eq=3
    a = a - b;

    console.log(`A: ${a}, B: ${b}`);

}