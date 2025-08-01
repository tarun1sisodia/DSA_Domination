//Check if array is sorted in increasing order or not.

let arr = [1, 2, 3, 4, 3];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) { // last ke element ko hum nhi gin rheh .
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }

}
console.log(`${isSorted}`);
