//Linear Search an array - If element found print the index, else -1

let arr = [12, 3, 4, 25, 66, 2, 45, 64, 4, 2, 6];

let target = 45;

let index = -1;

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] === target) {
        index = i;
        break;
    }

}
if (arr[i] === target) {
    console.log(`found at ${index}`);

}
else
    console.log('-1');
