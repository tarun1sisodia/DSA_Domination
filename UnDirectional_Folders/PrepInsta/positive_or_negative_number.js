//Check if a Number is Positive or Negative in Javascript

/**
 
N > 0 then, number is Positive.
N < 0 then, number is Negative.
N = 0 then, number is Zero.
 
 */

/* 
Method 1: Using Brute Force
Method 2: Using Nested if-else Statements
Method 3: Using Ternary Operators
*/


const checkNumber = function (n) {

    if (n > 0)
        console.log('N is Positive Number');

    else if (n < 0)
        console.log(`N is Negative Number`);

    else if (n === 0)
        console.log(` N is Zero`);

    else
        console.log('Something is wrong');

}


checkNumber(5);

