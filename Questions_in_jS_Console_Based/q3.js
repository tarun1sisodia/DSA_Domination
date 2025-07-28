// we have many ways to do that but we are using only console based code in node.js

//Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the 1st no.", (a) => {
    r1.question("Enter the 2nd no.", (b) => {

        const A = parseInt(a);
        const B = parseInt(b);
        maySUm(A, B);
        r1.close(); // if we did not pass this the node will wait for other input as well as.
    });
});

function maySUm(a, b) {
    return console.log(a + b);
}

//const readline = require("readline")

/*
    require - is used to import module in Node. and here we are importing the readline module
    to take input from user in console of node or terminal user..

    Just like Scanner does in java..

*/

//const r1 = readline.createInterface({
// input:process.stdin,
// output:process.stdout
// });
/*
    r1 -> Is our object just like we do in java When we use Scanner class we need to create  object for class to access its functions. 

    Here we are using r1 for it.. also remember always close your object other wise data can be leak or curropt.
    
    //createInterface -> it is used to create a connection with the terminal and node.
    to pass the data and receives it to show on terminal.

    //input:process.stdin 
    Here we are accessing data from terminal (stdin -> standard input..) 
    Inshort its a Readable Stream..

    //output:process.stdout
    Now we are sending the data to terminal or we can say receiving data from the node..
    its a Writeable Stream..

    //process-> Its a Global Object.

    Scanner sc = new Scanner(System.in);

    r1.question('Name:',(nameInput)=>{
        r1.question('Age',(ageInput)={
            const name = nameInput;
            const age = parseInt(ageInput);
            console.log(`Hey ${name} and you are ${age}`)
        });
    });

    //Here we are asking the questions from user/ Or we are saying that give us Input..

    whatever we pass in after question it shows in terminal..
    //Remember when user pass something in terminal js receives it as String type so that's our job to convert it in as per our need.

    //If user types 12, then a = "12" (string type!)

    //parseInt, or any type of conversion in data type used Parse..

    //r1.close();
        This is very important.

        It closes the input stream so Node.js knows the program is complete.

        If you don’t close it, Node will keep waiting for input — even after you've finished typing.

        📌 It’s like doing sc.close(); in Java.




 */
