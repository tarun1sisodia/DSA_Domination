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
// console.log(arr);



let arr1 = [10, 20, 30, 40];
let k1 = 2;
let n1 = arr1.length;
k1 = k1 % n1;
console.log(arr1);

for (let j = 0; j <= k; j++) {
    temp = arr1[0];

    for (let i = 0; i < n1 - 1; i++) {
        arr1[i] = arr1[i + 1];

    }
    arr1[n1 - 1] = temp;
}

console.log(arr1);
