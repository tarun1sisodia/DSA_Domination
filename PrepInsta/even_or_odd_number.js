//Even Aur Odd and also check how much numbers are there even or odd.

//Simple Odd and Even Number Checker
const simpleEvenOdd = function (n) {
    if (n > 0) {

        try {
            if (n % 2 === 0) {
                console.log(`It's Even ${n}`);
            }
            else {
                console.log(`It's Odd ${n}`);
            }

        } catch (error) {
            console.log(`Catch Caught because you did some diff.`);
        }
    }
    else
        console.log(`Please Enter Only Positive Number`);

}
// simpleEvenOdd(11);


//Count & Print all the even and odd .

const betterEvenOdd = function (n) {
    let even = 0;
    let odd = 0;
    if (n > 0) {
        try {

            for (let i = 1; i <= n; i++) {
                if (i % 2 === 0) {
                    even++;
                    // console.log(`Current Val: ${i}  Even Current Value: ${even}`);
                    // console.log(`Even: ${n}`);
                }
                else
                    odd++;
                // console.log(`Current Val: ${i}  Odd Current Value: ${odd}`);
            }
            console.log(`Even: ${even}, Odd: ${odd}`);

        } catch (error) {


        }
    }
    else
        console.log(`Please Enter Only positive`);
}

// betterEvenOdd(124);

const advance = function (n) {
    //Counters

    let evenCount = 0;
    let oddCount = 0;

    //sum
    let even = 0;
    let odd = 0;

    let count = 0;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                evenCount++;
                even += i;
            }
            else {
                oddCount++;
                odd += i;
            }
        }
        console.log(`Even Numbers Count: ${evenCount}`);
        console.log(`Odd Numbers Count: ${oddCount}`);
        console.log(`Sum of Even Numbers: ${even}`);
        console.log(`Sum of Odd Numbers: ${odd}`);

    }
    else
        console.log(`n is negative`);


}

// Example
advance(20);
