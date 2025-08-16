// Array ..

// 

// Find the Maximum value in array.

let arr = [1, 4, 0, 6, 8];


const findMax = function call(arr) {
    let greatest = 0;
    let secondGreatest = 0;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > greatest) {
            secondGreatest = greatest
            greatest = arr[i];
            index = i;
        }
        else if (arr[i] > secondGreatest && arr[i] != greatest) {
            secondGreatest = arr[i]

        }

    }
    console.log(`Main Array: ${arr} & Index: ${index} & Greatest: ${greatest} Second Greatest ${secondGreatest}`);
}

findMax(arr);