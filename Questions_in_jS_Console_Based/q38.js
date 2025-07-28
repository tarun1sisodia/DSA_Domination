//Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

function strongNumber(n) {
    let copyN = n;
    let sum = 0;
    let digit = 0;
    while (n > 0) {
        let fact = 1;
        digit = n % 10; // ek last ka number nikalane ke liye.

        for (let i = 1; i <= digit; i++) {
            fact *= i;
        }
        sum += fact;
        n = Math.floor(n / 10);
    }
    if (copyN === sum)
        console.log('Yes->Strong Number ');
    else
        console.log(`No it's not a Strong number`);


}

strongNumber(145);


function stron2(n) {
    let copyN = n;
    let sum = 0;
    let digit = 0;
    while (n > 0) {
        //this fact is for reset everytime okya
        let fact = 1;
        //To Seperate digit or take the last digit from number
        digit = n % 10;
        // To find the Factorial of Value. or digit.
        for (let i = 1; i <= digit; i++) {
            fact *= i;
        }
        //This is for to sum all the values and match.
        sum += fact;
        //to remove the last value from the n.
        n = Math.floor(n / 10);

    }
    copyN === sum ? console.log("Strong h") : console.log("Strong nhi h ");
}

stron2(145);

function palindrome(n) {

    let rev = 0;
    let sum = 0;
    let digit = 0;

    let copyN = n;

    while (n > 0) {
        //Eq-1
        digit = n % 10;
        //Eq-2
        rev = rev * 10 + digit;
        //Okay now i have also add the line to sum the digits and know the total sum of numbers.
        sum += digit;
        //Eq-3
        n = Math.floor(n / 10);
    }
    rev === copyN ? console.log(`${rev} === ${copyN} Palindrome h `) : console.log(`${rev} === ${copyN} Palindrome nhi h`);

    // This is sum of all the numbers.
    console.log(sum);


}
palindrome();


