// 33 Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

// 2*0 => 0
// 2*1 => 2  
// 2*2 => 4   2*2 => 4
// 2*3 => 8   4*2 => 8
// 2*4 => 16  8*2 => 16
// 2*5 => 32  16*2 => 32

const power = function (a, b) {

    let count = 1;

    for (let i = 1; i <= b; i++) {
        //Main Equation.
        count = count * a;

        //Here you'll updated value with each new iteration.
        // console.log(count);
    }

    // Here you will direct see the final value..
    console.log(`${a}^${b} =>  ${count}`);
    return count;
}
const result = power(3, 4);
console.log(`Result of ${3} ** ${4} is ${result}`);

// console.log(power(3, 4));

