function count(str) {
    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowel++;
        }
        else if (char === " ") {
            continue;
        }
        else consonant++;

    }
    console.log(`Vowels: ${vowel} & Consonant: ${consonant} Real String: ${str}`);

}
let nam = "VowelConsonant";
count(nam);