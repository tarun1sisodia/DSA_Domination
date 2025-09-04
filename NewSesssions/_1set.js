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


let ids = [101, 102, 101, 103, 104, 102];
/* let set1 = new Set();

for (let i of ids) {
    set1.add(i);
}
console.log(set1);
 */

//also if you want to make it in 2 lines.
let dtr = new Set(ids);
console.log(dtr);


//if you want array which is made by set data.
let newIDS = new Set(ids);
let uniqueArray = [...newIDS] 
// console.log(newIDS);
console.log(uniqueArray);
