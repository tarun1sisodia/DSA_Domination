//Array Reverse Without Using Extra space

let arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;
let temp = 0;

while (start < end) {
    // temp = arr[start];
    // arr[start] = arr[end];
    // arr[end] = temp;

    // Destructuring assignment ka use (short syntax)
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;

}
console.log(arr);
