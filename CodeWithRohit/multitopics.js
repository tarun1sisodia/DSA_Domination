//Linear Search 
//Binary Search 
//Larget , 2ndLarget, 3dLargest.

let arr = [1, 2, 3, 4, 7, 8];
console.log(main(arr));

function main(arr) {
    let n = arr.length;
    let key = 7;
    console.log(linear(arr, key, n));
    console.log(binary(arr, key, n));
    console.log(alllargest());
}

function linear(arr, key, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === key) {
            return `Found at Index: ${i} && Key: ${key}`;
        }
    }
    return false;
}

function binary(arr, key, n) {
    let start = 0;
    let end = n-1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        else if (arr[mid] < key) {
            start = mid + 1;
        }
        else
            end = mid - 1;
    }
    return -1;
}

function alllargest(arr, n) {
    let l1 = -Infinity;
    let l2 = -Infinity;
    let l3 = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > l1) {
            l3 = l2;
            l2 = l1;
            l1 = arr[i];
        }
        else if (arr[i] > l2 && arr[i] != l1) {
            l3 = l2;
            l2 = arr[i];
        }
        else if (arr[i] > l3 && arr[i] != l2) {
            l3 = arr[i];
        }
    }
    return console.log(`L1: ${l1}, L2: ${l2}, L3: ${l3}`);
}




