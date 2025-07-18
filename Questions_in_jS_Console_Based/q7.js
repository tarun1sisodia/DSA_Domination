//Accept the length and width of a rectangle. Calculate & print the area and perimeter.

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter The Length of Rectangle:', (len) => {
    sc.question('Enter the Breadth of Rectangle:', (bre) => {
        const l = parseInt(len);
        const b = parseInt(bre);

        console.log(`Area of Rectange: ${l * b}`);
        console.log(`Perimeter of Rectange: ${2 * (l * b)}`);
        sc.close()
        
    });
});


