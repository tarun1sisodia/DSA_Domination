//Word dictionary me search karna binary search se 
function newWord() {
    let arr = ["apple", "ball", "cat", "dog", "elephant", "zebra"];
    let k = "dog";

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === k) return mid;
        else if (arr[mid] < k) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}
console.log(newWord());
