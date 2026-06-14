// Find the Maximum value in array.

let arr = [1, 4, 0, 0, 0, 6, 8];

const findMax = function call(arr) {
    let greatest = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
            index = i;
        }

    }
    console.log(`Main Array: ${arr} & Index: ${index} & Greatest: ${greatest}`);
}

findMax(arr);