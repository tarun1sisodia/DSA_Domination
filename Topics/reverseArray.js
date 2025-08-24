function main() {

    let arr = [1, 3, 7, 5, 8];
    let j = 0;
    let temp = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }

    console.table(temp);
    console.log(temp);
    console.log(`Copied Array: ${temp}`);
}

function trying() {
    let arr = [1, 2, 3, 4, 5];
    let j = arr.length - 1;
    let i = 0;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;

    }
    console.log(arr);

}
trying();

function rotateBy1Left() {
    let arr = [10, 20, 30, 40, 50, 60];
    let temp = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = arr[i];
    }
    arr[0] = temp;
    console.log(arr);
}

function rotateBy1Right() {
    let arr = [10, 20, 30, 40, 50, 60];
    let temp = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];;
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}

rotateBy1Right()
function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

bubble([2, 4, 1, 6, 8, 3]);

// Bubble Sort with Single Loop
function bubbleSortSingleLoop(arr) {
    let n = arr.length;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Reduce comparison range as largest element is bubbled up
    }
    console.log("Single loop bubble sort result:", arr);
    return arr;
}

// Alternative: Pure single loop approach with counter
function bubbleSortPureSingleLoop(arr) {
    let totalComparisons = 0;
    let maxComparisons = (arr.length * (arr.length - 1)) / 2;
    let i = 0;
    let passComplete = false;
    let currentPass = 0;

    while (totalComparisons < maxComparisons) {
        if (i >= arr.length - 1 - currentPass) {
            i = 0;
            currentPass++;
            passComplete = true;
        }

        if (passComplete && currentPass >= arr.length - 1) break;

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

        i++;
        totalComparisons++;
        passComplete = false;
    }

    console.log("Pure single loop bubble sort result:", arr);
    return arr;
}

// Test both approaches
bubbleSortSingleLoop([64, 34, 25, 12, 22, 11, 90]);
bubbleSortPureSingleLoop([5, 2, 8, 1, 9, 3]);



function duplication() {
    let arr = [1, 2, 4, 5, 6, 1, 7];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                console.log(`Found Copy ${arr[i]}=> ${i} & ${arr[j]}=>${j}`);

                return true;
            }
        }
    }
    return false;
}
console.log(duplication());

function checkDupli() {
    let arr = [1, 2, 4, 5, 6, 1, 7];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

