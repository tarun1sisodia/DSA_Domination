//40 Print \hello\" until user gives wrong input using do while"

const readline = require('readline');

const sc = readline.createInterface({
    input: process.stdin,
    input: process.stdout
});


sc.question('Enter the +ve Value', (n) => {
    let N = parseInt(n);
    if (N > 0) console.log("Hello");
    sc.close();
});