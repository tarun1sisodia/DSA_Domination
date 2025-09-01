let arr = [10, 20, 30, 10, 20, 5, 6];
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}
console.log(set);

let arr1 = [1, 3, 2, 1, 2, 7, 3, 3, 3, 4, 5, 5, 6, 7, 6, 7];
for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) set.delete(arr[i]);
    else set.add(arr[i]);
}
console.log(set);


