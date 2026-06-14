function setDemo(arr) {
    //first Create a new Set.
    let set = new Set(arr); // we just passed the array directly into the set now it automatically get the uniques elements from array and add them directly into set.
    return { Real_array: arr, Unique_Elements_in_sets: set };
}
let arr = [1, 2, 4, 1, 4, 1, 2, 5, 1, 6, 1, 7, 8, 3, 8, 2, 0];
console.log(setDemo(arr));


let set = new Set(arr);
//That's all .

