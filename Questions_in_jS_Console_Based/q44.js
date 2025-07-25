
function guess() {
    let computerGuessed = Math.floor(Math.random() * 100 + 1);

    let user;

    let count = 0;

    do {
        user = +prompt('Guess The Number');
        count++;
        if (user === computerGuessed)
            alert('Congrats baby, You Gotta..Winner');
        else if (user > computerGuessed)
            alert('Too High.. Keep Low');
        else if (user < computerGuessed)
            alert("Too Low.. Keep High.");
        else {
            alert('Unexpected Input..');
        }
    } while (user != computerGuessed && count >= 5);

}
// guess()

const readline = require("readline");
const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Guess The Number..', (a) => {
    user = parseInt(a);
    ogGuess(user);
    sc.close();
});

function ogGuess(user) {
    let random = Math.floor(Math.random() * 100 + 1);
    let count = 0;
    // let user;
    do {
        sc.question('Guess The Number..', (a) => {
            user = parseInt(a);
            sc.close();
        });
        if (user === random)
            console.log('You nailed It Tarun Congrats.');
        else if (user > random)
            console.log('Keep High Please..');
        else if (user < random)
            console.log('Keep Low PLease...');
        else {
            console.log('Unexpected Error i got please review the codebase.');
        }
        count++;

    }
    while (user != random && count != 5)
}