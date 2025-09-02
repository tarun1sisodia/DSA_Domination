/**
 * @param {string} s - a string of lowercase English letters
 * @return {character} - the first letter that appears twice
 */
function repeatedCharacter(s) {
    const seen = new Set();
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (seen.has(ch)) {
            return ch;
        }
        seen.add(ch);
    }
    return null;
}

function getNext(num) {
    let total = 0;
    while (num > 0) {
        let digit = num % 10;
        total += digit * digit;
        num = Math.floor(num / 10);
    }
    return total;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    const seen = new Set();

    function getNext(num) {
        let total = 0;
        while (num > 0) {
            let digit = num % 10;
            total += digit * digit;
            num = Math.floor(num / 10);
        }
        return total;
    }

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
}
console.log(isHappy(2));


console.log(getNext(12));
