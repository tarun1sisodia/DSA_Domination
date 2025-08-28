//Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)


// let sentence = "hello bhai kaise ho";
// let words = sentence.split(" ");
// console.log(words);

function sentence(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length > 0) {
            arr[i] = word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }
    return arr;
}
let str = "hello tarun bro kesa h";
console.log(sentence(str));

