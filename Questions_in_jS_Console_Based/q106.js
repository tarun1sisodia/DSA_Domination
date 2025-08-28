//Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

// for(let i=0;i<65535;i++)
// {
//     console.log(char(i)+"");

// }
function convert() {
    let name = "Tarun";
    let str = "";
    for (let i = 0; i < name.length; i++) {
        let ch = name.charAt(i);
        let code = name.charCodeAt(i);
        if (ch >= 'a' && ch <= 'z') {
            str = str + String.fromCharCode(code - 32);
        }
        else if (ch >= 'A' && ch <= 'Z') {
            str = str + String.fromCharCode(code + 32);
        }
    }
    return str;
}
console.log(convert());
// console.log(str);


let s = "hello bhai kya haal chaaal";
let s1 = s.split(" ");

console.log(s1);
console.log(typeof s1);
