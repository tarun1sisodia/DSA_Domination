//Check if array is sorted in increasing order or not.

let arr = [1, 2, 3, 4, 3];

let isSorted = true;

let n = arr.length - 1;

for (let i = 0; i < n; i++) { // last ke element ko hum nhi gin rheh .

    if (arr[i] < arr[i + 1]) {
        
        isSorted = false;
        
        break;
    }

}

console.log(`${isSorted}`);
