//Accept a number and print its reverse


function reverse(n) {
    let digit = 0;
    let reverse = 0;
    // Here we are checking the number is greator than 0.
    while (n > 0) {
        // quoestionat . 10 % 3=> 3
        digit = (n % 10);

        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);
    }
    console.log(reverse);
}
reverse(654321)
