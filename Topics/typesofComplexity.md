# 📌 Time Complexity Types (With Basic & Desi Examples)

---

## **1️⃣ Constant Time — O(1)**  
**Meaning**: Input size chahe kitna bhi ho, steps same rahte hain.

### Basic Example 1:
```js
// Accessing an array element
let arr = [10, 20, 30, 40];
console.log(arr[2]); // Always 1 step


// Returning a fixed value
function getFive() {
    return 5;
}
console.log(getFive());

// Ek plate se ek ladoo ek bande ko dena
function giveLadoo(name) {
    console.log(`Ladoo diya ${name} ko`);
}

giveLadoo("Amit"); // Same time for 1 person or 100 people

2️⃣ Linear Time — O(n)
Meaning: Time grows directly with input size.

// Printing all array elements
let arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num)); //1,2,3,4

// Finding sum of array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) sum += num;
    return sum;
}
console.log(sumArray([1, 2, 3])); //6

// Har guest ko individually milna aur gift dena
function giveGifts(guests) {
    for (let guest of guests) {
        console.log(`Gift diya ${guest} ko`);
    }
}
giveGifts(["Amit", "Neha", "Rahul"]);

3️⃣ Quadratic Time — O(n²)
Meaning: Nested loops; input double, time becomes 4x.

// Printing all pairs in an array
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
    }
}

// Simple matrix addition
let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];
let result = [];

for (let i = 0; i < 2; i++) {
    result[i] = [];
    for (let j = 0; j < 2; j++) {
        result[i][j] = a[i][j] + b[i][j];
    }
}
console.log(result);

// Har guest ko har guest se milwana
function introduceGuests(guests) {
    for (let i = 0; i < guests.length; i++) {
        for (let j = 0; j < guests.length; j++) {
            console.log(`${guests[i]} met ${guests[j]}`);
        }
    }
}
introduceGuests(["Amit", "Neha", "Rahul"]);




