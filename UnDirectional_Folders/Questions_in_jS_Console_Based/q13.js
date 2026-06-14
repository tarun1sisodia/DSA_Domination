// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

let gender = prompt('Enter the Gender in M // F:',);

try {
    if (gender == 'M' || gender == 'm') {
        alert("Good Morning Sir");
    }
    else if (gender === 'f' || gender === 'F') {
        alert("Good Morning Mam");
    }
    else
        alert('Do not Enter Other Data...')

} catch (error) {
    alert('Do not Enter Anyother Data.')
}

