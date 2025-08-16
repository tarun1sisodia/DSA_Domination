//Array Reverse Without Using Extra space

let arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;
let temp = 0;

while (start < end) {
    // temp = arr[start];
    // arr[start] = arr[end];
    // arr[end] = temp;

    // Destructuring assignment ka use (short syntax)
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;

}
console.log(arr);


let tarun = ['Radhika', 'Gunjan', 'Kashish', 'Anuradha', 'Muskan'];
//              Muskan, Anuradha, Kashish, Gunjan, Radhika

// let size = tarun.length - 1;
// let i = 0;
// while (tarun[i] < tarun[tarun.length - 1]) {

//     [tarun[i], tarun[tarun.length - 1 - i]] = [tarun[tarun.length - 1 - i], tarun[i]];
//     i++;
// }
// console.log(tarun);
// console.log(`Array Length -1: ${tarun.length - 1}`);
