// let countString = "TarunSisodia";
// let count = 0;

// for (let i = 0; i < countString.length; i++) {
//     if ('a' === countString.charAt(i) || 'e' === countString.charAt(i) || 'i' === countString.charAt(i) || 'o' === countString.charAt(i) || 'u' === countString.charAt(i)) {
//         count++
//     }
// }
// console.log(count);

let str = "TarunSisodia".toLowerCase();
let count = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let char of str) {
    if (vowels.includes(char)) count++;
}

console.log(count); // 6
