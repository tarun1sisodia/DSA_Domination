//43 Question 22 using Switch (Check Consonant or Vowel using Switch)


let ch = prompt('Enter The Word OR Letter.').toLowerCase();
newQ22(ch);
function newQ22(ch) {
    try {
        if (ch.length != 1 || !ch.match(/[a-Z]/i)) {
            alert("❌ Invalid input. Enter a single alphabet letter.");
            return;
        }

        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                alert(`Yeah Ye Vowel h.${ch}`);
                break;

            default:
                alert('Ye Consonant h.')
                break;
        }
    } catch (Error) {
        alert('Oh oh ,, Wrong Input.')
    }
}