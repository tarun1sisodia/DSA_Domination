// Banking & Finance

//ATM Cash Withdrawal System


function call() {
    let count = 0;
    return () => {
        if (count < 4) {
            count++;
            console.log(`count: ${count}`);
            let balance = +prompt('Withraw Balance');
            // 100 Se Divide honga chahiye taki sirf 00 wale hi note nikal sake atm m se.
            if (balance % 100 === 0) {
                dailyLimit(balance);
            }
            else {
                console.log('Your Amount is Not Appropiate');
            }
        }
        else {
            console.log(`You exceed the limit: ${count}`);
        }
    }
}
const me = call();
me();

// me();
function dailyLimit(amount) {
    let perDayLimit = 25000; //HardCoded Limit.
    let TotalBalance = 55500; // HardCoded Amount of account.
    if (perDayLimit >= amount) {
        const notes = [500, 200, 100];
        TotalBalance = TotalBalance - amount;
        let moneyCount = 0;
        console.log(`Remaining Balance ${TotalBalance}`);
        for (let i = 0; i < notes.length; i++) {
            //Kitne note honge pehle element m se
            moneyCount = Math.floor(amount / notes[i]); // Quotient ... kitne note honge 500 ke , 200 ke, 100.
            console.log(`Note: ${notes[i]} & Number of Notes : ${moneyCount}`);
            // ab hum un noton ko count krenge taki pata chl sake ki kitne note h 500, 200 aur 100 ke ..
            if (moneyCount > 0) {
                //Pura Divide hoga ya nhi..
                amount = amount % notes[i];
            }
        }
    }
    else
        console.log(`Amount is High: ${amount}`);
}

