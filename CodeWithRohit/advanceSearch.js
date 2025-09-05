//sorted pehle
//count all key 
//if array is size 0 then return
//index of keys
let array = [10, 12, 14, 15, 25, 12, 60, 80, 55, 12, 12, 91];
let target = 12;
// console.log(binary(array, target));

function binary(array, key) {
    let arr = array.sort((a, b) => a - b); // n.
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    let indexArray = [];
    if (arr.length === 0) return -1;
    else
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (arr[mid] === key) {
                count++;
                indexArray.push(mid);
            }
            else if (arr[mid] < key) {
                start = mid + 1;
            }
            else
                end = mid - 1;
        }
    if (count === 0) return -1;
    console.log(`${indexArray} ${count}`);

}

console.log(linear(array, target));

function linear(arr, key) {
    // let arr = array.sort((a, b) => a - b);
    let count = 0;
    let indexArray = [];
    if (arr.length === 0) return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            count++;
            indexArray.push(i);
            // return `Found at Index: ${i} && Key: ${key}`;
        }
    }
    for (let i = 0; i < indexArray.length; i++) {
        console.log(indexArray[i]);
    }
    return { count };
}
