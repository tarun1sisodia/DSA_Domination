//Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)


// let sentence = "hello bhai kaise ho";
// let words = sentence.split(" ");
// console.log(words);

function sentence(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length >= 1 || word.length < 2) {
            arr[i] = word.toLowerCase();
        }
        if (word.length > 2) {
            arr[i] = word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }
    return arr;
}
let str = "YO YO kesa ho tarun ";
console.log(sentence(str));



/* You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

If the length of the word is 1 or 2 letters, change all letters to lowercase.
Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
Return the capitalized title. */