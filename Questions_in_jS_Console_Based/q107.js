// Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix.

function pref(arr, prefix) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].toLowerCase().startsWith(prefix)) {
            count++;
        }
    }
    return count;
}
let arr = ["attention", "class", "College", "Attire", "Attach", "Attack", "Mode"];

console.log(pref(arr, "Att")); // -> 3
console.log(pref(arr, "att")); // -> 1