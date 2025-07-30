// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = +prompt('Enter the Size for array.');

let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Enter the ${i + 1} of array`);
}

for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
}
alert(sum / n);
alert(arr);
alert(sum);
// console.log(arr);
// console.log(sum);
