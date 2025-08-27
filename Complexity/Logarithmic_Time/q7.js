//First occurrence of target in sorted array
function occur() {
    let arr = [2, 4, 4, 4, 5, 5, 6];
    let k = 6;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return i;
        }
    }
    return -1;
}

console.log(occur());


//more
function more() {
    let arr = [2, 4, 4, 4, 5, 5, 6];
    let k = 5;
    let result = -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === k) {
            result = mid;
            end = mid - 1;
        }
        else if (arr[mid] < k) start = mid + 1;
        else end = mid - 1;
    }
    return result;
}
console.log(more());
