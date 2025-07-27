//39 Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter number::', (val) => {
    let n = parseInt(val);
    console.log('Calling Checker..');
    if (checkAutomorphic(n))
        console.log(`It's a Automorphic Number ${n}`);
    else
        console.log(`It's Not a automorphic Number.`);

    sc.close();

});

// checkAutomorphic(5);

function checkAutomorphic(n) {
    //Declaring the variables..
    let countOfDigits = 0;
    let originalN = n;
    let temp = n;
    //Counting how many numbers of digits are passed by user to know and make the square.
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        //increasing the counting of digits .
        countOfDigits++;
    }
    //Squaring of N .. 
    let squareOfN = originalN * originalN;
    // this is very crucial Step .. yahan humne power function or method ka use kra h jisse 10 ke power counting use krti h aur pata chl jata h ki kitne digits hume nikalne h square m se.
    let modOfCount = Math.pow(10, countOfDigits);
    //yahan hum digits ko nikal rahe h square m se.
    let lastDigitsSquare = squareOfN % modOfCount;
    // Checking the last digits square.
    return lastDigitsSquare === originalN;
}

