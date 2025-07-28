//Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
const readline = require("readline");

const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });

r1.question('Enter your name:\t', (a) => {
    r1.question('Enter Your age:\t', (b) => {
        const name = a;
        const age = parseInt(b);
        callme(name, age);
        r1.close();
    })
});

function callme(name, age) {
    return (() => {
        console.log(`Hello ${name}, You are ${age} years old.`);
    })(name, age);
}
