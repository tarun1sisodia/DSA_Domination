//40 Print \hello\" until user gives wrong input using do while"

const readline = require('readline');

const sc = readline.createInterface({
    input: process.stdin,
    input: process.stdout
});

let n;

do {
    console.log('Enter');
    sc.question('Enter the +ve Value', (n) => {
        let N = parseInt(n);
        if (N > 0) console.log("Hello");
        sc.close()
    });


}
while (n > 0);


do {

}
while (true);