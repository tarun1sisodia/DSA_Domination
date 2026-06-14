

function sorted() {
    let arr = [3, -2, -5, 4, -1, 0, 7];
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] < 0) {
            start++;
        }
        else if (arr[end] >= 0) {
            end--;
        }
        [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    return arr;
}

console.log(sorted());

