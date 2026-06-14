
let arr = [10, 20, 30, 40, 50];

let target = 30;

function binarSearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let mid = start + (end - start) / 2;

    while (start <= end) {
        if (arr[mid] === target)
            return mid;
        else if (arr[mid] < target)
            start = mid + 1;
        else
            end = mid - 1;

    }
    return -1;
}