//41 Make a choice based calculator using do while
/*
const readline = require("readline");
const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Running the Calculator.', (n) => {
    calculator(n);
    sc.close();
});
*/

// calculator();

do {
    let n = +prompt('Enter 1 to 5 repectively:\n+,-,*,%,Existing the loop');
    if (n === 5) {
        break;
    }
    else {
        let firstName = +prompt('Enter First Value.');
        let secondName = +prompt('Enter Second Value..');

        if (n === 1) {
            alert(`Add: ${firstName + secondName}`);
        }
        if (n === 2) {
            alert(`Minus: ${firstName - secondName}`);
        }
        if (n === 3) {
            alert(`Multiplication: ${firstName * secondName} `);
        }
        if (n === 4) {
            if (secondName === 0) {
                alert('Second is 0 which is invalid.. ');
            }
            else
                alert(`Division: ${firstName % secondName} `);
        }
    }
} while (true)

