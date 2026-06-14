//9. Search insert position in sorted array  

function searchInsert() {
    let arr = [1, 3, 5, 6];
    let target = 2;
    let start = 0;
    let end = arr.length - 1;
    let ans = arr.length;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
}
console.log(searchInsert());
