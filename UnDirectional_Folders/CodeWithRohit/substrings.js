function subString(str, start, end) {

    let newSub = "";
    for (let i = start; i < end; i++) {
        // newSub += str.charAt(i);
        newSub += str[i];
    }
    return { newSub };
}

let string = "TarunSisodia";
console.log(subString(string, 0, 4));



