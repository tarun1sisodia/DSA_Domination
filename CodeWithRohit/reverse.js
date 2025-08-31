function reverse(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str.charAt(i);
        console.log(ch);
    }
    return str;
}
let str = "Tarun";
console.log(reverse(str));
