//Accept a year and check if it a leap year or not (google to find out what's a leap year)

let year = parseInt(prompt("Enter the Year.. to check leap year or not.."));

function leapYear(year) {
    if (year % 400 == 0)
        alert(`Leap year ${year}`);
    else if (year % 4 == 0 && year % 100 != 0)
        alert(`Leap year ${year}`);
    else
        alert(`Leap year nhi h yu.. ${year}`)
    return year;
}
alert(leapYear(year));