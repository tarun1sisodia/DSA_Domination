/*

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
 */
function currency(cash) {
    // Array of available Indian currency notes in descending order
    const notes = [500, 200, 100, 50, 20, 10];

    // Loop through each note denomination
    //ye i 0 se start hogi aur jayegi apne notes ke types ki list tk.
    for (let i = 0; i < notes.length; i++) {

        // Calculate how many notes of the current denomination are needed
        //cash /Notes[i] se pata chalta h kitna note ban rhe h ek type ke notes ke . and agr 1 se jyd h to  cash = cash % notes[i];
        const count = Math.floor(cash / notes[i]); // kitne note honge

        // If at least one note of this denomination is needed
        if (count > 0) {

            // Update the remaining cash after using the current denomination
            cash = cash % notes[i]; //kinte bach rhe h note or pese.

            // Print the number of notes of the current denomination
            console.log(`${count} Note of: ${notes[i]}`);

        }

    }

}
currency(6530);