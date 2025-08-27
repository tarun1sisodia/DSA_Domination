/* 
function reverse() {

    let na = "naman";

    let rev = "";

    for (let i = na.length - 1; i >= 0; i--) {
        let ch = na.charAt(i);
        rev += ch;
    }

    if (rev === na) {
        console.log("Palindrome String.");
    }
    else {
        console.log("Not Palindrome String.");

    }
}

reverse();
 */

function twoPointerReverseString(str) {
    let i = 0; 
    let j = str.length - 1;
    let isPalindrome = true;
    
    while (i < j) {
        if (str.charAt(i) != str.charAt(j)) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    // console.log(isPalindrome ? "Palindrome" : "Not Palindrome");
    return isPalindrome;

}
twoPointerReverseString("Naman");