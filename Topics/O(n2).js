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
