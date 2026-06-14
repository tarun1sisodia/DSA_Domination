

//Check if the string is Palindromic or not
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");

function palindrome(s) {
     s=s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let start  = 0;
    let end = s.length-1;

    while(start<end)
    {
        if(s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(palindrome("mam"));
