//Accept a string and print it in reverse order

function stringReverse(arr) {
    // let reversed = "";
    // for (let i = name.length - 1; i >= 0; i--) {
    //     // console.log(name.charAt(i));
    //     reversed += name[i];
    // }
    // console.log(reversed);

    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        // if (arr[start] !== arr[end]) return false;
        start++;
        end--;
    }
    return true;
    // return arr;
    //   
}
console.log(stringReverse("Tarun"));


function reverseInPlace(str) {
    //start == i;
    //end ==j;

    let arr = Array.from(str);
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }

    return arr.join("");
}

// console.log(reverseInPlace("world")); // dlrow

