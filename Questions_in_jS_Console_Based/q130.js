//Find the frequency of elements in an integer array

const arr = [1, 2, 2, 3];
const counted = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (counted.includes(arr[i])) continue;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) count++;
    }
    console.log(arr[i] + " occurs " + count + " times");
    counted.push(arr[i]);
}
