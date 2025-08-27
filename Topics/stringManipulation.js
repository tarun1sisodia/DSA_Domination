function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const reversed = reverseString(str);
    return reversed === str;
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(isPalindrome("naman")); // Output: true
console.log(isPalindrome("hello")); // Output: false


let me = "Galgotias University";

console.log(me.split('').reverse().join(''));

