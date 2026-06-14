//Array left rotation by K elements
function Rotation() {
    let arr = [10, 20, 30, 40, 50];

    let k = 5;

    let n = arr.length - 1;

    // For reducing the operation if the number can be divided..
    k = k % n;
    // If K === n meands length is 5 and k for rotation is also 5 then no need to travese just reverse.
    if(k === n){
        return arr;
    }
    for (let i = 0; i < k; i++) {
        let temp = arr[0];

        for (let j = 0; j < n; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n] = temp;
    }
    console.log(arr);
}

function leftShiftRotation() {
    let arr1 = [10, 20, 30, 40];
    let k1 = 2;
    let n1 = arr1.length - 1;
    k1 = k1 % n1;
    console.log(arr1);

    for (let j = 0; j <= k; j++) {
        temp = arr1[0];

        for (let i = 0; i < n1; i++) {
            arr1[i] = arr1[i + 1];

        }
        arr1[n1] = temp;
    }

    console.log(arr1);
}
//Right Shift by 1.

function rightShiftRotation() {
    let arr = [10, 20, 30, 40];
    let n = arr.length - 1;
    temp = arr[n]
    for (let i = n; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    console.log(arr);
}
// rightShiftRotation();



function KrightShiftRotation(k) {
    let arr = [10, 20, 30, 40];
    let n = arr.length - 1;
    k = Math.floor(k % n);

    for (let j = 0; j <= k; j++) {
        let temp = arr[n];
        for (let i = n; i > 0; i--) {
            arr[i] = arr[i - 1]
        }
        arr[0] = temp;
    }
    console.log(arr);

}
KrightShiftRotation(3);

let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);


let cristian = [1, 2, 4, 5];
console.log(cristian);
let k = 1;
k = k % cristian.length - 1;
for (let i = 0; i <= k; i++) {
    let temp = cristian[0];
    for (let i = 0; i < cristian.length-1; i++) {
        cristian[i] = cristian[i + 1];
    }
    cristian[cristian.length - 1] = temp;
}
console.log(cristian);
