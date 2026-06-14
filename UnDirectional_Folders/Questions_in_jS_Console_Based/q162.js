//Print natural numbers 1-n / n-1

function printNums(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    printNums(n - 1);

}
printNums(5);