let students = ['Tarun Sisodia', 'Ali Bhaiya', 'HarshVardhan Sharma', 'Sanjana'];

console.log(students[2]); // mtlb ye O(1) kyunki hum direct ek operation m pura khtm kr rhe h .
//-----------------------------------------------------------------------//

let n = 5;

console.log(n * (n + 1) / 2);


// 💡 Idea: Ek array se ek element print karna — size chahe 10 ho ya 1 crore, ek hi step lagega.

function getElement(arr, index) {
    console.log(arr[index]);
}

let nums = [10, 20, 30, 40, 50];
getElement(nums, 2); // Always O(1)

// Example: Finding the largest number in an array



function findLargestNumber(arr) {
    let largest = arr[0]; // O(1) Space (only one variable)
    for (let i = 1; i < arr.length; i++) { // O(n) Time
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
// Test
let numbers = [10, 55, 23, 78, 12, 99, 4];
console.log("Largest Number:", findLargestNumber(numbers));

function getElement(arr, index) {
    console.log(arr[index]);
}

let num = [10, 20, 30, 40, 50];
getElement(num, 2); // Always O(1)






