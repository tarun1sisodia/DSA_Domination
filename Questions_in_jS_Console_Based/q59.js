
//Array Left Rotation by 1.

let arr = [10, 20, 30, 40, 50];

let temp = arr[0];

let n = arr.length - 1;

for (let i = 0; i < n; i++) {

    arr[i] = arr[i + 1];

}

arr[n] = temp;
console.log(arr);

//ANOther way.
let i = 0;
let j = arr.length - 1
while (i < j) {

    arr[i] = arr[i + 1];

    i++;
}

arr[j] = temp;

console.log(arr);

let first = arr.shift();

arr.push(first);
console.log(arr);


