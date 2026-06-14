// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = +prompt('Enter the Size for array.');

let arr = [];
let sum = 0;
//yahan hum input le rahe h Array m direct
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Enter the ${i + 1} of array`);
}
//Yahan hum array ke size tak ja rhe h aur har bar hum uske value ko save krte ja rhe h.
for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
}
alert(sum / n); // size of array in no. of elements.
alert(arr); // whole array will be printed here.
alert(sum); // the TOtal sum of all elements of array will be here
// console.log(arr);
// console.log(sum);
