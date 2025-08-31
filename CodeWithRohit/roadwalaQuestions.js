let n = 5;
let va = "";

for (let i = 0; i < n; i++) {
    // Spaces
    va += " ".repeat(n - i - 1);

    // Letters
    for (let j = 0; j <= i; j++) {
        let ch = String.fromCharCode(65 + j);
        if (ch === 'E') continue; // skip E
        va += ch;
    }

    // Mirror letters (optional)
    for (let j = i - 1; j >= 0; j--) {
        let ch = String.fromCharCode(65 + j);
        if (ch === 'E') continue;
        va += ch;
    }

    va += "\n"; // new line
}

console.log(va);
