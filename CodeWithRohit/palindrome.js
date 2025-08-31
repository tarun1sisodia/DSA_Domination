function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str.charAt(i);
        rev += ch;
    }
    if (rev === str) return true;
    else return false;
}
let str = "MadaM";
console.log(reverse(str));


function shradhaReverse(str) {
    let n = str.length;
    for (let i = 0; i < n/2; i++) {
        if (str.charAt(i) != str.charAt(n - 1 - i)) return false;
    }
    return true;
}
console.log(shradhaReverse("racecar"));
