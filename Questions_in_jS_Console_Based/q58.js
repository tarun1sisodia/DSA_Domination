//Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let arr = [10, 20, 30, 40];

// // let n = +prompt('Size:');

// for (let j = 0; j <= n; j++) {
//     arr[j] = +prompt("Enter");

// }
//an array that is temporary and it has same length as main array.
// let temp = new Array(arr.length);

// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {

//     temp[j] = arr[i];

//     j++;
// }
// console.log(temp);


let i = 0;
let j = arr.length - 1;

while (i < j) {

    let temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}

console.log(arr);
