
const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Amount of Cash: ', (userAmount) => {
    let cash = parseInt(userAmount);
    currency(cash);
    sc.close();
});

function currency(cash) {
    if (cash >= 500) {
        const note = cash / 500;
        cash = cash % 500;
    }
    if (cash >= 200) {
        note = cash / 200;
        cash = cash % 200;
    }
    if (cash >= 100) {
        note = cash / 100;
        cash = cash % 100;
    }
    if (cash >= 50) {
        note = cash / 50;
        cash = cash % 50;
    }
    if (cash >= 20) {
        note = cash / 20;
        cash = cash % 20;
    }
    if (cash >= 10) {
        note = cash / 10;
        cash = cash % 10;
    }

}