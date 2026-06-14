
let arr = [10, 20, 30, 40, 50];

let target = 25;

let low = 0;

let high = arr.length - 1;

let answer = -1;

while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
        console.log(`Found At: ${mid}`);
        answer = arr[mid];
        break;
    }
    else if (arr[mid] < target) {
        low = mid + 1;
    }
    else
        high = mid - 1;

    if (low < arr.length) {
        console.log(`Ceiling: ${arr[low]}`);
    } else {
        console.log("Ceiling does not exist");
    }
}