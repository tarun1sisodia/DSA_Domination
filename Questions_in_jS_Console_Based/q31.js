//Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

function sumOfFactors(n) {
    //here we are making a variable to store total addition..
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        //checking if the number is divisible or not.. by i
        if (n % i === 0) {
            //Adding i in sum .
            sum += i;
            // console.log(i);
            console.log(sum);


        }
    }
}
sumOfFactors(50)