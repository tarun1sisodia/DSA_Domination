function count(str) {

    if (typeof str === "string") return countLetters(str);
    else if (typeof str === "number") countNumber(str);
    else return {
        error: "Only Characters Accepts"
    };

}
let nam = "Rohit Singh Bisht";
console.log(count(nam));

function countLetters(str) {
    let vowel = 0;
    let consonant = 0;
    let str1 = str.toLowerCase();

    for (let i = 0; i < str1.length; i++) {
        let char = str1.charAt(i)

        if ("aeiou".includes(char)) vowel++;
        else if (char === " ") continue;
        else consonant++;

    }
    return { vowel, consonant, str1 };
}
function countNumber(str) {
    if (str >= 0 && str <= Infinity) {
        let even = 0;
        let odd = 0;
        for (let i = 0; i < str; i++) {
            if (i % 2 === 0) {
                even++;
            }
            else odd++;
        }
        // console.log(`Even: ${even} Odd:${odd}`);
        return { even, odd };
    }
}