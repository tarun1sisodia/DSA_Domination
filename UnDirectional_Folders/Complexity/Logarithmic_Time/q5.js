/* // let b = true;
// b++;
// console.log(b);

let i =11;
j = --(i++);
console.log(j);
/*  */

// Sorted matrix me search karna binary search se  
function binarSeearch() {

    let arr = [1, 2, 4, 6, 8];
    let k = 8;

    let start = 0;
    let end = arr.length-1;
    while (start <= end) {

        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === k) return mid;
        else if (arr[mid] < k) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}
console.log(binarSeearch());
