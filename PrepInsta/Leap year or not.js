leapYear(2011)

function leapYear(year) {

    if (year % 400 === 0) {
        console.log(`${year} a leap year`);
    }
    else if (year % 4 === 0 && year % 100 != 0) {
        console.log(`${year} a leap year`);
    }
    else
        console.log(`${year} a not leap year`);
}