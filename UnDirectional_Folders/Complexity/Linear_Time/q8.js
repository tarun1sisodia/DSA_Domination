let arr = [1, 3, 25, 63, 72, 62, 72, 1, 2];
let sum = 0;

for (const val of arr) {
    sum += val;
}
console.log(sum / arr.length);
