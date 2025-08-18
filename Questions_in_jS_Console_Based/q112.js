
function isAnagram(str, str1) {
    if (str.length !== str1.length) return false;

    str = str.toLowerCase();
    str1 = str1.toLowerCase();

    let freq = {};

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str1) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}

console.log(isAnagram("Tarun", "nuraT"));  // true
console.log(isAnagram("tarun", "arunt"));      // false
