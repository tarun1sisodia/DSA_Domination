//Accept an English alphabet from user and check if it is a consonant or a vowel.

let englishLetter = prompt("Enter the Only 1 Letter.\n otherwise you will get consonant.").toLowerCase();



((ch) => {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        alert('Vowel..');
    }
    else {
        alert("Consonant..")
    }
})(englishLetter);