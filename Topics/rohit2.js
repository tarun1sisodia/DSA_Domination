//Smallest Number

let arr = [1, 4, 3, 6, 8];

const findMin = function call(arr) {
    let smallest = arr[0];
    let index = 0;
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            index = i;
        }

    }
    console.log(`Main Array: ${arr} & Index: ${index} & Smallest: ${smallest}`);
}

findMin(arr);