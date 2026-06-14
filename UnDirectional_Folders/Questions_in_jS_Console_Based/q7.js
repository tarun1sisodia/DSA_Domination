//Accept the length and width of a rectangle. Calculate & print the area and perimeter.

const readline = require("readline");

const sc = readline.createInterface({ input: process.stdin, output: process.stdout });

sc.question('Enter The Length of Rectangle:', (len) => {
    sc.question('Enter the Breadth of Rectangle:', (bre) => {
        let l = +len;
        let b = +bre;
        triangle(l, b)
        sc.close()

    });
});

function triangle(l, b) {
    user?.area(l, b); //Here i have created an object that is performing directly operation to number.
    user?.perimeter(l, b);
    //Yahan humne object bana h aur usme ek humne optional chaining kri h  jisse if i did not get anything i will get undefined but not any error.

}

let user = {
    area: ((l, b) => { console.log(`Area of Rectange: ${l * b}`); }),
    perimeter: ((l, b) => { console.log(`Perimeter of Rectange: ${2 * (l * b)}`); })
}