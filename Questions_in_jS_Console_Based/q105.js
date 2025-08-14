function countVowelsAndConsonants(str) {
    // Lowercase me convert taaki capital letters bhi handle ho jaye
    str = str.toLowerCase();

    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        // Check agar letter hai
        if (ch >= 'a' && ch <= 'z') {
            // Vowel check
            if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    console.log("Vowels:", vowelCount);
    console.log("Consonants:", consonantCount);
}

// Test
countVowelsAndConsonants("tarun");
