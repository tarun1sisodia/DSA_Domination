function sumArray(arr) {
    let sum = 0;
    for (let num of arr) sum += num;
    return sum;
}
console.log(`Sum of Elements of Array: ${sumArray([1, 2, 3])}`);

function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let nums = [10, 20, 30, 40, 50];
printAllElements(nums); // O(n)
