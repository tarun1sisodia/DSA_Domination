//Array left rotation by K elements

let arr = [10, 20, 30, 40, 50];

let k = 5;

let n = arr.length - 1;

k = k % n;

for (let i = 0; i < k; i++) {
    let temp = arr[0];

    for (let j = 0; j < n; j++) {
        arr[j] = arr[j + 1];
    }
    arr[n] = temp;
}
console.log(arr);

