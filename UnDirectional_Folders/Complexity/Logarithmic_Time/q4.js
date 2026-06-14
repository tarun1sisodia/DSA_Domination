function squareRoot(n) {
    if (n === 0 || n === 1)
        return n;

    let start = 1;
    let end = n;
    let ans = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid * mid === n) {
            return `Perfect`;  // ya return mid;
        } else if (mid * mid < n) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ans;
}

console.log(squareRoot(17));  // Output: 4
