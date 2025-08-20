// check arrays equal or not.

let arr = [1, 3, 7, 5];
let arr1 = [1, 3, 7, 5];

if (arr.length != arr1.length) return false;

arr = arr.sort((a, b) => a - b);
arr1 = arr1.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr[j]) {
            
        }
    }
}
