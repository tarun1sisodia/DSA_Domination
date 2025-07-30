//Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)


let n = +prompt('Enter the size of array..');
let arr = [];

for (let j = 0; j < n; j++) {
    arr[j] = +prompt(`Enter  ${j + 1}`);
}

let greatest = Math.max(arr[0], arr[1]);

let secondGreatest = Math.min(arr[0], arr[1]);

let index = 0;

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > greatest) {
        
        secondGreatest = greatest;
        greatest = arr[i];
        // index = i;
    }
    else if (arr[i] > secondGreatest && arr[i] != greatest) {
        secondGreatest = arr[i];
    }
    // console.log(max);

    // console.log(arr);
}
// console.log(max);
// console.log(arr);
alert(secondGreatest);
