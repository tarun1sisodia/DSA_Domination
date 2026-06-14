let arr = [[10, 20, 30], [100, 200, 300], [12, 13, 5]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(`${i} ${j} =>${arr[i][j]}`);
    }
}


let n = arr.length;
let sum = 0;
let sum2 = 0;

for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
        if (a == b) { // this logic is from X Pattern.
            sum += arr[a][b];
        }
        else if (a + b == n - 1) {
            // console.log(arr[a][b]);
            sum2 += arr[a][b];
        }
    }
}
console.log(`leftSum ${sum}`);
console.log(`RightSum ${sum2}`);
