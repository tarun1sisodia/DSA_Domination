let arr = [8, 2, 1, 5, 12, 9, 27, 16];
let n = arr.length
for (const i of arr) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current; //to add where correct place in last.
};

console.log(arr);
