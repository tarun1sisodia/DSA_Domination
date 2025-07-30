//Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)


let n = +prompt('Enter the size of array..');
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Enter  ${i + 1}`);
}

let max = arr[0];
let index = 0;
for (let j = 0; j < arr.length; j++) {
    // arr[j] > max ? max =arr[j] && index =: 
    if (arr[j] > max) {
        max = arr[j];
        index = j;
    }
    // console.log(max);

    // console.log(arr);
}
// console.log(max);
// console.log(arr);
