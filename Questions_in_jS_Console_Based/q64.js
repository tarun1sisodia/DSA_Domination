// Bubble Sorting.

let arr = [6, 14, 3, 10, 18];
let n = arr.length - 1;
// for Phasing 
for (let i = 0; i < n; i++) {

    // For Swapping and Shifting
    for (let j = 0; j < n - i; j++) { // i minus isye kara h taki har bar ek loop kam ho sake.

        if (arr[j] > arr[j + 1]) {
            swap(arr, i, j)
        }
    }
}
console.log(arr);

function swap(arr, i, j) {
    let temp = 0;
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}