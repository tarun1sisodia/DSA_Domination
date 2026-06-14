let arr = [1, 3, 7, 6, 5, 9];

function thirdLarget(arr) {
    let largest = Math.max(arr[0], arr[1]);
    let secondGreatest = Math.min(arr[0], arr[1]);
    let thirdLargest = 0;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirdLargest = secondGreatest;
            secondGreatest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondGreatest && arr[i] != largest) {
            thirdLargest = secondGreatest;
            secondGreatest = arr[i];
        }
        else if (arr[i] > thirdLargest && arr[i] < secondGreatest) {
            thirdLargest = arr[i];
        }
    }
    console.log(`Array: ${arr}\nLargest: ${largest}\nSecondGreatest: ${secondGreatest}\nThird Larget: ${thirdLargest}`);

}
thirdLarget(arr);