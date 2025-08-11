//Check if array is sorted in increasing order or not.

// let arr = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, 7, 5];

let isSorted = true;

let n = arr.length - 1;

arr.forEach((i) => {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        console.log('Array is Not Sorted');
    }
});

console.log(`${isSorted}`);
