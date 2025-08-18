//Accept a string and print the frequency of each character present in the string

function frequency(str) {
    /*  let arr = [];
     for (let i = 0; i < 128; i++) {
         arr[i] = 0;
     } */
    
    let arr = new Array(128).fill(0);
    // console.log(arr);
    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i);
        arr[ch] += 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(`${String.fromCharCode(i)} -> ${arr[i]}`);
        }
    }
}
frequency("TarunSisodiaThakur")