// Print the unique Elements in an array.

let arr = [1, 2, 2, 3, 4, 4,5,5,5];
let set = new Set(arr);
console.log(set);

//Another Way to do this.
function manualCode() {
    let newArr = [];
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) { count++; }
        }
        if (count === 1) newArr.push(arr[i]);
        else copy.push(arr[i]); // to get all elements of array .
    }
    console.log(newArr);
    console.log(copy);
}
manualCode();

