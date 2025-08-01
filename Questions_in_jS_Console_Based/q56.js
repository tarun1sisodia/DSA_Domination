//Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)


let n = +prompt('Enter the size of array..');
let arr = [];

for (let j = 0; j < n; j++) {
    arr[j] = +prompt(`Enter  ${j + 1}`);
}
//sabse bada element pure array m 
let greatest = Math.max(arr[0], arr[1]);
// second sabse bada element pure array m.
let secondGreatest = Math.min(arr[0], arr[1]);

let index = 0;
//2 se check islye kr rhe h kyunki humare 0 and 1 index already taken  .
for (let i = 2; i < arr.length; i++) {
    //ab agr current index of array bada hua to update honge greatest and 2ndGreatest value.
    if (arr[i] > greatest) {
        //Updating the Second Greatest kyunki hume greatest m new value add krnih.
        secondGreatest = greatest;
        //ab new value add kr rhe h.
        greatest = arr[i];
        // index = i;
    }
    else if (arr[i] > secondGreatest && arr[i] != greatest) {
        //agr seconds greatest bada hua current se to update ho jayega but greatest se bada  or equal na ho.
        secondGreatest = arr[i];
    }
    // console.log(max);

    // console.log(arr);
}
// console.log(max);
// console.log(arr);
alert(secondGreatest);
