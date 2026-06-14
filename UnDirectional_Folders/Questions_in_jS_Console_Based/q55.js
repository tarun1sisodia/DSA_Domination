//Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)



// let n = +prompt('Enter the size of array..');
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = +prompt(`Enter  ${i + 1}`);
// }

//sabse pehle hum ek array banayenge.
let arr = [10, 32, 40, 16, 55];

// ab array ka first element ko ek new variable rakh rahe h taki comparision start ho sake.
let max = arr[0];

// ye index variable islye h ki index count ho sake.
let index = 0;
// ab loop 1 se start h kyunki 0 index ko pehle hi store kr diya h max variable m .
for (let i = 1; i < arr.length; i++) {
    //ab kya max ki value arr ke current value se choti h .
    if (max < arr[i]) {
        // max m value dal rahe h arr ke current element ki jo i index pr h 
        max = arr[i];
        // ab index ko update kr rahe h i ko use krke.
        index = i;
        // console.log(`Index: ${index} I:${i} Max: ${max}`);
    }
}
// final m print index and element.
console.log(`index: ${index} Element: ${max}`);
