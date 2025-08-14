//Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

function PalindromicString(name) {
    let start = 0;
    let end = name.length - 1;
    let isPalindrome = true;

    while (start < end) {
        if (name.charAt(start) !== name.charAt(end)) {
            isPalindrome = false;
            break;
        }
        start++;
        end--;
    }
    return isPalindrome;
}

console.log(PalindromicString("mam"));