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
