//Solve Increment & decrement operator questions

/*
const readline = require("readline");
const sc = readline.createInterface({ input: process.stdin, output: process.stdout })
sc.question('Enter the I: ', (userI) => {

    const result = q1(parseInt(userI))
    // console.log(result); // for testing Purpose only.
    sc.close()

});

*/


const q1 = function (i) {

    console.log('Function is Started.');

    // i = i++ + ++i;

    i = i++ - --i + ++i - i--;
    console.log('Function is Ended.', i);
    return i;
}

const q2 = function (a, b) {
    console.log('Function running..');

    let c = a + b + a++ + b++ + ++a + ++b;

    console.log('Function ended..');
    //If we did not use return inside the bracecs then it return the undefined.
    return c;

}
// console.log(q2(11, 22));

const q3 = function () {
    // const bool = new Boolean();
    let bool = true;
    bool++;
    console.log(bool);
}

// q3()

const q4 = function (i, j, k) {
    let m = i-- - j-- - k--; //1-2-3 = >-4
    console.log(m);

}
// q4(1, 2, 3);

const q5 = function (a, b) {
    const m = --b - ++a + ++b - --a;
    console.log(m);

}
q5(1, 2);

