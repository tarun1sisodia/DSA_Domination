

let arr = [10, 20, 30, 40];

let n = arr.length;

let newArray = new Array(n);

let j = 0;

for (let i = n - 1; i >= 0; i--) {
    
    newArray[j] = arr[i];

    j++;
}

console.log(`Real: ${arr}`);
console.log(`Copy : ${newArray}`);


