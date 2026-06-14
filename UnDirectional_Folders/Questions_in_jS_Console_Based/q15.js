//Accept an integer and check whether it is an even number or odd.

let n = parseInt(prompt('Enter the Number to Check Even or ODD.'));
try {
    if (n % 2 == 0) alert(`Number is Even: ${n}`);
    else if (n % 2 == 1) alert('Odd', n);
    else alert("You have Entered something ")

} catch (error) {
    console.log(`Please Enter Correct Data`);

}

